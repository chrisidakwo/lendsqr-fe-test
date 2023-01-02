import {SimpleInterpolation} from "styled-components";

import {
    TYPOGRAPHY_VARIANT_BODY_1,
    TYPOGRAPHY_VARIANT_BODY_2,
    TYPOGRAPHY_VARIANT_SUBSCRIPT,
    TypographyVariant
} from "../Typography.types";
import {
    body1Styles,
    body2Styles,
    defaultStyles,
    h1Styles,
    h2Styles,
    h3Styles,
    h4Styles,
    h5Styles,
    h6Styles,
    subscriptStyles
} from "./variantCSS";

export const getVariant = (
    elementType: keyof JSX.IntrinsicElements,
    styleVariant?: string | TypographyVariant,
): ReadonlyArray<SimpleInterpolation> => {
    switch (styleVariant ?? elementType.toString()) {
        case TYPOGRAPHY_VARIANT_BODY_1:
            return body1Styles;
        case TYPOGRAPHY_VARIANT_BODY_2:
            return body2Styles;
        case TYPOGRAPHY_VARIANT_SUBSCRIPT:
            return subscriptStyles;
        case 'h1':
            return h1Styles;
        case 'h2':
            return h2Styles;
        case 'h3':
            return h3Styles;
        case 'h4':
            return h4Styles;
        case 'h5':
            return h5Styles;
        case 'h6':
            return h6Styles;
        default:
            return defaultStyles;
    }
};
