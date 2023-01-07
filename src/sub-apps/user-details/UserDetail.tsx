import React, {Fragment, useEffect} from 'react';
import styled from "styled-components";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import {useHistory} from "react-router-dom";
import {useLocalStorage} from "react-use";

import {DefaultLayout, PageHeader} from "../../ui-kit/layout";
import {Typography} from "../../ui-kit/typography";
import {BTN_DANGER, BTN_PRIMARY, Button} from "../../ui-kit/button";
import {BREAKPOINT_SCREEN_SM, colors} from "../../ui-kit/theme";
import UserDetailsNavigation from './components/UserDetailsNavigation';
import {User} from "../../models";
import {useUserApi} from "../../api";
import {Card} from "../../ui-kit/card";

export interface UserDetailProps {
    userId: string;
}

const NavBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 32px;
  
  svg {
    margin-right: 14px;
  }
`;

const BackToUsers = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const StyledButton = styled(Button)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
    padding: 7px 15px;
    height: 36px;
  }
`;

const StyledCard = styled(Card)`
    margin-bottom: 30px;
`;

const Section = styled.div`
  border-bottom: 1px solid rgba(33, 63, 125, 0.1);
  margin-bottom: 30px;
  
  &:last-of-type {
    border-bottom: none;
  }
  
  h5 {
    color: ${colors.blue.main};
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;
  }
`;

const DataSection = styled.div`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    color: ${colors.grey.main};
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  
  span:nth-child(2) {
    color: ${colors.grey.main};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;

    @media (max-width: ${BREAKPOINT_SCREEN_SM}px) {
      margin-bottom: 10px;
    }
  }
`;

const UserDetail = ({userId}: UserDetailProps): JSX.Element => {
    const [userDetails, setUserDetails] = useLocalStorage<User | undefined>(`lendsqr_${userId}`);
    const { push } = useHistory();

    const { fetchUser } = useUserApi();

    useEffect(() => {
        if (userDetails === undefined) {
            fetchUser(userId).then((user) => {
                setUserDetails(user);
            });
        }

    }, [userDetails, userId]);

    return (
        <DefaultLayout>
            <NavBack onClick={() => push('/users')}>
                <KeyboardBackspaceOutlinedIcon />
                <BackToUsers elementType='span'>
                    Back to Users
                </BackToUsers>
            </NavBack>

            <PageHeader>
                <Typography elementType='h3' fontWeightMedium>User Details</Typography>
                <div>
                    <StyledButton color={BTN_DANGER} variant='outlined'>
                        Blacklist User
                    </StyledButton>

                    <StyledButton color={BTN_PRIMARY} variant='outlined' style={{ marginLeft: '20px' }}>
                        Activate User
                    </StyledButton>
                </div>
            </PageHeader>

            {userDetails && (
                <Fragment>
                    <UserDetailsNavigation user={userDetails} />

                    <StyledCard>
                        <Section>
                            <Typography elementType='h5'>Personal Information</Typography>
                            <DataSection>
                                <DataBlock>
                                    <Typography elementType='span'>Full Name</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.profile.firstName} ${userDetails.profile.lastName}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Phone Number</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.phoneNumber}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Email Address</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.email}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>BVN</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.profile.bvn}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Gender</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.profile.gender}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Marital Status</Typography>
                                    <Typography elementType='span'>Single</Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Children</Typography>
                                    <Typography elementType='span'>None</Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Type of Residence</Typography>
                                    <Typography elementType='span'>Parent's Apartment</Typography>
                                </DataBlock>
                            </DataSection>
                        </Section>

                        <Section>
                            <Typography elementType='h5'>Education and Employment</Typography>
                            <DataSection>
                                <DataBlock>
                                    <Typography elementType='span'>Level of Education</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.level}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Employment Status</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.employmentStatus}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Sector of Employment</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.sector}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Duration of Employment</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.duration}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Office Email</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.officeEmail}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Monthly Income</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.monthlyIncome}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Loan Repayment</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.education.loanRepayment}`}
                                    </Typography>
                                </DataBlock>
                            </DataSection>
                        </Section>

                        <Section>
                            <Typography elementType='h5'>Socials</Typography>
                            <DataSection>
                                <DataBlock>
                                    <Typography elementType='span'>Twitter</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.socials.twitter}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Facebook</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.socials.facebook}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Instagram</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.socials.instagram}`}
                                    </Typography>
                                </DataBlock>
                            </DataSection>
                        </Section>

                        <Section>
                            <Typography elementType='h5'>Guarantor</Typography>
                            <DataSection>
                                <DataBlock>
                                    <Typography elementType='span'>Full Name</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.guarantor.firstName} ${userDetails.guarantor.lastName}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Phone Number</Typography>
                                    <Typography elementType='span'>
                                        {`${userDetails.guarantor.phoneNumber}`}
                                    </Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Email Address</Typography>
                                    <Typography elementType='span'>debby@gmail.com</Typography>
                                </DataBlock>

                                <DataBlock>
                                    <Typography elementType='span'>Relationship</Typography>
                                    <Typography elementType='span'>Sister</Typography>
                                </DataBlock>
                            </DataSection>
                        </Section>
                    </StyledCard>
                </Fragment>
            )}
        </DefaultLayout>
    );
};

export default UserDetail;
