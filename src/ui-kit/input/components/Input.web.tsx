import styled from "styled-components";
import {ChangeEvent, forwardRef} from "react";

import {defaultTheme, ThemeProps} from "../../theme";
import {InputWebProps, WebInputWrapperProps} from "../Input.types";
import {getCommon} from "./Input.style";
import colors from "../../theme/definitions/colors";

export const StyledInput = styled.input<WebInputWrapperProps & ThemeProps>`
  font-family: ${({fontFamily, theme}): string => fontFamily !== undefined
          ? fontFamily : theme.app.typography.fontFamily};

  ${getCommon}
  &::placeholder {
    color: rgba(84, 95, 125, .7);
    opacity: 1;
  }

  &::-moz-placeholder {
    color: rgba(84, 95, 125, .7);
  }

  &::-webkit-input-placeholder {
    color: rgba(84, 95, 125, .7);
  }

  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: rgba(84, 95, 125, .7);
    opacity: 1;
  }
`;

StyledInput.defaultProps = {
    theme: defaultTheme,
};

const InputContainer = styled.div`
  position: relative;
`;

const IconContainerRight = styled.div`
  color: ${colors.grey.main};
  background-color: white;
  position: absolute;
  right: 2px;
  top: 7px;
  padding: 0 10px;
`;

const InputWeb = forwardRef<HTMLInputElement, InputWebProps>(
    (
        {onChange, onChangeText, iconRight, ...styledInputProps},
        ref,
    ): JSX.Element => {
        return (
            <InputContainer>
                <StyledInput
                    {...styledInputProps}
                    ref={ref}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (onChange) {
                            onChange(e);
                        }
                        if (onChangeText) {
                            onChangeText(e.target.value);
                        }
                    }}
                />
                {iconRight && <IconContainerRight>{iconRight}</IconContainerRight>}
            </InputContainer>
        );
    },
);


InputWeb.displayName = 'InputWeb';
export default InputWeb;
