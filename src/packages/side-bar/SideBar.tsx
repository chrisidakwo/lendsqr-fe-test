import React from 'react';
import styled from 'styled-components';

import {BREAKPOINT_SCREEN_MD} from "../../ui-kit/theme";

const SideBarDesktopContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
  width: 285px;
  min-height: calc(100vh - 100px);

  @media (max-width: ${BREAKPOINT_SCREEN_MD}px) {
    top: 0;
    position: absolute;
    z-index: 99999;
    min-height: 100vh;
  }
`;

const SideBar = (): JSX.Element => {
    return (
        <SideBarDesktopContainer>
            Sidebar
        </SideBarDesktopContainer>
    );
};

export default SideBar;
