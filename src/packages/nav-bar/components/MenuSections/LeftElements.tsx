import React, {Fragment} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

import {Input} from "../../../../ui-kit/input";
import {MobileHide} from "../StyledNavBar";
import {BREAKPOINT_SCREEN_MD} from '../../../../ui-kit/theme';

export interface LeftElementsProps {
    menuClicked: () => void;
}

const StyledInput = styled(Input)`
  font-size: 14px;
  padding: 6px 18px !important;
  border-radius: 8px !important;
  margin-left: 4rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  margin-left: 3.5rem;
  cursor: pointer;

  @media (max-width: ${BREAKPOINT_SCREEN_MD}px) {
    margin: 0;
  }

  @media (min-width: ${BREAKPOINT_SCREEN_MD}px) {
    display: none;
  }
`;

const LeftElements = ({menuClicked}: LeftElementsProps): JSX.Element => {
    return (
        <Fragment>
            <MenuWrapper onClick={() => menuClicked()}>
                <MenuIcon/>
            </MenuWrapper>
            <MobileHide>
                <StyledInput placeholder='Search for anything' border='1px solid rgba(33, 63, 125, 0.2)' />
            </MobileHide>
        </Fragment>
    );
};

export default LeftElements;
