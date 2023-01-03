import React from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";

import {Typography} from "../../../ui-kit/typography";
import colors from "../../../ui-kit/theme/definitions/colors";
import {MenuItem as IMenuItem} from '../types';

export interface MenuItemProps extends IMenuItem
{
    active?: boolean;
    url?: string;
}

const Wrapper = styled.div<{ active: boolean, url?: string }>`
  display: flex;
  align-items: center;
  padding: 6px 30px;
  background-color: ${({active}) => active === false ? 'transparent' : 'rgba(57, 205, 204, 0.06)'};
  border-left: ${({active}) => active === false ? 'none' : `3px solid ${colors.primary}`};
  cursor: ${({url}) => url !== undefined ? 'pointer' : 'default'};

  > svg {
    margin-right: 10px;
    opacity: ${({active}) => active === false ? 0.4 : 1};
  }

  > span {
    font-style: normal;
    font-weight: 400;
    opacity: ${({active}) => active === false ? 0.6 : 1};
  }
`;

const MenuItem = ({
                      label,
                      icon,
                      active = false,
                      url,
                  }: MenuItemProps): JSX.Element => {
    const history = useHistory();

    return (
        <Wrapper active={active} onClick={() => url && history.push(url)}>
            {icon({})}
            <Typography elementType='span'>{label}</Typography>
        </Wrapper>
    );
};

export default MenuItem;
