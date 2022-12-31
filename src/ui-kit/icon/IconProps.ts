export default interface IconProps {
  backgroundFill?: string;
  fillColor?: string;
  fillOpacity?: string;
  onClick?: () => void;
  cursor?: string;
  size?: {
    height: number | string;
    width: number | string;
  };
}
