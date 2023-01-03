import React from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

import {Input} from "../../../../ui-kit/input";
import {MobileHide} from "../StyledNavBar";
import {BREAKPOINT_SCREEN_MD} from '../../../../ui-kit/theme';

export interface LeftElementsProps
{
    menuClicked: () => void;
}

const Wrapper = styled.div`
  margin-left: 3.5rem;
`;

const StyledInput = styled(Input)`
  padding: 6px 18px;
  border-radius: 8px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;

  @media (min-width: ${BREAKPOINT_SCREEN_MD}px) {
    display: none;
  }
`;

const LeftElements = ({menuClicked}: LeftElementsProps): JSX.Element => {
    return (
        <Wrapper>
            <MenuWrapper onClick={() => menuClicked()}>
                <MenuIcon/>
            </MenuWrapper>
            <MobileHide>
                <StyledInput placeholder='Search for anything'/>
            </MobileHide>
        </Wrapper>
    );
};

export default LeftElements;
