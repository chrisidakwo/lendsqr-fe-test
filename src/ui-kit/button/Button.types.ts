export const BTN_PRIMARY = 'primary';
export const BTN_SECONDARY = 'secondary';
export const BTN_DANGER = 'danger';

export const BTN_VARIANT_FILLED = 'filled';
export const BTN_VARIANT_OUTLINED = 'outlined';
export const BTN_VARIANT_TRANSPARENT = 'transparent';

export type ButtonColor = typeof BTN_PRIMARY | typeof BTN_SECONDARY | typeof BTN_DANGER;
export type ButtonVariant = typeof BTN_VARIANT_FILLED | typeof BTN_VARIANT_OUTLINED | typeof BTN_VARIANT_TRANSPARENT;

export interface ButtonStyleProps
{
    onPress?: () => void;
    fullWidth?: boolean;
    color: ButtonColor;
    variant: ButtonVariant;
    fontFamily?: string;
}
