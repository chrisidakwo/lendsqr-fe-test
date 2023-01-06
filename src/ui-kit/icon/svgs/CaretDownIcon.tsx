import {FunctionComponent} from "react";

import IconProps from "../IconProps";
import {IconSVG} from "../IconSVG";
import colors from "../../theme/definitions/colors";

export const CaretDownIcon: FunctionComponent<IconProps> = ({
                                                                size,
                                                                fillColor
                                                            }): JSX.Element => (
    <IconSVG
        width={size?.width ?? '12'}
        height={size?.height ?? '8'}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.0573 0.993798C10.8984 0.152706 12.1595 1.45646 11.3184 2.25489L6.56759 7.00565C6.23127 7.38408 5.64282 7.38408 5.3065 7.00565L0.640016 2.38131C-0.158964 1.54022 1.10267 0.27907 1.94322 1.12022L5.937 5.114L10.0573 0.993798Z"
            fill={fillColor ?? colors.blue.main}
        />
    </IconSVG>
);
