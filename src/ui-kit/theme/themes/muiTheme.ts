import { createTheme } from '@mui/material/styles';

import colors from '../definitions/colors';
import { fontFamilies } from '../definitions/typography';

const muiTheme = createTheme({
  palette: {
    error: {
      main: colors.red.daisy,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: fontFamilies.join(','),
  },
});

export default muiTheme;
