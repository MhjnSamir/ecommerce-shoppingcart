import { lazy } from 'react';
const ImporterDetailContainer = lazy(() => import('../core/Protected/Admin/UserApproval/ImporterDetail/ImporterDetailContainer'));

const PendingApproval = lazy(() => import("../core/Protected/Admin/UserApproval/PendingApproval"));

export const internalRoute: CustomRoute[] = [
    {
        path: "/admin/userappoval/pending",
        component: PendingApproval,
        type: "internal"
    },
    {
        path:"/importer-detail/:id",
        component: ImporterDetailContainer,
        type:"internal"
    }
]
