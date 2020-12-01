import { lazy } from 'react';
import ScheduleExam from '../../core/Protected/Admin/ScheduleExam';
import { route } from './route.model';

const Login = lazy(() => import("../../core/Public/Login/Login"));
const Register = lazy(() => import("../../core/Public/Register/Register"));
const Dashboard = lazy(() => import("../../core/Protected/Dashboard/Dashboard"));
const VacancyApp = lazy(() => import("../../core/Protected/Vacancy/VacancyApp"));
const List = lazy(() => import("../../core/Protected/Vacancy/List"));
const Detail = lazy(() => import("../../core/Protected/Vacancy/Detail"));
const Applied = lazy(() => import("../../core/Protected/Vacancy/Applied"));
const Components = lazy(() => import("../../assets/views/template"));
const AdminDashboard = lazy(() => import("../../core/Protected/Admin/Dashboard"));
const Percentage = lazy(() => import("../../core/Protected/Admin/PercentageDistribution"));
const Request = lazy(() => import("../../core/Protected/Admin/PercentageRequest"));
const RequisitionForm = lazy(() => import ("../../core/Protected/Admin/RequisitionForm"));
const ApprovalTask = lazy(() => import ("../../core/Protected/Admin/ApprovalTask"));
const ExamScheduling = lazy(() => import ("../../core/Protected/Admin/ExamScheduling"));
const Schedule = lazy(() => import ("../../core/Protected/Admin/ScheduleExam"));
const CurriculumConfiguration = lazy(() => import ("../../core/Protected/Admin/CurriculumConfiguration"));
const BasicConfiguration = lazy(() => import ("../../core/Protected/Admin/BasicConfiguration"));

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
    },
    {
        path: "/vacancy-application",
        component: VacancyApp,        
    },
    {
        path: "/vacancy-list",
        component: List,        
    },
    {
        path: "/vacancy-detail",
        component: Detail,        
    },
    {
        path: "/vacancy-applied",
        component: Applied,        
    },
    {
        path: "/components",
        component: Components,
    },
    {
        path: "/admin/dashboard",
        component: AdminDashboard,
    },
    {
        path: "/admin/percentage",
        component: Percentage,
    },
    {
        path: "/admin/request",
        component: Request,
    },
    {
        path: "/admin/requisition-form",
        component: RequisitionForm,
    },
    {
        path: "/admin/approvaltask",
        component: ApprovalTask,
    },
    {
        path: "/admin/exam-scheduling",
        component: ExamScheduling,
    },
    {
        path: "/admin/schedule-exam",
        component: ScheduleExam,
    },
    {
        path: "/admin/curriculum-configuration",
        component: CurriculumConfiguration,
    },
    {
        path: "/admin/basic-configuration",
        component: BasicConfiguration,
    }
]
