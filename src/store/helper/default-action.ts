import Axios, { CancelTokenSource, Method } from 'axios';
import { Dispatch } from 'redux';

import { createDispatchTypes } from './default-action-type';
import { makeApiRequest } from '../../services/ApiRequest/apiRequest';
import { apiDetailType, ResponseError } from '../../services/ApiRequest/apiRequest.model';
import { requestTimeout } from '../../utils/timeout/timeout';


let timeoutLanguageCount = 0;
let noServerConnectionLanguageCount = 0;
let noConnectionLanguageCount = 0;
const axiosCancelSource = Axios.CancelToken.source();

/**
 * Manages multiple action creator for dispatching action according to response.
 *  
 * @param {Object} apiDetails An object with {actionName} - redux action name and {controllerName} - corresponding endpoint to communicate with API.
 * @param {Function} dispatch  A function that accepts an action or an async action to handle async actions in addition to actions.
 * @param {any} requestData Data that needs to be send to server.
 * @param {string} requestMethod A string of corresponding HTTP method.
 * @param {Object} cancelSource An object with {token} and {cancel} to abort or cancel request. 
 * @returns {Object} API Response data
 */

export const createDefaultAction = async (apiDetails: apiDetailType, dispatch: Dispatch, requestData: any, requestMethod: Method, cancelSource?: CancelTokenSource) => {
    // Init Dispatch Types
    const dispatchTypes = createDispatchTypes(apiDetails.actionName);

    // Progress Dispatch
    dispatch({ type: dispatchTypes.progressDispatch, payload: null });

    // API request
    const responseData = await makeApiRequest(apiDetails, requestData, requestMethod, cancelSource || axiosCancelSource);

    // Success Dispatch
    if ((responseData as ResponseError).data && !(responseData as ResponseError).isAxiosError) {
        dispatch({ type: dispatchTypes.successDispatch, payload: responseData, requestData: requestData });
    }
    // Error Dispatch
    else if ((responseData as ResponseError).data && !(responseData as ResponseError).isAxiosError) {
        dispatch({ type: dispatchTypes.failureDispatch, payload: responseData, requestData: requestData });
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

    return responseData;
};
