import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';

import {InputWebProps} from "../Input.types";
import InputWeb from "./Input.web";
import {BTN_VARIANT_TRANSPARENT, Button} from "../../button";

const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledButton = styled(Button)`
  font-family: 'Avenir Next', sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: -5px;
  min-width: unset;
`;

export type PasswordInputProps = InputWebProps;

export const PasswordInput = ({
  value,
  fontFamily,
  ...props
}: PasswordInputProps): JSX.Element => {
    const [passwordValue, setPasswordValue] = useState(value);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = (): void => {
        setPasswordShown(!passwordShown);
    };

    return (
        <PasswordInputContainer>
            <InputWeb
                fontFamily={fontFamily}
                {...props}
                value={passwordValue ?? ''}
                type={passwordShown ? 'text' : 'password'}
                placeholder='Password'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const password = e.target.value;
                    setPasswordValue(password);
                }}
                iconRight={
                    <StyledButton variant={BTN_VARIANT_TRANSPARENT} onClick={() => togglePasswordVisibility()}>
                        {passwordShown ? 'HIDE' : 'SHOW'}
                    </StyledButton>
                }
            />
        </PasswordInputContainer>
    );
};

export default PasswordInput;
