import {MenuItem} from "../types";
import {
    BankIcon,
    BriefcaseIcon,
    ClipboardIcon,
    CoinsIcon,
    EqualizerIcon,
    ExchangeIcon,
    GalaxyIcon,
    GraphIcon,
    GroupUsersIcon,
    HandshakeIcon,
    MoneyBagIcon,
    MoneyHandIcon,
    PercentBadgeIcon,
    PiggyBankIcon,
    ScrollPaperIcon,
    UserCheckIcon,
    UsersIcon,
    UserTimesIcon
} from "../../../ui-kit/icon";

export const menuItems: Record<string, MenuItem[]> = {
    customers: [
        {
            label: 'Users',
            url: '/users',
            icon: UsersIcon,
        },
        {
            label: 'Guarantors',
            icon: GroupUsersIcon,
        },
        {
            label: 'Loans',
            icon: MoneyBagIcon,
        },
        {
            label: 'Decision Models',
            icon: HandshakeIcon,
        },
        {
            label: 'Savings',
            icon: PiggyBankIcon,
        },
        {
            label: 'Loan Requests',
            icon: MoneyHandIcon,
        },
        {
            label: 'Whitelist',
            icon: UserCheckIcon,
        },
        {
            label: 'Karma',
            icon: UserTimesIcon,
        }
    ],
    businesses: [
        {
            label: 'Organization',
            icon: BriefcaseIcon
        },
        {
            label: 'Loan Products',
            icon: MoneyHandIcon,
        },
        {
            label: 'Savings Products',
            icon: BankIcon,
        },
        {
            label: 'Fees and Charges',
            icon: CoinsIcon,
        },
        {
            label: 'Transactions',
            icon: ExchangeIcon,
        },
        {
            label: 'Services',
            icon: GalaxyIcon,
        },
        {
            label: 'Settlements',
            icon: ScrollPaperIcon,
        },
        {
            label: 'Reports',
            icon: GraphIcon,
        }
    ],
    settings: [
        {
            label: 'Preferences',
            icon: EqualizerIcon,
        },
        {
            label: 'Fees and Pricing',
            icon: PercentBadgeIcon,
        },
        {
            label: 'Audit Logs',
            icon: ClipboardIcon,
        }
    ]
};
