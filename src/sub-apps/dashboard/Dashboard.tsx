import React from 'react';

import {ContentContainer, DefaultLayout, PageHeader} from "../../ui-kit/layout";
import {Typography} from "../../ui-kit/typography";
import colors from "../../ui-kit/theme/definitions/colors";

const Dashboard = (): JSX.Element => {
    return (
        <DefaultLayout>
            <PageHeader>
                <Typography elementType='h3'>Dashboard</Typography>
            </PageHeader>

            <ContentContainer>
                <Typography elementType='p' color={colors.grey.main}>Nothing else goes here</Typography>
            </ContentContainer>
        </DefaultLayout>
    );
};

export default Dashboard;
