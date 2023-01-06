import React from 'react';
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {MuiPagination} from './MuiPagination';
import {Typography} from "../../../ui-kit/typography";
import colors from "../../../ui-kit/theme/definitions/colors";
import {Button} from "../../../ui-kit/button";

export interface PaginationProps {
    dataLength: number;
    pagesCount: number;
    pageLength: number;
    page: number;
    onPageLengthChange: (length: number) => void
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageLengthWrapper = styled.span`
    margin: 0 10px;
`;

const PageLengthButton = styled(Button)`
  color: ${colors.grey.main};
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  box-shadow: none;
  border-radius: 4px;
  padding: 7px 12px;
  min-width: 80px;
  height: unset;
  background-color: rgba(33, 63, 125, 0.1);
  
  &:hover, &:focus, &:focus {
    color: ${colors.blue.main};
    background-color: rgba(33, 63, 125, 0.3);
  }
  
  > span {
    margin-right: 5px;
  }
`;

const PageLengthMenu = styled(Menu)`
  & .MuiPaper-root {
    color: ${colors.grey.main};
    min-width: 80px;
  }
`;

const Pagination = ({
    dataLength,
    pagesCount,
    pageLength,
    page,
    onPageLengthChange,
    onPageChange,
}: PaginationProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const changePageLength = (length: number): void => {
        onPageLengthChange(length);
        setAnchorEl(null);
    };

    return (
        <Wrapper>
            <div>
                <Typography elementType='span' color={colors.grey.main} style={{ fontSize: '14px' }}>
                    Showing
                </Typography>
                <PageLengthWrapper>
                    <PageLengthButton
                        id="page-length-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <span>{pageLength}</span>
                        <ExpandMoreIcon fontSize='small' />
                    </PageLengthButton>

                    <PageLengthMenu
                        id='page-menu'
                        MenuListProps={{
                            'aria-labelledby': 'page-length-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => changePageLength(5)}>5</MenuItem>
                        <MenuItem onClick={() => changePageLength(10)}>10</MenuItem>
                    </PageLengthMenu>
                </PageLengthWrapper>
                <Typography elementType='span' color={colors.grey.main} style={{ fontSize: '14px' }}>
                    out of {dataLength}
                </Typography>
            </div>
            <MuiPagination count={pagesCount} page={page} siblingCount={2} boundaryCount={0} onChange={onPageChange} />
        </Wrapper>
    );
};

export default Pagination;
