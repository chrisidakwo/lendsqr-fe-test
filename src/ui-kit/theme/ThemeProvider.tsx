import React, {ReactNode} from 'react';
import {ThemeProvider as BaseThemeProvider} from 'styled-components';

import appTheme from './themes/appTheme';
import {defaultTheme} from "./defaultTheme";

export interface ThemeInterface {
  app: typeof appTheme;
}

export interface ThemeProps {
  theme: ThemeInterface;
}

export interface ThemeProviderProps {
  theme?: ThemeInterface;
  children?: ReactNode;
}

export const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps): JSX.Element => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
