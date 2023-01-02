import React from 'react';
import {Route, Switch} from "react-router-dom";

import routes from "../../router";
import {Login} from "../../sub-apps/authentication";

const AuthenticationRoutes = (): JSX.Element => {
    return (
        <Switch>
            <Route path={routes.authentication.login} component={() => <Login/>}/>
        </Switch>
    );
};

export default AuthenticationRoutes;
