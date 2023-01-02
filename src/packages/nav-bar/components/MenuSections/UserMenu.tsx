import React from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import styled from "styled-components";

import AvatarElement from "../AvatarElement";
import {Typography} from "../../../../ui-kit/typography";
import routes from "../../../../router";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserMenu = (): JSX.Element => {
    return (
        <Wrapper onClick={() => window.location.href = routes.authentication.login}>
            <AvatarElement url='/avatar.png' imgURL='/avatar.png' marginRight='0.75rem'/>
            <Typography elementType='span'>Adedeji</Typography>
            <ArrowDropDownRoundedIcon/>
        </Wrapper>
    );
};

export default UserMenu;
