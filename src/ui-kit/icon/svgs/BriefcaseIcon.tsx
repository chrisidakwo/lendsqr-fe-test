import {FunctionComponent} from "react";

import IconProps from "../IconProps";
import {IconSVG} from "../IconSVG";
import colors from "../../theme/definitions/colors";

export const BriefcaseIcon: FunctionComponent<IconProps> = ({
    size,
    fillColor
}): JSX.Element => (
    <IconSVG
        width={size?.width ?? '16'}
        height={size?.height ?? '16'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            opacity="0.4"
            d="M10 9H16V13.5C16 14.3 15.3 15 14.5 15H1.5C0.7 15 0 14.3 0 13.5V9H6V10.5C6 10.6326 6.05268 10.7598 6.14645 10.8536C6.24021 10.9473 6.36739 11 6.5 11H9.5C9.63261 11 9.75979 10.9473 9.85355 10.8536C9.94732 10.7598 10 10.6326 10 10.5V9Z"
            fill={fillColor ?? colors.blue.dark}
        />
        <path
            d="M14.5 3H12V1.5C12 0.7 11.3 0 10.5 0H5.5C4.7 0 4 0.7 4 1.5V3H1.5C0.7 3 0 3.7 0 4.5V7H16V4.5C16 3.7 15.3 3 14.5 3ZM10 3H6V2H10V3Z"
            fill={fillColor ?? colors.blue.dark}
        />
    </IconSVG>
);
