import React, {FC, Fragment, PropsWithChildren} from 'react';
import styled from "styled-components";

import {PageContainer} from './Common/PageContainer';
import {NavBar} from "../../packages/nav-bar";
import {BREAKPOINT_SCREEN_SM} from "../theme";
import {SideBar} from "../../packages/side-bar";

export interface LayoutProps
{

}

const StyledPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-top: 100px;

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    padding-top: 0;
  }
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 100px);
  width: calc(100% - 285px);
  padding: 40px;

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    margin: 0;
    padding: 15px;
  }
`;

const DefaultLayout: FC<PropsWithChildren<LayoutProps>> = ({
                                                               children
                                                           }): JSX.Element => {
    return (
        <Fragment>
            <NavBar/>
            <StyledPageContainer>
                <SideBar/>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </StyledPageContainer>
        </Fragment>
    );
};

export default DefaultLayout;
