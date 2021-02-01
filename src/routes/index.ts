import { lazy } from 'react';
import { externalRoute } from './route-external';
import { internalRoute } from './route-internal';

const Login = lazy(() => import("../core/Public/Login/Login"));
const Register = lazy(() => import("../core/Public/Register/Register"));

const Boundary = lazy(() => import("../core/Protected/Boundary"));
const Dashboard = lazy(() => import("../core/Protected/Dashboard/Dashboard"));

const VehicleList = lazy(() => import("../core/Protected/Vehicle/List"));
const VehicleRegister = lazy(() => import("../core/Protected/Vehicle/Register"));
const RoleManagement = lazy(() => import ("../core/Protected/Admin/RoleManagement"));
const EmployeeSetup = lazy(() => import ("../core/Protected/Employee/Setup"));
const ImporterRegistration = lazy(() => import ("../core/Protected/Importer/Registration/Registration"));
const ImporterDetail = lazy(() => import ("../core/Protected/Admin/ImporterDetail"));
const EmployeeList = lazy(() => import ("../core/Protected/Employee/List"));
const VehicleType = lazy(() => import ("../core/Protected/MasterData/VehicleType"));


export const appRoutes: CustomRoute[] = [
    {
        path: "/login",
        component: Login,
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
    },
    {
        path: "/home",
        component: Dashboard,
    },
    {
        path: "/vehicle-list",
        component: VehicleList,
    },
    {
        path: "/vehicle-registration",
        component: VehicleRegister,
    },
    {
        path: "/admin/role-management",
        component: RoleManagement,
    },
    {
        path: "/employee-setup",
        component: EmployeeSetup,
    },
    {
        path: "/importer-registration",
        component: ImporterRegistration,
    },
    {
        path: "/importer-detail",
        component: ImporterDetail,
    },
    {
        path: "/employee-list",
        component: EmployeeList,
    },
    {
        path: "/master/vehicle-type",
        component: VehicleType,
    },
]
