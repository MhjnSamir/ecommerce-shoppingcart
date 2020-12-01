import Axios, {
    AxiosResponse,
    AxiosRequestConfig,
    CancelTokenSource,
    CancelTokenStatic,
    Method,
} from "axios";
import {
    apiDetailType,
    RequestHeader,
    customRequestData,
    ResponseData,
} from "./apiRequest.model";
import TokenService from "../AuthToken/authToken";

// Cancel a request using a cancel token.
const cancelToken: CancelTokenStatic = Axios.CancelToken;
const source: CancelTokenSource = cancelToken.source();

export const fetchImageRequest = (
    apiDetails: apiDetailType,
    requestData: any,
    requestMethod: Method,
    cancelSource?: CancelTokenSource
) => {
    // API URL
    let url: string = process.env.REACT_APP_IAS_ENDPOINT as string;

    if (apiDetails.actionName === "LOGIN") {
        url = process.env.REACT_APP_IAS_LOGIN_ENDPOINT as string;
    } else if (
        apiDetails.actionName === "RAW_WRITING_OFFICE_SECTION_ID" ||
        apiDetails.actionName === "GET_OFFICE_LIST"
    ) {
        url = process.env.REACT_APP_IAS_OFFICE_SECTION_DATA_ENDPOINT as string;
    }

    const access_token: string = TokenService.getAccessToken();

    const headers: RequestHeader = getRequestHeaders(apiDetails, access_token);
    const transformedRequestData: customRequestData = transformRequestData(
        apiDetails,
        requestData
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

    return Axios.request(axiosReqParams)
        .then((response: AxiosResponse<ResponseData>) => {
            return response;
        })
};

const getRequestHeaders = (apiDetails: apiDetailType, access_token: string) => {
    let headers = {};
    switch (apiDetails.actionName) {
        default: {
            headers = {
                // "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            };
            break;
        }
    }
    return headers;
};

const transformRequestData = (
    apiDetails: apiDetailType,
    requestData: any
) => {
    let transformedRequestData: customRequestData = { data: requestData };

    switch (apiDetails.actionName) {
        default:
            transformedRequestData.data = requestData;
            break;
    }

    return transformedRequestData;
};