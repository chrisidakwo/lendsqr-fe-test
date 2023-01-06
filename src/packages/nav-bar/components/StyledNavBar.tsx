import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {BREAKPOINT_SCREEN_MD, defaultTheme} from '../../../ui-kit/theme';
import Logo from './Logo';

export const NavDesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 0 20px rgba(0, 0, 0, 0.04);
  font-family: ${({theme}): string => theme.app.typography.fontFamily};
  background-color: #fff;
  height: 100px;
  width: 100%;
  padding: 0 30px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1400;
`;

NavDesktopContainer.defaultProps = {
    theme: defaultTheme,
};

const NavBarRight = styled.div`
  float: right;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-right: 0;
`;

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MobileHide = styled.div`
  display: none;
  position: relative;

  @media (min-width: ${BREAKPOINT_SCREEN_MD}px) {
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const NavLeftElementsContainer: FC = ({ children }) => (
    <NavBarLeft>
        <Link to={'/'}>
            <Logo/>
        </Link>

        <Container>{children}</Container>
    </NavBarLeft>
);

export const NavRightElementsContainer: FC = ({children}) => (
    <NavBarRight>
        <Container>{children}</Container>
    </NavBarRight>
);
