import React from 'react';
import styled from "styled-components";

import {Card} from "../../../ui-kit/card";
import UserDetailSection from "./UserDetailSection";
import {User} from "../../../models";
import NavigationSection from "./NavigationSection";

export interface UserDetailsNavigationProps {
    user: User;
}

const StyledCard = styled(Card)`
  padding: 0;
  margin-bottom: 30px;
`;

const UserDetailsNavigation = ({ user }: UserDetailsNavigationProps): JSX.Element => {
    return (
        <StyledCard>
            <UserDetailSection user={user} />
            <NavigationSection />
        </StyledCard>
    );
};

export default UserDetailsNavigation;
