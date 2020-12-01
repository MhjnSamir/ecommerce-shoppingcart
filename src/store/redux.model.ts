export type Action<TPayload> ={
    type: string;
    payload?: TPayload
}

export interface DefaultState<TData = any>{
    status: null | 0 | 1 | 100;
    isFetching: boolean;
    isFailed: boolean;
    data: TData;
    message: null | string;
    showMessage: boolean;
}

export interface DefaultDispatchType{
    progressDispatch: string;
    successDispatch: string;
    failureDispatch: string;
    hideMessage: string;
    resetAll: string;
}
