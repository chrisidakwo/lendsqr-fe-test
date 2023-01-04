import React from 'react';
import styled from "styled-components";

import {Typography} from "../../../ui-kit/typography";
import colors from "../../../ui-kit/theme/definitions/colors";

export interface ErrorPageProps {
    error?: Error;
}

const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 50px 0;
`;

const ErrorPage = ({error}: ErrorPageProps): JSX.Element => (
    <Wrapper>
        <Typography elementType='h3' style={{ marginBottom: '1rem' }}>
            Oops! Something went wrong when loading the page.
        </Typography>
        <Typography elementType='p' color={colors.grey.main}>{error?.message}</Typography>
    </Wrapper>
);

export default ErrorPage;
