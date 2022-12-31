export const COLOR_WHITE = '#FFF';
export const COLOR_BLACK = '#000';

export const COLOR_GREY = '#545F7D';
export const COLOR_GREY_BACKGROUND = '#E5E5E5';
export const COLOR_DARK_BLUE = '#213F7D';
export const COLOR_ORANGE = '#E9B200';
export const COLOR_RED = '#E4033B';
export const COLOR_RED_LIGHT = '#FF3366';
export const COLOR_GREEN = '#39CD62';
export const COLOR_TEAL = '#39CDCC';
export const COLOR_PURPLE = '#5718FF';
export const COLOR_PINK = '#DF18FF';
export const COLOR_DAISY = '#F55F44';

const baseColors = {
    white: COLOR_WHITE,
    black: COLOR_BLACK,
    grey: {
        main: COLOR_GREY,
        background: COLOR_GREY_BACKGROUND
    },
    blue: {
        dark: COLOR_DARK_BLUE,
    },
    orange: COLOR_ORANGE,
    red: {
        main: COLOR_RED,
        daisy: COLOR_DAISY,
        light: COLOR_RED_LIGHT,
    },
    green: COLOR_GREEN,
    teal: COLOR_TEAL,
    purple: COLOR_PURPLE,
    pink: COLOR_PINK
};

const colors = {
    ...baseColors,
    primary: baseColors.teal,
    secondary: baseColors.blue.dark,
    font: baseColors.grey.main,
}

export default colors;
