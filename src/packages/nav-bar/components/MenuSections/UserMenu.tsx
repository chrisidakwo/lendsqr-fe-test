import React from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import useMedia from "react-use/esm/useMedia";

import AvatarElement from "../AvatarElement";
import {Typography} from "../../../../ui-kit/typography";
import routes from "../../../../router";
import {MobileHide} from "../StyledNavBar";
import {BREAKPOINT_SCREEN_SM_MAX} from "../../../../ui-kit/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserMenu = (): JSX.Element => {
    const history = useHistory();
    const isMobile = useMedia(`(max-width: ${BREAKPOINT_SCREEN_SM_MAX}px)`);

    return (
        <Wrapper onClick={() => {
            history.push(routes.authentication.login)
            return;
        }}>
            <AvatarElement imgURL='/avatar.png' marginRight={isMobile ? '0' : '0.75rem'}/>
            <MobileHide>
                <Typography elementType='span'>Adedeji</Typography>
                <ArrowDropDownRoundedIcon/>
            </MobileHide>
        </Wrapper>
    );
};

export default UserMenu;
