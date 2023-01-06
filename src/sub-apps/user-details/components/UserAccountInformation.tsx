import React from 'react';
import styled from "styled-components";

import {Typography} from "../../../ui-kit/typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 60px;
  
  > h4 {
    line-height: 26px;
    margin-bottom: 12px;
  }
  
  > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
`;

const UserAccountInformation = (): JSX.Element => {
    return (
        <Wrapper>
            <Typography elementType='h4' fontWeightMedium>
                ₦200,000.00
            </Typography>
            <Typography elementType='span'>
                9912345678/Providus Bank
            </Typography>
        </Wrapper>
    );
};

export default UserAccountInformation;
