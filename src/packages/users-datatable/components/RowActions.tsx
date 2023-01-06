import React from 'react';
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useHistory} from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import useLocalStorage from "react-use/esm/useLocalStorage";

import {colors} from "../../../ui-kit/theme";
import {Typography} from "../../../ui-kit/typography";
import {User} from "../../../models";
import {UserCheckIcon, UserTimesIcon} from "../../../ui-kit/icon";

export interface RowActionsProps {
    anchorEl: Element;
    open: boolean;
    onClose: () => void;
    user: User;
}

const StyledMenu = styled(Menu)`
  svg {
    margin-right: 10px;
  }
  
  & .MuiPaper-root {
    color: ${colors.grey.main};
    min-width: 180px;
    padding: 12px 0;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  padding-left: 22px !important;
`;

const StyledTypography = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey.main};
`;

const RowActions = ({ anchorEl, open, onClose, user }: RowActionsProps): JSX.Element => {
    const [, setUserDetails] = useLocalStorage<User | undefined>(`lendsqr_${user.id}`);
    const { push } = useHistory();

    const onViewDetailsClicked = () => {
        setUserDetails(user);
        push(`/users/${user.id}`);
    };

    return (
        <StyledMenu open={open} anchorEl={anchorEl} onClose={onClose}>
            <StyledMenuItem onClick={onViewDetailsClicked}>
                <VisibilityOutlinedIcon fontSize='small' />
                <StyledTypography elementType='span'>
                    View Details
                </StyledTypography>
            </StyledMenuItem>

            <StyledMenuItem>
                <UserTimesIcon fillColor={colors.grey.main}  />
                <StyledTypography elementType='span'>
                    Blacklist User
                </StyledTypography>
            </StyledMenuItem>

            <StyledMenuItem>
                <UserCheckIcon fillColor={colors.grey.main} />
                <StyledTypography elementType='span'>
                    Activate User
                </StyledTypography>
            </StyledMenuItem>
        </StyledMenu>
    );
};

export default RowActions;
