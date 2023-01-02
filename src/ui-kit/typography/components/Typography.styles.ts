import {css} from "styled-components";

import {TypographyStylesProps} from "../Typography.types";

export const color = css<Pick<TypographyStylesProps, 'color'>>`
  ${({color}) =>
      color !== undefined &&
      css`
        color: ${color};
      `}
`;
export const fontFamily = css<Pick<TypographyStylesProps, 'fontFamily'>>`
  ${({fontFamily}) =>
      fontFamily !== undefined &&
      css`
        font-family: ${fontFamily};
      `}
`;


export const fontWeightRegular = css<Pick<TypographyStylesProps, 'fontWeightRegular'>>`
  ${({fontWeightRegular}) =>
      fontWeightRegular &&
      css`
        font-weight: 400;
      `}
`;

export const fontWeightMedium = css<Pick<TypographyStylesProps, 'fontWeightMedium'>>`
  ${({fontWeightMedium}) =>
      fontWeightMedium &&
      css`
        font-weight: 500;
      `}
`;

export const fontWeightSemiBold = css<Pick<TypographyStylesProps, 'fontWeightSemiBold'>>`
  ${({fontWeightSemiBold}) =>
      fontWeightSemiBold &&
      css`
        font-weight: 600;
      `}
`;

export const fontWeightBold = css<Pick<TypographyStylesProps, 'fontWeightBold'>>`
  ${({fontWeightBold}) =>
      fontWeightBold &&
      css`
        font-weight: 700;
      `}
`;

export const uppercase = css<Pick<TypographyStylesProps, 'uppercase'>>`
  ${({uppercase}) =>
      uppercase &&
      css`
        text-transform: uppercase;
      `}
`;
