import React from 'react';
import styled from "styled-components";

import {Typography} from "../../../ui-kit/typography";
import {BREAKPOINT_SCREEN_SM, colors} from "../../../ui-kit/theme";
import {RatingsIcon} from "../../../ui-kit/icon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid rgba(84, 95, 125, 0.2);
  padding-right: 30px;
  margin-right: 30px;
  min-height: 60px;

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    border: unset;
  }
  
  > h6 {
    color: ${colors.grey.main};
    font-size: 14px;
    font-weight: 500;
  }
`;

const UserTier = (): JSX.Element => {
    return (
        <Wrapper>
            <Typography elementType='h6'>User's Tier</Typography>
            <RatingsIcon />
        </Wrapper>
    );
};

export default UserTier;
