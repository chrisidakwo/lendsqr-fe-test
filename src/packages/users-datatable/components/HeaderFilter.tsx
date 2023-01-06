import React from 'react';
import styled from "styled-components";
import Popper from "@mui/material/Popper";
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {colors} from "../../../ui-kit/theme";
import {Input} from "../../../ui-kit/input";
import {Typography} from "../../../ui-kit/typography";
import {Button} from "../../../ui-kit/button";
import {CaretDownIcon} from "../../../ui-kit/icon";

export interface HeaderFilterProps {
    open: boolean;
    anchorEl: HTMLElement;
}

const StyledPaper = styled(Paper)`
  color: ${colors.grey.main} !important;
  margin-top: 15px;
  background-color: #fff;
  border: 1px solid rgba(84, 95, 125, 0.14);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04) !important;
  border-radius: 4px;
  padding: 20px;
  width: 270px;
`;

const FilterOption = styled.div`
  margin-bottom: 20px;
  
  input {
    font-size: 14px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 8px;
    border-width: 1px;
  }
`;

const Label = styled(Typography)`
  color: ${colors.grey.main};
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  line-height: 16px;
  margin-bottom: 6px;
`;

const FilterActions = styled.div``;

const ResetButton = styled(Button)`
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${colors.secondary};
  border-radius: 8px;
  padding: 12px 30px;
  margin-right: 15px;
  min-width: unset;
`;

const FilterButton = styled(Button)`
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px 30px;
  min-width: unset;
  box-shadow: none;
`;

const HeaderFilter = ({
    open,
    anchorEl,
}: HeaderFilterProps): JSX.Element => {
    return (
        <Popper open={open} anchorEl={anchorEl} placement='bottom' transition onResize={() => undefined}
                onResizeCapture={() => undefined}>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <StyledPaper>
                        <FilterOption>
                            <Label elementType='span'>Organization</Label>
                            <Input type='text' placeholder='Select' iconRight={<CaretDownIcon fillColor='rgba(25,48,96,0.6)' />} />
                        </FilterOption>

                        <FilterOption>
                            <Label elementType='span'>Username</Label>
                            <Input type='text' placeholder='User' />
                        </FilterOption>

                        <FilterOption>
                            <Label elementType='span'>Email</Label>
                            <Input type='email' placeholder='Email' />
                        </FilterOption>

                        <FilterOption>
                            <Label elementType='span'>Date</Label>
                            <Input type='text' placeholder='Date'
                                   iconRight={<CalendarMonthIcon fontSize='small' sx={{ color: 'rgba(25,48,96,0.6)', marginTop: '2px' }} />}
                            />
                        </FilterOption>

                        <FilterOption>
                            <Label elementType='span'>Phone Number</Label>
                            <Input type='text' placeholder='Phone Number' />
                        </FilterOption>

                        <FilterOption>
                            <Label elementType='span'>Status</Label>
                            <Input type='text' placeholder='Select' iconRight={<CaretDownIcon fillColor='rgba(25,48,96,0.6)' />} />
                        </FilterOption>

                        <FilterActions>
                            <ResetButton variant='outlined' color='secondary'>
                                Reset
                            </ResetButton>
                            <FilterButton>
                                Filter
                            </FilterButton>
                        </FilterActions>
                    </StyledPaper>
                </Fade>
            )}
        </Popper>
    );
};

export default HeaderFilter;
