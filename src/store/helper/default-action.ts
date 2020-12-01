import Axios, { AxiosRequestConfig, CancelTokenSource, Method } from 'axios';
import { Dispatch } from 'redux';

import { createDispatchTypes } from './default-action-type';
import { makeApiRequest } from '../../services/ApiRequest/apiRequest';
import { apiDetailType, ResponseError } from '../../services/ApiRequest/apiRequest.model';
import { requestTimeout } from '../../utils/timeout/timeout';


let timeoutLanguageCount = 0;
let noServerConnectionLanguageCount = 0;
let noConnectionLanguageCount = 0;
const axiosCancelSource = Axios.CancelToken.source();

export const createDefaultAction = async (apiDetails: apiDetailType, dispatch: Dispatch, requestData : any, requestMethod: Method, cancelSource?: CancelTokenSource) => {
    // Init Dispatch Types
    const dispatchTypes = createDispatchTypes(apiDetails.actionName);

    // Progress Dispatch
    dispatch({ type: dispatchTypes.progressDispatch, payload: null });

    // API request
    const responseData = await makeApiRequest(apiDetails, requestData, requestMethod, cancelSource || axiosCancelSource);

    // Success Dispatch
    if((responseData as ResponseError).data && !(responseData as ResponseError).isAxiosError) {
        dispatch({ type: dispatchTypes.successDispatch, payload: responseData, requestData: requestData});
    }
    // Error Dispatch
    else if((responseData as ResponseError).data && !(responseData as ResponseError).isAxiosError) {
        dispatch({ type: dispatchTypes.failureDispatch, payload: responseData, requestData: requestData});
    }
    
    // HideMessage Dispatch
    requestTimeout(() => {
        dispatch({ type: dispatchTypes.hideMessage, payload: null });
    }, 2000)
    

    // Axios Timeout
    if ((responseData as ResponseError).isAxiosError && (responseData.config as any)?.code === 'ECONNABORTED') {
        if (!timeoutLanguageCount) {
            // toastNotify(() => FailToast(timeoutLanguage()));
            timeoutLanguageCount++;
        }
    }

    // No Server Connection
    if ((responseData as ResponseError).isAxiosError && (responseData as ResponseError).noconnection && (responseData as ResponseError).message === 'Server could not be reached') {
        if (!noServerConnectionLanguageCount) {
            // toastNotify(() => FailToast(noServerConnectionLanguage()));
            noServerConnectionLanguageCount++;
        }
    }
    // No Connection
    else if ((responseData as ResponseError).isAxiosError && (responseData as ResponseError).noconnection && (responseData.config as any)?.code !== 'ECONNABORTED') {
        if (!noConnectionLanguageCount) {
            // toastNotify(() => FailToast(noConnectionLanguage()));
            noConnectionLanguageCount++;
        }
    }

    return requestData;
};
