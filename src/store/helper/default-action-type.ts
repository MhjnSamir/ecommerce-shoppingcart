import { DefaultDispatchType } from '../redux.model';

/**
 * Manages default action name for repetitive use
 * @param actionName dynamic action name
 */
export const createDispatchTypes = (actionName: string): DefaultDispatchType => {
    return {
        progressDispatch: actionName + "_PROGRESS",
        successDispatch: actionName + "_SUCCESS",
        failureDispatch: actionName + "_FAILURE",
        hideMessage: actionName + '_HIDE_MESSAGE',
        resetAll: actionName + '_RESET',
    }
}
