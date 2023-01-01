import {Fragment} from "react";
import {renderRoutes, RouteConfig} from "react-router-config";

import {PageErrorBoundary} from "../../packages/error-handling";

export interface AppRootProps
{
    route?: RouteConfig;
}

const AppRoot = ({route}: AppRootProps): JSX.Element => {
    return (
        <Fragment>
            <PageErrorBoundary>{route && renderRoutes(route.routes)}</PageErrorBoundary>
        </Fragment>
    );
};

export default AppRoot;
