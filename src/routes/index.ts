import Cart from 'core/Public/ProductCart/Cart';
import { lazy } from 'react';
import { externalRoute } from './DistinctRoute/External';
import { internalRoute } from './DistinctRoute/Internal';

const Login = lazy(() => import("../core/Public/Login/Login"));
const Register = lazy(() => import("../core/Public/Register/Register"));

const Boundary = lazy(() => import("../core/Protected/Boundary"));
const ProductCart = lazy(() => import ("../core/Public/ProductCart"))


export const appRoutes: CustomRoute[] = [
    {
        path: "/login",
        component: Login,
        type: "unauthorized"
    },
    {
        path: "/product",
        component: ProductCart,
        type: "unauthorized"
    },
    {
        path: "/cart",
        component: Cart,
        type: "unauthorized"
    },
    {
        path: "/register",
        component: Register,
        type: "unauthorized"
    },
    {
        path: "/",
        component: Boundary,
        children: [...internalRoute, ...externalRoute],
    }
]
