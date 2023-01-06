import React from 'react';
import {Route, Switch} from "react-router-dom";

import routes from "../../router";
import {UserOverview} from "../../sub-apps/users-overview";
import {UserDetail} from "../../sub-apps/user-details";

const UserManagementRoutes = (): JSX.Element => {
    return (
        <Switch>
            <Route
                path={routes.users.view}
                render={({match}) => {
                    const userId = match.params.userId as string;
                    return <UserDetail userId={userId}/>;
                }}
                exact
            />
            <Route path={''} render={(props) => <UserOverview/>} exact/>
        </Switch>
    );
};

export default UserManagementRoutes;
