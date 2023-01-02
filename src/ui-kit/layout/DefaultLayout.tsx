import React, {FC, Fragment, PropsWithChildren} from 'react';
import styled from "styled-components";

import { PageContainer } from './Common/PageContainer';
import {NavBar} from "../../packages/nav-bar";

export interface LayoutProps {

}

const StyledPageContainer = styled(PageContainer)`
    height: calc(100vh - 62px);
`;

const DefaultLayout: FC<PropsWithChildren<LayoutProps>> = ({
    children
}): JSX.Element => {
    return (
        <Fragment>
            <NavBar />
            <StyledPageContainer>
                {children}
            </StyledPageContainer>
        </Fragment>
    );
};

export default DefaultLayout;
