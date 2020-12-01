import { DefaultState } from "../redux.model";

export const defaultState: DefaultState<null> = {
    status: null,
    isFetching: false,
    isFailed: false,
    data: null,
    message: null,
    showMessage: false,
}