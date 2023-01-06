import {FC} from "react";

import IconProps from "../../ui-kit/icon/IconProps";

export interface MenuItem {
    label: string;
    icon: FC<IconProps>;
    url?: string;
}
