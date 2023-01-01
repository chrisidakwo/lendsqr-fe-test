import React from 'react';

import {ThemeProvider} from "../ui-kit/theme";
import ConnectedRenderRoutes from "./component/ConnectedRenderRoutes";

const App = (): JSX.Element => {
    return (
        <ThemeProvider>
            <ConnectedRenderRoutes/>
        </ThemeProvider>
    );
}

export default App;
