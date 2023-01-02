import React from 'react';

import {ProfilePicture} from '../../../ui-kit/profile-picture';

export interface AvatarElementProps {
    imgURL: string;
    marginRight?: string;
}

const AvatarElement = ({imgURL, marginRight = '1rem'}: AvatarElementProps): JSX.Element => (
    <a style={{marginRight}}>
        <ProfilePicture src={imgURL} alt={'avatar'} size={{width: '48px', height: '48px'}} data-original={imgURL}/>
    </a>
);

export default AvatarElement;
