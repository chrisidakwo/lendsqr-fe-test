import React from 'react';
import styled from "styled-components";
import useMedia from 'react-use/esm/useMedia';

import {User} from "../../../models";
import {ProfilePicture} from "../../../ui-kit/profile-picture";
import {Typography} from "../../../ui-kit/typography";
import {BREAKPOINT_SCREEN_SM, colors} from "../../../ui-kit/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const NameDetail = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(84, 95, 125, 0.2);
  padding-right: 30px;

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    border: unset;
  }
  
  > h4 {
    line-height: 26px;
    margin-bottom: 12px;
  }
  
  > span {
    color: ${colors.grey.main};
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
`;

const UserNameAndAvatar = ({ user }: { user: User }): JSX.Element => {
    const isSmallScreen = useMedia(`(max-width: ${BREAKPOINT_SCREEN_SM}px)`);

    return (
        <Wrapper>
            <ProfilePicture
                containerPadding='0 20px 0 0'
                src={user.profile.avatar}
                size={isSmallScreen ? { width: '50', height: '50' } : { width: '100', height: '100' }}
            />

            <NameDetail className='name-detail'>
                <Typography elementType='h4' fontWeightMedium>
                    {`${user.profile.firstName} ${user.profile.lastName}`}
                </Typography>
                <Typography elementType={'span'}>
                    LSQFf587g90
                </Typography>
            </NameDetail>
        </Wrapper>
    );
};

export default UserNameAndAvatar;
