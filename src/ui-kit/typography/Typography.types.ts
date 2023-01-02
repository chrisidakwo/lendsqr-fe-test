export interface TypographyStylesProps
{
    color?: string;
    fontFamily?: string;
    fontWeightSemiBold?: boolean;
    fontWeightBold?: boolean;
    fontWeightMedium?: boolean;
    fontWeightRegular?: boolean;
    uppercase?: boolean;
}

export const TYPOGRAPHY_VARIANT_BODY_1 = 'body1';
export const TYPOGRAPHY_VARIANT_BODY_2 = 'body2';
export const TYPOGRAPHY_VARIANT_SUBSCRIPT = 'subscript';

export type TypographyVariant =
    | typeof TYPOGRAPHY_VARIANT_BODY_1
    | typeof TYPOGRAPHY_VARIANT_BODY_2
    | typeof TYPOGRAPHY_VARIANT_SUBSCRIPT;
