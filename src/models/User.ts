export interface User {
    id: string;
    email: string;
    userName: string;
    phoneNumber: string;
    orgName: string;
    accountBalance: string;
    accountNumber: string;
    profile: UserProfile;
    guarantor: UserGuarantor;
    education: UserEducation;
    socials: Socials;
    createdAt: string;
    lastActiveDate: string;
}

interface UserProfile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
}

interface UserGuarantor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
}

interface UserEducation {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
}

interface Socials {
    facebook: string;
    instagram: string;
    twitter: string;
}
