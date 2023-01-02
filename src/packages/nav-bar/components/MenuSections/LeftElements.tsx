import React, {Fragment} from 'react';
import styled from "styled-components";

import {Input} from "../../../../ui-kit/input";

const StyledInput = styled(Input)`
  padding: 6px 18px;
  border-radius: 8px;
`;

const LeftElements = (): JSX.Element => {
    return (
        <Fragment>
            <StyledInput placeholder='Search for anything' />
        </Fragment>
    );
};

export default LeftElements;
