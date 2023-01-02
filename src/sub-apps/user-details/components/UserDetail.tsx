import React from 'react';

export interface UserDetailProps
{
    userId: string;
}

const UserDetail = ({userId}: UserDetailProps): JSX.Element => {
    return (
        <div>
            User with a id of {userId}
        </div>
    );
};

export default UserDetail;
