import { Dispatch } from "redux";
import { AppThunk } from "../..";

import { apiList } from "../../actionNames";
import initDefaultAction, { APIResponseDetail } from "../../helper/default-action";
import initDefaultReducer from "../../helper/default-reducer";
import initialState from "../../helper/default-state";


export type ProductListResponse = {
   "name" : string,
   
}

const initialProductList = initialState;
const apiDetails = Object.freeze(apiList.public.product);

export default function getAllProductReducer(state = initialProductList, action: DefaultAction): DefaultState<ProductListResponse[]> {
    const stateCopy = Object.assign({}, state);
    const actionName = apiDetails.actionName;

    return initDefaultReducer(actionName, action, stateCopy);
}

export const getAllProductList = (): AppThunk<APIResponseDetail<ProductListResponse[]>> => async (dispatch: Dispatch) => {
    return await initDefaultAction(apiDetails, dispatch, { disableSuccessToast: true });
};