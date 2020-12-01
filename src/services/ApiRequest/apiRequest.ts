import Axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  CancelTokenSource,
  CancelTokenStatic,
  Method,
  AxiosBasicCredentials,
} from "axios";
import qs from "qs";
import {
  GrantType,
  apiDetailType,
  RequestHeader,
  customRequestData,
  ResponseData,
  ResponseError,
} from "./apiRequest.model";
import TokenService from "../AuthToken/authToken";

const basicAuth: AxiosBasicCredentials = {
  username: "clientid",
  password: "secret",
};

const getGrantType = (): GrantType => {
  return { key: "grant_type", value: "password" };
};

// Cancel a request using a cancel token.
const cancelToken: CancelTokenStatic = Axios.CancelToken;
const source: CancelTokenSource = cancelToken.source();

/**
 * Manages api calls and handles the responses
 * @param apiDetails api endpoint with corresponding redux action
 * @param requestData request data for the api endpoint
 * @param requestMethod request method for the api
 * @param cancelSource axois cancel token
 */
export const makeApiRequest = (
  apiDetails: apiDetailType,
  requestData: any,
  requestMethod: Method,
  cancelSource?: CancelTokenSource
) => {
  // API URL
  let url: string = process.env.REACT_APP_API_ENDPOINT as string;

  const access_token: string = TokenService.getAccessToken();

  const headers: RequestHeader = getRequestHeaders(apiDetails, access_token);
  const transformedRequestData: customRequestData = transformRequestData(
    apiDetails,
    requestData,
    basicAuth
  );

  let axiosReqParams: AxiosRequestConfig = {
    url: apiDetails.controllerName,
    method: requestMethod,
    baseURL: url,
    headers: headers,
    ...transformedRequestData,
    timeout: 60 * 3 * 1000,
    cancelToken: cancelSource ? cancelSource.token : source.token,
  };

  // Axios.interceptors.response.use(
  //     function (response) {
  //         return response
  //     },
  //     function (error) {
  //         return requestAccessToken(error);
  //     }
  // );

  return Axios.request(axiosReqParams)
    .then((response: AxiosResponse<ResponseData>) => {
      return response;
    })
    .catch((error: AxiosError) => {
      let errorResponse = manageErrorResponse(error);
      return errorResponse;
    });
};

const getRequestHeaders = (apiDetails: apiDetailType, access_token: string) => {
  let headers = {};
  switch (apiDetails.actionName) {
    case "TOKEN": {
      headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + access_token,
      };
      break;
    }
    case "SUBJECT-DOCUMENT-SAVE":
      headers = {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + access_token,
      };
      break;
    default: {
      headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      };
      break;
    }
  }
  return headers;
};

const transformRequestData = (
  apiDetails: apiDetailType,
  requestData: any,
  basicAuth: AxiosBasicCredentials
) => {
  let transformedRequestData: customRequestData = { data: requestData };

  switch (apiDetails.actionName) {
    case "LOGIN":
      let grant_type = getGrantType();
      transformedRequestData.auth = basicAuth;
      transformedRequestData.data = getFormData(requestData);
      transformedRequestData.data.append(grant_type.key, grant_type.value);
      break;
    case "SUBJECT-DOCUMENT-SAVE":
      transformedRequestData.data = getFormData(requestData);
      break;
    case "TOKEN":
      transformedRequestData.data = getQueryString(requestData);
      break;

    default:
      transformedRequestData.data = requestData;
      break;
  }

  return transformedRequestData;
};

function getQueryString(data: { [key: string]: string } = {}) {
  return qs.stringify(data);
}

function getFormData(requestData: { [key: string]: any }) {
  let formData = new FormData();
  for (let data in requestData) {
    formData.append(data, requestData[data]);
  }
  return formData;
}

// const requestAccessToken = (error: AxiosError) => {
//     //work here
//     const originalRequest = error.config;
//     console.log(originalRequest)

//     let responseError = error.response!;

//     if (
//         responseError.status === 401 &&
//         responseError.data.error === 'invalid_token'
//     ) {

//         let url = process.env.REACT_APP_LOGIN_ENDPOINT;

//         let localtkData = JSON.parse(localStorage.getItem('tk')!);

//         let localRefreshToken = '';

//         if (localtkData) {
//             localRefreshToken = localtkData.refresh_token;
//         }
//         console.log(localRefreshToken)

//         let requestUrl = url + apiList.auth.token.controllerName

//         let requestBody = new FormData()
//         requestBody.append('grant_type', 'refresh_token')
//         requestBody.append('refresh_token', localRefreshToken)

//         return axios
//             .request({
//                 url: requestUrl,
//                 method: 'POST',
//                 auth: basicAuth,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 data: requestBody
//             })
//             .then(res => {

//                 let newRequest = { ...originalRequest }

//                 newRequest.headers.Authorization = 'Bearer ' + res.data.access_token

//                 localStorage.setItem('tk', JSON.stringify(res.data))

//                 return axios.request(
//                     newRequest
//                 ).then(
//                     res => {
//                         return Promise.resolve(res)
//                     }
//                 ).catch(err => {
//                     alert('Error in re-request')
//                     return Promise.reject(manageErrorResponse(err))
//                 })
//                 //generate previous request again taking new token
//             })
//             .catch(err => {
//                 console.log(err);
//                 //logout user
//                 localStorage.removeItem('tk')
//                 localStorage.removeItem('state')
//                 window.location.href = '/'
//                 return Promise.reject(manageErrorResponse(err))
//             });
//     }

//     return Promise.reject(error);

// };

let manageErrorResponse = (error: AxiosError) => {
  let errorResponse: ResponseError = {
    message: "Error",
    data: null,
    status: false,
  };
  errorResponse.message = error.message; // Something happened in setting up the request that triggered an Error
  if (error.response) {
    // errorResponse.status = error.response.status; // The server responded with a status code
    errorResponse.data = error.response.data; // The server responded with a status code and data
  } else if (error.request) {
    errorResponse.message = "Server could not be reached."; // No response was received
    errorResponse.noconnection = true;
  }
  
  errorResponse.config = error.config; // Request Params Configs
  errorResponse.isAxiosError = error.isAxiosError; //If Axios Error

  return errorResponse;
};
