import styled, {css} from 'styled-components';

import {getVariant} from './getVariant';
import {TypographyStylesProps, TypographyVariant} from '../Typography.types';
import {color, fontFamily, fontWeightBold, fontWeightMedium, fontWeightRegular, uppercase} from "./Typography.styles";

export interface TypographyProps {
    elementType: keyof JSX.IntrinsicElements;
    styleVariant?: string | TypographyVariant;
}

const commonStyles = css`
  font-family: ${({theme}): string => theme.app.typography.fontFamily};
  margin: 0;
  padding: 0;
`;

const Typography = styled.div.attrs(
    ({
         elementType,
     }: TypographyProps): {
        as?: keyof JSX.IntrinsicElements;
    } => ({as: elementType}),
)<TypographyProps & TypographyStylesProps>`
  ${commonStyles}

  ${({elementType, styleVariant}) => getVariant(elementType, styleVariant)}

  ${color}
  ${fontFamily}
  ${fontWeightRegular}
  ${fontWeightMedium}
  ${fontWeightBold}
  ${uppercase}
`;

export default Typography;
