import React from 'react';
import styled from "styled-components";

import colors from "../../../ui-kit/theme/definitions/colors";
import {hexToRGB} from "../../../utils";

export interface Status {
    name: string;
    color: string;
}

export interface UseStatusReturnProps {
    getStatus: () => Status;
    getStatusComp: () => JSX.Element;
}

const statuses: Status[] = [
    {
        name: 'Active',
        color: colors.green,
    },
    {
        name: 'Inactive',
        color: colors.grey.main,
    },
    {
        name: 'Pending',
        color: colors.orange,
    },
    {
        name: 'Blacklisted',
        color: colors.red.main,
    }
];

const Badge = styled.span<{ color: string; backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  display: inline-flex;
  align-items: center;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  padding: 6.75px 13px;
  height: 30px;
`;

export const useStatus = (): UseStatusReturnProps => {
    const getStatus = (): Status => statuses[(Math.random() * statuses.length) | 0];

    const getStatusComp = (): JSX.Element => {
        const status = getStatus();

        return (
            <Badge color={status.color} backgroundColor={hexToRGB(status.color, 0.1)}>{status.name}</Badge>
        );
    };

    return { getStatus, getStatusComp };
}
