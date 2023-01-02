export const ROUTE_DASHBOARD = '/';
export const ROUTE_LOGIN = '/login';
export const ROUTE_USERS_OVERVIEW = '/users';
export const ROUTE_USER_PROFILE = '/users/:userId';

const routes = {
    dashboard: ROUTE_DASHBOARD,
    authentication: {
        login: ROUTE_LOGIN
    },
    users: {
        list: ROUTE_USERS_OVERVIEW,
        view: ROUTE_USER_PROFILE
    },
};

export type Routes = typeof routes;

export default routes;
