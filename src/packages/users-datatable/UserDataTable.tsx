import React, {useState} from 'react';
import styled from "styled-components";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClickAwayListener from "@mui/material/ClickAwayListener";

import {colors} from "../../ui-kit/theme";
import {FilterIcon} from "../../ui-kit/icon";
import {useStatus} from "./hooks/useStatus";
import {User} from "../../models";
import HeaderFilter from "./components/HeaderFilter";
import RowActions from "./components/RowActions";
import {toHumanReadableDate} from "../../utils";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  
  th {
    color: ${colors.grey.main};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    text-transform: uppercase;
    text-align: left;
    padding: 0 16px;

    &:first-child {
      padding-left: 0;
    }
  }
  
  tr {
    td {
      color: ${colors.grey.main};
      font-style: normal;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      padding: 16px;
      border-bottom: 1px solid rgba(33, 63, 125, 0.1);
      vertical-align: middle;
      
      &:first-child {
        padding-left: 0;
        text-transform: capitalize;
      }
    }
    
    &:last-child {
      td {
        border: unset;
        padding-bottom: unset;
      }
    }
  }
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  > svg {
    margin-left: 10px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const tableColumns = [
    'Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status', null
];

const UserDataTable = ({ users }: { users: User[] }): JSX.Element => {
    const { getStatusComp } = useStatus();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    // Table header filter
    const [filterOpen, setFilterOpen] = useState(false);
    const [headerAnchorEl, setHeaderAnchorEl] = useState<HTMLElement | null>(null);

    // Table data row actions
    const [actionsAnchorEl, setActionsAnchorEl] = React.useState<null | HTMLElement>(null);
    const openRowActions = Boolean(actionsAnchorEl);

    const showFilterOptions = (el: HTMLElement) => {
        setHeaderAnchorEl(el);
        setFilterOpen(true);
    };

    const viewRowActions = (event: any, user: User): void => {
        setSelectedUser(user);
        setActionsAnchorEl(event.currentTarget);
    };

    const closeRowActions = (): void => {
        setSelectedUser(null);
        setActionsAnchorEl(null);
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table>
                <thead>
                    <tr>
                        {tableColumns.map((column, index) => (
                            <th key={column ?? index}>
                                <StyledHeading>
                                    {column === null ? '' : column}
                                    {column === null ? '' : (
                                        <FilterIcon
                                            size={{ width: 14, height: 14 }}
                                            fillColor={colors.grey.main}
                                            cursor='pointer'
                                            onClick={(event) => showFilterOptions(event.currentTarget as HTMLElement)}
                                        />
                                    )}
                                </StyledHeading>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {users.length > 0 ? users.map((user, index) => (
                        <tr key={`${user.id}_${index}`}>
                            <td>{user.orgName.replaceAll('-', ' ')}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{toHumanReadableDate(user.createdAt)}</td>
                            <td>{getStatusComp()}</td>
                            <td>
                                <StyledColumn>
                                    {<MoreVertIcon fontSize='small' sx={{ cursor: 'pointer' }} onClick={(event) => viewRowActions(event, user)} />}
                                </StyledColumn>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td
                                colSpan={7}
                                style={{ textAlign: 'center', padding: '3rem 0', color: colors.grey.main }}
                            >
                                There are no users
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {actionsAnchorEl !== null && selectedUser !== null && (
                <RowActions
                    anchorEl={actionsAnchorEl}
                    open={openRowActions}
                    onClose={closeRowActions}
                    user={selectedUser}
                />
            )}

            {headerAnchorEl !== null && (
                <ClickAwayListener onClickAway={() => {
                    setHeaderAnchorEl(null);
                    setFilterOpen(false);
                }}>
                    <div>
                        <HeaderFilter open={filterOpen} anchorEl={headerAnchorEl} />
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default UserDataTable;
