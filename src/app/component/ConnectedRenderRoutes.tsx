import React from "react";
import {renderRoutes} from "react-router-config";
import {BrowserRouter} from "react-router-dom";

import routerConfig from "../router/routerConfig";
import routes from "../../router";

const ConnectedRenderRoutes = (): JSX.Element => <BrowserRouter>{renderRoutes(routerConfig(routes))}</BrowserRouter>;
export default ConnectedRenderRoutes;
