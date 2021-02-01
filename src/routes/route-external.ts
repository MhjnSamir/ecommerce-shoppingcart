import { lazy } from 'react';
const ImporterRegistration = lazy(() => import("../core/Protected/Importer/Registration/Registration"));
const ImportDetailsExternal = lazy(() => import('../core/Protected/Importer/ImporterDetailExternal/ImporterDetailExternal'));

export const externalRoute: CustomRoute[] = [
    {
        path: "/importer-registration",
        component: ImporterRegistration,
        type: "importer"
    },
    {
        path: "/importer-detail",
        component: ImportDetailsExternal,
        type: "importer"
    }
]
