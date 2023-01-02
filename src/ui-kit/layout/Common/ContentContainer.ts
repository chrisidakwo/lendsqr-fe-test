import styled, {css} from 'styled-components';

import {COLOR_DARK_BLUE, COLOR_GREY_BACKGROUND} from '../../theme';

interface ContentContainerProps
{
  backgroundColor?: string;
  paddingBottom?: boolean;
  borderBottom?: boolean;
}

export const ContentContainer = styled.div<ContentContainerProps>`
  background-color: ${({backgroundColor}) =>
    backgroundColor !== undefined ? backgroundColor : COLOR_GREY_BACKGROUND};
  flex-grow: 1;
  padding-bottom: 80px;
  transition: padding 0.5s ease 0s;

  ${({borderBottom}) =>
    borderBottom &&
    css`
      border-bottom: 1px solid ${COLOR_DARK_BLUE};
    `};

  ${({paddingBottom}) =>
    paddingBottom === false &&
    css`
      padding-bottom: 0;
    `};
`;
