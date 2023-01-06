import React from 'react';
import styled from "styled-components";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import colors from "../../ui-kit/theme/definitions/colors";
import {FilterIcon} from "../../ui-kit/icon";
import {useStatus} from "./hooks/useStatus";
import {User} from "../../models";

const Table = styled.table`
  width: 100%;
  
  th {
    color: ${colors.grey.main};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    text-transform: uppercase;
    text-align: left;
  }
  
  tr {
    td {
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      padding: 16px 0;
      border-bottom: 1px solid rgba(33, 63, 125, 0.1);
      vertical-align: middle;
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

    return (
        <div>
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
                                            onClick={() => alert('Clicked filter')}
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
                            <td>{user.orgName}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.createdAt}</td>
                            <td>{getStatusComp()}</td>
                            <td>
                                <StyledColumn>
                                    {<MoreVertIcon fontSize='small' sx={{ cursor: 'pointer' }} onClick={() => alert('table action clicked')} />}
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
        </div>
    );
};

export default UserDataTable;
