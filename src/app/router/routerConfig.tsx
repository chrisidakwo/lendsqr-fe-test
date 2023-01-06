import {RouteConfig} from "react-router-config";

import {Routes} from "../../router";
import {AppRoot} from "../component";
import DashboardRoute from "../pages/dashboard";
import AuthenticationRoutes from "../pages/authetication";
import UserManagementRoutes from "../pages/user-management";
import {ErrorPage} from "../../packages/error-handling";

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
            },
            {
                path: '*',
                render: () => <ErrorPage error={new Error("Looks like you're lost, son! We could not find the page you requested!")} />
            }
        ],
    }
];

export default routerConfig;
