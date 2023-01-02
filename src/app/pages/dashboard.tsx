import React from 'react';
import {RouteProps} from "react-router";
import {Route, Switch} from "react-router-dom";

import routes from "../../router";
import Dashboard from '../../sub-apps/dashboard';

const DashboardRoute = (props: RouteProps): JSX.Element => {
    return (
        <Switch>
            <Route path={routes.dashboard} component={() => <Dashboard/>}/>
        </Switch>
    );
};

export default DashboardRoute;

