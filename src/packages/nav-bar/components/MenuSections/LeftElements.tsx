import React, {Fragment} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {Input} from "../../../../ui-kit/input";
import {MobileHide} from "../StyledNavBar";
import {BREAKPOINT_SCREEN_MD, colors} from '../../../../ui-kit/theme';
import {Button} from "../../../../ui-kit/button";

export interface LeftElementsProps {
    menuClicked: () => void;
}

const StyledInput = styled(Input)`
  font-size: 14px;
  padding: 6px 18px !important;
  border-radius: 8px !important;
  margin-left: 4rem;
  min-width: 260px;
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

const SearchButton = styled(Button)`
  line-height: 24px !important;
  min-width: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 56px;
  box-shadow: none;
  position: absolute;
  right: -66px;
  top: -7px;
  border: 1px solid ${colors.primary};
  height: 38px;
  border-radius: 0 8px 8px 0;
  
  &:focus, &:hover, &:active {
    outline: none;
    border: 1px solid ${colors.primary};
  }
`;

const LeftElements = ({menuClicked}: LeftElementsProps): JSX.Element => {
    return (
        <Fragment>
            <MenuWrapper onClick={() => menuClicked()}>
                <MenuIcon/>
            </MenuWrapper>
            <MobileHide>
                <StyledInput
                    placeholder='Search for anything'
                    border='1px solid rgba(33, 63, 125, 0.2)'
                    iconRight={
                        <SearchButton>
                            <SearchOutlinedIcon fontSize='small'/>
                        </SearchButton>
                    }
                />
            </MobileHide>
        </Fragment>
    );
};

export default LeftElements;
