import styled from "styled-components";

export interface ProfilePictureProps {
    src: string;
    alt?: string;
    containerPadding?: string;
    onClick?: () => void;
    size?: {
        width?: string;
        height?: string;
    };
}

const ProfileImgContainer = styled.div<Pick<ProfilePictureProps, 'containerPadding'>>`
  position: relative;
  padding: ${({containerPadding}) => containerPadding !== undefined ? containerPadding : '0'};
  cursor: pointer;
`;

const ProfileImage = styled.img<{
    width?: string;
    height?: string;
}>`
  border-radius: 100%;
  width: ${({width}) => width ?? '48px'};
  height: ${({height}) => height ?? '48px'};
`;

const ProfilePicture = ({
    src,
    alt,
    containerPadding,
    size,
}: ProfilePictureProps): JSX.Element => (
    <ProfileImgContainer containerPadding={containerPadding}>
        <ProfileImage src={src} alt={alt} width={size?.width} height={size?.height} loading={'lazy'}/>
    </ProfileImgContainer>
);

export default ProfilePicture;
