import React from 'react';
import styled from "styled-components";

import {PageContainer} from '../../../ui-kit/layout';
import {BREAKPOINT_SCREEN_LG, BREAKPOINT_SCREEN_MD, BREAKPOINT_SCREEN_SM} from "../../../ui-kit/theme";
import {Typography} from "../../../ui-kit/typography";
import illustrationImg from '../img/pablo-sign-in.svg';
import {BTN_VARIANT_FILLED, BTN_VARIANT_TRANSPARENT, LinkButton, LinkElement} from "../../../ui-kit/button";
import {Input, PasswordInput} from "../../../ui-kit/input";
import routes from "../../../router";
import colors from "../../../ui-kit/theme/definitions/colors";

const LoginPageWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #fff;
  height: calc(100vh);

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    display: block;
    grid-template-columns: 100% 100%;
  }
`;

const LendsqrLogo = styled.div`
  width: 100%;
  margin-bottom: 12rem;

  img {
    height: 36px;
    text-align: left;
  }

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    margin-bottom: 6rem;

    img {
      height: 24px;
    }
  }
`;

const IllustrationWrapper = styled.div`
  padding: 0 1rem 0 3rem;

  @media (min-width: ${BREAKPOINT_SCREEN_LG}px) {
    padding: 0 5rem;
  }

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    display: none;
  }

  > img {
    vertical-align: middle;
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 15rem 0 5rem;

  @media (max-width: ${BREAKPOINT_SCREEN_LG}px) {
    padding: 0 5rem 0 5rem;
  }

  @media (max-width: ${BREAKPOINT_SCREEN_MD}px) {
    padding: 0 3rem;
  }

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    padding: 0 2rem;
  }
`;

const FormLogo = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    display: block;
  }
`;

const StyledSubtitle = styled(Typography)`
  font-family: 'Avenir Next', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-top: 0.85rem;
`;

const StyledForm = styled.form`
  margin-top: 3.5rem;

  input {
    margin-bottom: 1rem;
  }
`;

const ForgotPassword = styled(LinkElement)`
  font-size: 0.75rem;
  font-family: 'Avenir Next', sans-serif;
  margin-bottom: 1rem;
  min-width: unset;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &:hover {
    color: ${colors.teal.dark};
    text-decoration: underline;
  }
`;

const Login = (): JSX.Element => {
    return (
        <PageContainer>
            <LoginPageWrapper>
                <IllustrationWrapper>
                    <LendsqrLogo>
                        <img src="/logo.svg" alt="Lendsqr logo"/>
                    </LendsqrLogo>
                    <img src={illustrationImg} alt="Login page illustration"/>
                </IllustrationWrapper>

                <FormWrapper>
                    <FormLogo>
                        <LendsqrLogo>
                            <img src="/logo.svg" alt="Lendsqr logo"/>
                        </LendsqrLogo>
                    </FormLogo>

                    <Typography elementType='h1' fontFamily='Avenir Next, sans-serif' fontWeightBold>
                        Welcome!
                    </Typography>
                    <StyledSubtitle elementType={'p'} styleVariant={'subscript'}>
                        Enter your details to login.
                    </StyledSubtitle>

                    <StyledForm action="">
                        <Input type='email' placeholder='Email' fontFamily='Avenir Next, sans-serif'/>
                        <PasswordInput/>

                        <ForgotPassword to={routes.authentication.login} variant={BTN_VARIANT_TRANSPARENT}>
                            Forgot Password?
                        </ForgotPassword>

                        <LinkButton
                            to={routes.dashboard}
                            variant={BTN_VARIANT_FILLED}
                            fontFamily='Avenir Next, sans-serif'
                            fullWidth
                        >
                            LOG IN
                        </LinkButton>
                    </StyledForm>
                </FormWrapper>
            </LoginPageWrapper>
        </PageContainer>
    );
};

export default Login;
