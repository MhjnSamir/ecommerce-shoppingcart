export type route ={
    path: string;
    component: React.ComponentType<any>
    children?: route[];
}

export interface PrivateRouteProps{
    appRoutes: route[]
}

export interface PrivateRouteChildren{
    children: route[]
}
