import React, {ReactNode} from 'react';
import styled from "styled-components";

import Card from "../Card";
import {Typography} from "../../typography";
import colors from "../../theme/definitions/colors";

export interface StatsCardProps {
    heading: string;
    figure: string;
    color: string;
    icon: ReactNode;
}

const StatsIcon = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 100%;
  display: inline-flex;
  height: 100%;
  padding: 12px;
  margin-bottom: 14px;
`;

const StatsHeading = styled(Typography)`
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.grey.main};
  margin-bottom: 12px;
`;

const StatsFigure = styled(Typography)`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
`;

const StatsCard = ({ heading, figure, color, icon }: StatsCardProps): JSX.Element => {
    return (
        <Card>
            <StatsIcon color={color}>
                {icon}
            </StatsIcon>
            <StatsHeading elementType='span'>{heading}</StatsHeading>
            <StatsFigure elementType='span'>{figure}</StatsFigure>
        </Card>
    );
};

export default StatsCard;
