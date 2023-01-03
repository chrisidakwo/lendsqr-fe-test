import React from 'react';
import styled from "styled-components";

import {Typography} from "../../../ui-kit/typography";
import {BriefcaseIcon, CaretDownIcon} from "../../../ui-kit/icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 42px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  height: 28px;
`;

const StyledTypography = styled(Typography)`
  margin-right: 12px;
`;

const OrganizationSwitcher = (): JSX.Element => {
    return (
        <Wrapper>
            <IconWrapper>
                <BriefcaseIcon/>
            </IconWrapper>
            <StyledTypography elementType='span'>Switch Organization</StyledTypography>
            <CaretDownIcon/>
        </Wrapper>
    );
};

export default OrganizationSwitcher;
