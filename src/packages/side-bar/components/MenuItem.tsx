import React from 'react';
import styled from "styled-components";
import {matchPath, useHistory, useLocation, useRouteMatch} from "react-router-dom";

import {Typography} from "../../../ui-kit/typography";
import colors from "../../../ui-kit/theme/definitions/colors";
import {MenuItem as IMenuItem} from '../types';

export interface MenuItemProps extends IMenuItem {
    url?: string;
}

const Wrapper = styled.div<{ active: boolean, url?: string }>`
  display: flex;
  align-items: center;
  padding: 6px 30px;
  background-color: ${({active}) => active === false ? 'transparent' : 'rgba(57, 205, 204, 0.06)'};
  border-left: ${({active}) => active === false ? 'none' : `3px solid ${colors.primary}`};
  cursor: pointer;

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
  url,
}: MenuItemProps): JSX.Element => {
    const history = useHistory();
    const { pathname } = useLocation();
    const routeMatch = useRouteMatch(pathname);
    const match = matchPath(pathname, {
        path: url,
    });

    // We want that once the first part of the route matches, then we know we're within same parent route.
    // Eg: For a parent route like `/users/34543`, we want that the 'Users' menu (which owns the parent route) be highlighted
    // cos the first part of the `/users/34543` route denotes that its a child to the '/users' parent route.
    const baseRouteMatchSection = routeMatch?.url.split('/').filter((v) => v.length > 0)[0] ?? '';
    const baseMatchPathSection = match?.url.split('/').filter((v) => v.length > 0)[0] ?? '';

    const routeIsActive =
        routeMatch !== null && routeMatch.isExact && (
            routeMatch.url === url
            || (match !== null && baseMatchPathSection.length > 0 && baseRouteMatchSection === baseMatchPathSection)
        );

    return (
        <Wrapper active={routeIsActive} onClick={() => url && history.push(url)}>
            {icon({ size: { width: 16, height: 16 } })}
            <Typography elementType='span'>{label}</Typography>
        </Wrapper>
    );
};

export default MenuItem;
