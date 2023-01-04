import React from 'react';
import {Card} from "@mui/material";

import {DefaultLayout, PageHeader, StatisticsSection} from "../../../ui-kit/layout";
import {Typography} from "../../../ui-kit/typography";
import StatsCard from "../../../ui-kit/card/compositions/StatsCard";
import {CoinsStackIcon, GenderedUsersIcon, GroupUsersIcon, StorageDataIcon} from "../../../ui-kit/icon";
import colors from "../../../ui-kit/theme/definitions/colors";

const UserOverview = (): JSX.Element => {
    return (
        <DefaultLayout>
            <PageHeader>
                <Typography elementType='h3' fontWeightMedium>Users</Typography>
            </PageHeader>

            <StatisticsSection>
                <StatsCard
                    heading='Users'
                    figure='2,453'
                    color='rgba(223, 24, 255, 0.1)'
                    icon={<GenderedUsersIcon fillColor='#DF18FF' size={{ width: 22, height: 22 }} />}
                />

                <StatsCard
                    heading='Active Users'
                    figure='2,453'
                    color='rgba(87, 24, 255, 0.1)'
                    icon={<GroupUsersIcon fillColor={colors.purple} size={{ width: 22, height: 22 }} />}
                />

                <StatsCard
                    heading='Users With Loans'
                    figure='12,453'
                    color='rgba(245, 95, 68, 0.1)'
                    icon={<StorageDataIcon fillColor={colors.red.daisy} size={{ width: 22, height: 22 }} />}
                />

                <StatsCard
                    heading='Users With Savings'
                    figure='102,453'
                    color='rgba(255, 51, 102, 0.1)'
                    icon={<CoinsStackIcon fillColor={colors.red.light} size={{ width: 22, height: 22 }} />}
                />
            </StatisticsSection>

            <Card>
                Hello
            </Card>
        </DefaultLayout>
    );
};

export default UserOverview;
