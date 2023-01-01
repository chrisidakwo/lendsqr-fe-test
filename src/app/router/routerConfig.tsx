import {RouteConfig} from "react-router-config";

import {Routes} from "../../router";
import {AppRoot} from "../component";
import DashboardWrapper from "../pages/dashboard";

const routerConfig = (routes: Routes): RouteConfig[] => [
    {
        component: AppRoot,
        routes: [
            {
                path: routes.dashboard,
                component: DashboardWrapper,
                exact: true,
            }
        ],
    }
];

export default routerConfig;
