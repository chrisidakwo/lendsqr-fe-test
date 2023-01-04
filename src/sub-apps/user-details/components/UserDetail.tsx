import React from 'react';

import {DefaultLayout} from "../../../ui-kit/layout";

export interface UserDetailProps {
    userId: string;
}

const UserDetail = ({userId}: UserDetailProps): JSX.Element => {
    return (
        <DefaultLayout>
            User with a id of {userId}
        </DefaultLayout>
    );
};

export default UserDetail;
