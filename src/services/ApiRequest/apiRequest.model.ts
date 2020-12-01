import { AxiosBasicCredentials, AxiosRequestConfig } from "axios";

export type apiDetailType = {
    actionName: string;
    controllerName: string;
};

export interface GrantType {
    key: string;
    value: string;
}

export interface RequestHeader {
    [key: string]: string
}

export type customRequestData = {
    auth?: AxiosBasicCredentials,
    data: any
}

export type ResponseData = Array<any> | { [key: string]: any } | string | number | undefined | any

export type ResponseError = {
    message: string,
    data: any,
    status: boolean,
    config?: AxiosRequestConfig
    noconnection?: boolean
    isAxiosError?: boolean
}