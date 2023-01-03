import React from 'react';
import styled from "styled-components";

import {ContentContainer, DefaultLayout} from "../../ui-kit/layout";
import {Typography} from "../../ui-kit/typography";
import colors from "../../ui-kit/theme/definitions/colors";

const H3 = styled.h3`
  margin-bottom: 2rem;
`;

const Dashboard = (): JSX.Element => {
    return (
        <DefaultLayout>
            <H3>Dashboard</H3>

            <ContentContainer>
                <Typography elementType='p' color={colors.grey.main}>Nothing else goes here</Typography>
            </ContentContainer>
        </DefaultLayout>
    );
};

export default Dashboard;
