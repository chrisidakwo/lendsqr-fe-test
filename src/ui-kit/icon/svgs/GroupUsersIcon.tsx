import React, {FunctionComponent} from "react";

import IconProps from "../IconProps";
import {IconSVG} from "../IconSVG";
import colors from "../../theme/definitions/colors";

export const GroupUsersIcon: FunctionComponent<IconProps> = ({
    size,
    fillColor,
}): JSX.Element => (
    <IconSVG
        width={size?.width ?? '22'}
        height={size?.height ?? '18'}
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.40876 17.7755L4.40878 17.7753C4.2427 17.7637 4.10507 17.6935 4.01017 17.5773C3.93547 17.4858 3.89111 17.3707 3.87616 17.243H3.86763V17.143C3.86763 15.8381 4.2137 14.6162 4.81335 13.5614H1.43539C1.26471 13.5614 1.11848 13.4984 1.01507 13.3838C0.912837 13.2704 0.85955 13.1146 0.856345 12.9395M4.40876 17.7755L0.956323 12.9373M4.40876 17.7755L4.41574 17.7755L17.5545 17.7784C17.8752 17.7784 18.1335 17.5188 18.1335 17.1993C18.1335 15.9325 17.7596 14.6106 17.1652 13.5615L20.5639 13.5606C20.8846 13.5606 21.143 13.301 21.143 12.9815L21.143 12.9803C21.1124 10.5787 19.7611 8.54781 17.642 7.67851C18.786 6.95121 19.5184 5.67431 19.5184 4.25897C19.5184 0.796036 15.468 -1.03867 12.9041 1.20528C11.6926 0.706119 10.3069 0.706116 9.09542 1.20528C8.3769 0.576855 7.45379 0.222467 6.48189 0.222467C2.45243 0.222467 0.995241 5.57355 4.35675 7.68005M4.40876 17.7755L4.58344 7.69863C4.54585 7.67739 4.50882 7.65576 4.47235 7.63375C4.43362 7.64875 4.39508 7.66418 4.35675 7.68005M0.856345 12.9395C0.856343 12.9394 0.856341 12.9393 0.856339 12.9391L0.956323 12.9373M0.856345 12.9395C0.856348 12.9396 0.856351 12.9397 0.856353 12.9398L0.956323 12.9373M0.856345 12.9395C0.80084 10.6744 2.27898 8.54032 4.35675 7.68005M0.956323 12.9373C0.901131 10.691 2.38568 8.57118 4.46325 7.74475C4.42723 7.72354 4.39173 7.70197 4.35675 7.68005M4.98763 13.4614H4.87125L4.92864 13.5614C4.94804 13.5279 4.96771 13.4946 4.98763 13.4614ZM17.5289 2.2208L17.529 2.22083C19.2108 3.91955 18.1948 6.83041 15.877 7.11796C16.3723 5.11422 15.6089 3.03533 13.9941 1.82705C15.1109 1.10957 16.5822 1.26358 17.5289 2.2208ZM6.12476 7.11767C4.71237 6.93785 3.64026 5.71877 3.64026 4.2608C3.64026 1.96075 6.14996 0.626447 8.00796 1.82696C6.39303 3.03507 5.62969 5.11381 6.12476 7.11767ZM14.4988 7.53981C13.1179 10.541 8.88195 10.5437 7.50112 7.53988C6.27847 4.87711 8.24229 1.98947 10.989 1.98904C13.9024 2.02526 15.6822 4.96716 14.4988 7.53981ZM2.0459 12.4043C2.31215 10.0953 4.28099 8.34345 6.6465 8.41985C7.11463 9.23527 7.80133 9.91068 8.63053 10.3566C7.46485 10.7713 6.43557 11.482 5.63465 12.4042L2.0459 12.4043ZM16.3445 12.4042C15.5465 11.4875 14.5226 10.7755 13.3622 10.3621C14.1946 9.91413 14.8858 9.2383 15.356 8.4198C17.7215 8.34338 19.6905 10.0943 19.9566 12.4042H16.3445ZM5.04793 16.6202C5.16912 15.1942 5.80652 13.8488 6.77177 12.8727C10.381 9.22483 16.5119 11.5852 16.9316 16.6202H5.04793Z"
            fill={fillColor ?? colors.blue.dark}
            stroke={fillColor ?? colors.blue.dark}
            strokeWidth="0.2"
        />
        <path
            d="M12.2471 6.79774L12.2395 6.81237C11.7073 7.81758 10.2757 7.81072 9.75087 6.79791C9.6665 6.6342 9.53676 6.53764 9.39242 6.50168C9.25055 6.46634 9.10191 6.49121 8.97735 6.55535C8.8528 6.61949 8.7462 6.72605 8.69256 6.86213C8.63799 7.00061 8.64128 7.16245 8.72562 7.32643L8.72568 7.32656C9.68163 9.17903 12.32 9.17911 13.275 7.32652C13.3596 7.16254 13.3631 7.00062 13.3085 6.86202C13.2548 6.72582 13.1481 6.61917 13.0233 6.55498C12.8985 6.49079 12.7495 6.46592 12.6073 6.50127C12.4625 6.53724 12.3322 6.63383 12.2471 6.79774ZM13.1861 7.2807C12.2683 9.06102 9.73326 9.06102 8.81455 7.2807L12.4019 6.74383C12.7353 6.3458 13.4544 6.7607 13.1861 7.2807Z"
            fill={fillColor ?? colors.blue.dark}
            stroke={fillColor ?? colors.blue.dark}
            strokeWidth="0.2"
        />
    </IconSVG>
);
