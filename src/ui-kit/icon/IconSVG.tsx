import styled, { css } from 'styled-components';

export const IconSVG = styled.svg<{ cursor?: string }>`
  ${({ cursor }) =>
    cursor !== undefined &&
    css`
      cursor: ${cursor};
    `}
`;
