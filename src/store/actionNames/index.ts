export interface ReduxActionName {
    [key: string]: {
        controllerName: string;
        actionName: string;
    }
}

export interface ReduxActionNameGroup {
    [key: string]: {
        controllerName: string;
        actionName: string;
    } | ReduxActionName
}

/**
 * API based actionname with counterpart controllerName as API endpoint
 */
export const apiList: ReduxActionName = {
    login : {
        controllerName : "/login",
        actionName : "LOGIN"
    },
}