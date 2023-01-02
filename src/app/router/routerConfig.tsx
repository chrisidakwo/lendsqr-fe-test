import {RouteConfig} from "react-router-config";

import {Routes} from "../../router";
import {AppRoot} from "../component";
import DashboardRoute from "../pages/dashboard";
import AuthenticationRoutes from "../pages/authetication";
import UserManagementRoutes from "../pages/user-management";

const routerConfig = (routes: Routes): RouteConfig[] => [
    {
        component: AppRoot,
        routes: [
            {
                path: routes.dashboard,
                component: DashboardRoute,
                exact: true,
            },
            {
                path: routes.authentication.login,
                component: AuthenticationRoutes,
                exact: true,
            },
            {
                path: routes.users.list,
                component: UserManagementRoutes,
            }
        ],
    }
];

export default routerConfig;
