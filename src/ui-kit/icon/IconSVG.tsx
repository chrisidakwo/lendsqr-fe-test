import styled, {css} from 'styled-components';

import IconProps from "./IconProps";

export const IconSVG = styled.svg<IconProps>`
  ${({cursor}) =>
    cursor !== undefined &&
    css`
      cursor: ${cursor};
    `}
`;
