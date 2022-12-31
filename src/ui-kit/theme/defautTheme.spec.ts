import { defaultTheme } from './defaultTheme';
import appTheme from './themes/appTheme';
import muiTheme from './themes/muiTheme';

describe('UI Kit/Theme/defaultTheme', () => {
  it('Merges MUI & app themes without conflicts / overriding properties', () => {
    expect(defaultTheme.app).toMatchObject(appTheme);
    expect(defaultTheme).toMatchObject(muiTheme);
  });
});
