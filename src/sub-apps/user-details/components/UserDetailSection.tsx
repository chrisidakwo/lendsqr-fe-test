import React from 'react';
import styled from "styled-components";
import useMedia from "react-use/esm/useMedia";

import {User} from "../../../models";
import UserNameAndAvatar from './UserNameAndAvatar';
import UserTier from './UserTier';
import UserAccountInformation from './UserAccountInformation';
import {BREAKPOINT_SCREEN_SM} from "../../../ui-kit/theme";

export interface UserDetailSectionProps {
    user: User;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const UserDetailSection = ({ user }: UserDetailSectionProps): JSX.Element => {
    const isSmallScreen = useMedia(`(max-width: ${BREAKPOINT_SCREEN_SM}px)`);

    return (
        <Wrapper>
            <UserNameAndAvatar user={user} />
            {!isSmallScreen && (
                <>
                    <UserTier />
                    <UserAccountInformation />
                </>
            )}
        </Wrapper>
    );
};

export default UserDetailSection;
