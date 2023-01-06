import React, {ButtonHTMLAttributes, ComponentProps, MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {genericCss, getBackgroundColor, getBoxShadow, getHoverColor, getTextColor, getWidth} from "./Button.styles";
import {BTN_PRIMARY, BTN_VARIANT_FILLED, BTN_VARIANT_TRANSPARENT, ButtonStyleProps} from "../Button.types";

export type ButtonProps = Partial<ButtonStyleProps> & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonElement = styled.button`
  white-space: nowrap;
  outline: none;
  display: inline-block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
  box-shadow 0.15s ease-in-out;

  font-family: ${({fontFamily, theme}): string => fontFamily !== undefined
          ? fontFamily : theme.app.typography.fontFamily};

  ${genericCss}
  ${getWidth}
  ${getBackgroundColor}
  ${getTextColor}
  ${getBoxShadow}
  &:hover, &:focus {
    ${getHoverColor}
  }
`;

const Button = ({
    type = 'button',
    fullWidth = false,
    color = BTN_PRIMARY,
    variant = BTN_VARIANT_FILLED,
    fontFamily,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    const {onClick, onPress, ...buttonElementProps} = props;

    return (
        <ButtonElement
            fullWidth={fullWidth}
            color={color}
            variant={variant}
            fontFamily={fontFamily}
            type={type}
            {...buttonElementProps}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                if (onClick) {
                    onClick(e);
                }
                if (onPress) {
                    onPress();
                }
            }}
        >
            {children}
        </ButtonElement>
    );
};

export const LinkElement = ButtonElement.withComponent(({fullWidth, color, variant, ...props}) => (
    <Link {...props} />
));

export const LinkButton = ({
                               href,
                               fullWidth = false,
                               color = BTN_PRIMARY,
                               variant = BTN_VARIANT_TRANSPARENT,
                               children,
                               ...props
                           }: Partial<ComponentProps<typeof LinkElement>>): JSX.Element => (
    <LinkElement to={href} fullWidth={fullWidth} color={color} variant={variant} {...props}>
        {children}
    </LinkElement>
);

export default Button;
