import { lazy } from 'react';
import { route } from './route.model';

/**
 * rendering a dynamic import as a regular component for code splitting.
 */

const Login = lazy(() => import("../../core/Public/Login/Login"));
const Register = lazy(() => import("../../core/Public/Register/Register"));
const Dashboard = lazy(() => import("../../core/Protected/Dashboard/Dashboard"));

export const appRoutes: route[] = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/home",
        component: Dashboard,
    }
]
