import {MouseEvent} from "react";

export default interface IconProps {
  backgroundFill?: string;
  fillColor?: string;
  fillOpacity?: string;
  onClick?: (event: MouseEvent) => void;
  cursor?: string;
  size?: {
    height: number | string;
    width: number | string;
  };
}
