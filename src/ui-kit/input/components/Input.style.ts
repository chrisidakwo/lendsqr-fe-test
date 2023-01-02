import {ReactNode} from 'react';

import {ThemeProps} from '../../theme';

export interface InputProps
{
    error?: boolean;
    icon?: ReactNode;
    iconRight?: ReactNode;
}

export const getCommon = ({theme}: ThemeProps): string => `
  width: 100%;
  line-height: 24px;
  font-size: 16px;
  font-weight: ${theme.app.typography.fontWeight.normal.toString()};
  color: ${theme.app.colors.grey.main};
  background: #ffffff;
  background-clip: padding-box;
  padding: 12px;
  border-radius: ${theme.app.borderRadius.small};
  border: 2px solid rgba(84, 95, 125, 0.15);
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  outline: none !important;
`;

export const getIconContainer = (): string => `
  position: absolute;
  left: 25px;
  top: 30px;
`;
