import React from 'react';

import {ProfilePicture} from '../../../ui-kit/profile-picture';

export interface AvatarElementProps
{
    url: string;
    imgURL: string;
    marginRight?: string;
}

const AvatarElement = ({url, imgURL, marginRight = '1rem'}: AvatarElementProps): JSX.Element => (
    <a href='/' style={{marginRight}}>
        <ProfilePicture src={imgURL} alt={'avatar'} size={{width: '48px', height: '48px'}} data-original={imgURL}/>
    </a>
);

export default AvatarElement;
