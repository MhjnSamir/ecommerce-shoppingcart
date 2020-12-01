import { defaultState } from "../../helper/default-state";
import { defaultReducer } from "../../helper/default-reducer";
import { createDefaultAction } from "../../helper/default-action";
import { apiList } from "../../actionNames";

const obj = defaultState;
let apiDetails = apiList.token;

export default function loginReducer(store = { ...obj }, action) {
    let state = Object.assign({}, store);
    let actionName = apiDetails.actionName;

    return defaultReducer(actionName, action, state);
}

export const loginAction = requestData => dispatch => {
    return createDefaultAction(apiDetails, dispatch, requestData, "POST")
};