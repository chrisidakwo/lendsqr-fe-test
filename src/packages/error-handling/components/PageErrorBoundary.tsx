import React, {FC} from "react";

import ErrorPage from "./ErrorPage";
import ErrorBoundary from "./ErrorBoundary";

const PageErrorBoundary: FC = ({children}) => {
    return <ErrorBoundary FallbackComponent={ErrorPage}>{children}</ErrorBoundary>;
};

export default PageErrorBoundary;
