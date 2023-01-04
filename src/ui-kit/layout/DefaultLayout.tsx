import React, {FC, Fragment, PropsWithChildren, useState} from 'react';
import styled from "styled-components";

import {PageContainer} from './Common/PageContainer';
import {NavBar} from "../../packages/nav-bar";
import {BREAKPOINT_SCREEN_MD} from "../theme";
import {SideBar} from "../../packages/side-bar";

export interface LayoutProps {
}

const StyledPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-top: 100px;`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 100px);
  width: calc(100% - 285px);
  margin-left: 285px;
  padding: 40px;

  @media (max-width: ${BREAKPOINT_SCREEN_MD}px) {
    margin: 0;
    padding: 30px;
    width: 100%;
  }
`;

const DefaultLayout: FC<PropsWithChildren<LayoutProps>> = ({
   children
}): JSX.Element => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <Fragment>
            <NavBar onMenuClicked={() => setIsSideBarOpen(!isSideBarOpen)}/>
            <StyledPageContainer>
                <SideBar open={isSideBarOpen} onClose={() => setIsSideBarOpen(false)}/>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </StyledPageContainer>
        </Fragment>
    );
};

export default DefaultLayout;
