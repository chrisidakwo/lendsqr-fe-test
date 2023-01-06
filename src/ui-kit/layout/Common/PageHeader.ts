import styled from "styled-components";

import {BREAKPOINT_SCREEN_SM} from "../../theme";

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  
  > h3 {
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    line-height: 28px;
  }
  
  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    flex-direction: column;
    align-items: start;
    
    > div {
      margin-top: 20px;
    }
  }
`;
