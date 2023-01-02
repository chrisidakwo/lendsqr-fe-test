import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LogoWrapper = styled.div`
  left: 0;
  position: relative;
  width: 220px;

  @media (min-width: 992px) {
    width: 235px;
  }
`;

const Logo = (): JSX.Element => {
    return (
        <LogoWrapper>
            <img src='/logo.svg' alt="Lendsqr logo" style={{ height: '24px' }} />
        </LogoWrapper>
    );
};

export default Logo;
