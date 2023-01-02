import React, {Fragment} from 'react';
import styled from "styled-components";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import {Typography} from "../../../../ui-kit/typography";
import UserMenu from './UserMenu';

const NavLink = styled(Typography)`
  text-decoration: underline;
  cursor: pointer;
  margin-right: 50px;
`

const RightElements = (): JSX.Element => {
    return (
        <Fragment>
            <NavLink elementType='a'>Docs</NavLink>
            <NotificationsOutlinedIcon sx={{fontSize: '1.75rem', marginRight: '30px'}}/>
            <UserMenu/>
        </Fragment>
    );
};

export default RightElements;
