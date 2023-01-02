import {BTN_DANGER, BTN_PRIMARY, BTN_SECONDARY, ButtonStyleProps, ButtonVariant} from "../Button.types";
import {BREAKPOINT_SCREEN_SM_MIN} from "../../theme";
import colors from "../../theme/definitions/colors";

export const genericCss = `
  border-radius: 8px;
  font-weight: 600;
  line-height: 19px;
  font-size: 14px;
  height: 48px;
  text-align: center;
  padding: 15px 0;
  border: none;
  outline: none;
`;

export const getBackgroundColor = ({color, variant}: ButtonStyleProps): string => {
    switch (color) {
        case BTN_PRIMARY:
            return calcBGColor(variant, colors.primary);
        case BTN_SECONDARY:
            return calcBGColor(variant, colors.secondary);
        case BTN_DANGER:
            return calcBGColor(variant, colors.red.main);
    }
};

export const getBorder = ({color, variant}: ButtonStyleProps): string => {
    if (variant === 'transparent') {
        return 'border: none';
    }

    switch (color) {
        case BTN_PRIMARY:
            return `border: 1px solid ${colors.primary}`;
        case BTN_SECONDARY:
            return `border: 1px solid ${colors.secondary}`;
        case BTN_DANGER:
            return `border: 1px solid ${colors.red.main}`;
    }
}

export const getTextColor = ({color, variant}: ButtonStyleProps): string => {
    switch (color) {
        case BTN_PRIMARY:
            return calcTextColor(variant, colors.primary);
        case BTN_SECONDARY:
            return calcTextColor(variant, colors.secondary);
        case BTN_DANGER:
            return calcTextColor(variant, colors.red.main);
    }
};

export const getHoverColor = ({color, variant}: ButtonStyleProps): string => {
    switch (color) {
        case BTN_PRIMARY:
            return calcHoverColor(variant, colors.teal.dark);
        case BTN_SECONDARY:
            return calcHoverColor(variant, colors.blue.dark);
        case BTN_DANGER:
            return calcHoverColor(variant, colors.red.dark);
    }
};

export const getBoxShadow = ({color, variant}: ButtonStyleProps): string => {
    if (variant === 'outlined' || variant === 'transparent') {
        return '';
    }

    switch (color) {
        default:
            return ``;
        case BTN_PRIMARY:
            return `
          box-shadow: 0 2px 4px rgba(10, 17, 26, 0.04), 0 2px 8px rgba(57, 205, 204, 0.16);
        `;
        case BTN_SECONDARY:
            return `
          box-shadow: 0 2px 4px rgba(10, 17, 26, 0.04), 0 2px 8px rgba(33, 63, 125, 0.16);
        `;
        case BTN_DANGER:
            return `
          box-shadow: 0 2px 4px rgba(10, 17, 26, 0.04), 0 2px 8px rgba(228, 3, 59, 0.16);
        `;
    }
};

export const getWidth = ({fullWidth}: ButtonStyleProps): string =>
    fullWidth
        ? `width: 100%;`
        : `
            width: auto;
            min-width: 110px;
              
            @media(min-width: ${BREAKPOINT_SCREEN_SM_MIN}px) {
              min-width: 176px;
            }
          `;

const calcHoverColor = (variant: ButtonVariant, color: string): string =>
    (variant === 'outlined' || variant === 'filled')
        ? `
            color: #fff;
            background-color: ${color};
            border-color: ${color};
        `
        : `
            color: ${color};
            background-color: transparent
        `;

const calcBGColor = (variant: ButtonVariant, color: string): string =>
    (variant === 'outlined' || variant === 'transparent')
        ? 'background-color: transparent;'
        : `background-color: ${color};`;

const calcTextColor = (variant: ButtonVariant, color: string): string =>
    (variant === 'outlined' || variant === 'transparent')
        ? `color: ${color};`
        : 'color: #fff;';
