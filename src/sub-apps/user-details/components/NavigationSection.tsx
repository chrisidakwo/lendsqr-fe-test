import React from 'react';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styled from "styled-components";

import {colors} from "../../../ui-kit/theme";

const Wrapper = styled.div`
    padding: 0 20px;
`;

const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    
    &.Mui-selected {
      color: ${colors.primary};
    }
  }
  
  .MuiTabs-indicator {
    background-color: ${colors.primary};
  }
  
  .MuiTabs-flexContainer {
    justify-content: space-between;
    width: 100%;
  }
`;

const StyledTab = styled(Tab)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  
  
`;

const NavigationSection = (): JSX.Element => {
    return (
        <Wrapper>
            <StyledTabs value={0} variant='scrollable' scrollButtons={false}>
                <StyledTab label='General Details' value={0} />
                <StyledTab label='Documents' value={1} />
                <StyledTab label='Bank Details' value={2} />
                <StyledTab label='Loans' value={3} />
                <StyledTab label='Savings' value={4} />
                <StyledTab label='App and System' value={5} />
            </StyledTabs>
        </Wrapper>
    );
};

export default NavigationSection;
