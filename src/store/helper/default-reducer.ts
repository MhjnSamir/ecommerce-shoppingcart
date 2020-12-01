import { defaultState } from "./default-state";
import { DefaultState, Action } from "../redux.model";
import { ResponseData } from "../../services/ApiRequest/apiRequest.model";

/**
 * Manages default reducer for repetitive task
 * @param actionName action name for the reducer
 * @param action details for the reducer
 * @param state redux state
 */
export function defaultReducer(actionName: string, action: Action<ResponseData>, state: DefaultState): DefaultState {
    switch (action.type) {
        case actionName + "_PROGRESS": {
            return {
                ...state,
                isFetching: true,
                isFailed: false,
                status: 100
            };
        }

        case actionName + "_SUCCESS": {
            return {
                ...state,
                status: action.payload.status ? 1 : 0,
                isFetching: false,
                isFailed: false,
                data: action.payload.data,
                message: action.payload.message,
                showMessage: true,
            };
        }

        case actionName + "_FAILURE": {
            return {
                ...state,
                status: action.payload?.status ? 1 : 0,
                isFetching: false,
                isFailed: true,
                data: action.payload?.data,
                message: action.payload?.message,
                showMessage: true,
            };
        }

        case actionName + "_HIDE_MESSAGE": {
            return {
                ...state,
                isFetching: false,
                isFailed: false,
                showMessage: false,
            };
        }

        case actionName + "_RESET": {
            return { ...defaultState };
        }

        case actionName:
            return {
                ...state,
                status: action.payload.status ? 1 : 0,
                isFetching: false,
                isFailed: false,
                data: action.payload,
                message: action.payload.message,
                showMessage: true,
            }

        default: {
            return state;
        }
    }
};