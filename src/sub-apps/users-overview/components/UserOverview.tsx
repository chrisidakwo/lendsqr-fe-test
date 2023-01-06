import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import {DefaultLayout, PageHeader, StatisticsSection} from "../../../ui-kit/layout";
import {Typography} from "../../../ui-kit/typography";
import StatsCard from "../../../ui-kit/card/compositions/StatsCard";
import {CoinsStackIcon, GenderedUsersIcon, GroupUsersIcon, StorageDataIcon} from "../../../ui-kit/icon";
import colors from "../../../ui-kit/theme/definitions/colors";
import {UserDataTable} from "../../../packages/users-datatable";
import {Card} from '../../../ui-kit/card';
import {Pagination, usePagination} from "../../../packages/pagination";
import {User} from "../../../models";
import {useUserApi} from "../../../api";

const Container = styled.div`
    margin-top: 2rem;
`;

const UserOverview = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);
    const { page, setPage, pageLength, setPageLength, pagesCount } = usePagination(100, 10);

    const { fetchUsers } = useUserApi();

    useEffect( () => {
        fetchUsers(page, pageLength).then((users: User[]) => {
            setUsers(users);
        });

    }, [page, pageLength]);

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
                <UserDataTable users={users} />

                <Container>
                    <Pagination
                        dataLength={users.length}
                        pagesCount={pagesCount}
                        pageLength={pageLength}
                        page={parseInt(page)}
                        onPageLengthChange={(length) => setPageLength(length)}
                        onPageChange={(e, page) => setPage(page.toString())}
                    />
                </Container>
            </Card>
        </DefaultLayout>
    );
};

export default UserOverview;
