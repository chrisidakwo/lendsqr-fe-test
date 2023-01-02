import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { defaultTheme } from '../../../ui-kit/theme';
import Logo from './Logo';

export const NavDesktopContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 0 20px rgba(0,0,0,0.04);
  font-family: ${({ theme }): string => theme.app.typography.fontFamily};
  height: 100px;
  width: 100%;
  padding: 0 30px;

  @media (min-width: 992px) {
    display: flex;
  }
`;

NavDesktopContainer.defaultProps = {
    theme: defaultTheme,
};

const StyledNav = styled.nav`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(10, 17, 26, 0.04), 0 2px 8px rgba(0, 0, 0, 0.08);
  font-family: ${({ theme }): string => theme.camptoo.typography.fontFamily};
  height: auto;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: top 0.5s ease 0s;
  width: 100%;
  z-index: 1010;
`;

const InnerContainer = styled.div`
  padding: 1rem;

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const NavBarRight = styled.div`
  float: right;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-right: 0;
`;

const NavBarLeft = styled.div`
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledDivContainerSemiFluid = styled.div`
  font-weight: 600;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const MobileShow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileHide = styled.div`
  display: none;
  position: relative;
  @media (min-width: 992px) {
    display: block;
  }
`;

const MobileHideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const NavLeftElementsContainer: FC = ({ children }) => (
    <NavBarLeft>
        <MobileHide>
            <MobileHideContainer>
                <Link to={'/'}>
                    <Logo />
                </Link>
                <MobileHideContainer>{children}</MobileHideContainer>
            </MobileHideContainer>
        </MobileHide>
    </NavBarLeft>
);
