import styled, {css} from 'styled-components';
import React from 'react';
import {mount} from 'enzyme';
import 'jest-styled-components';

import {defaultTheme} from './defaultTheme';
import {ThemeProps, ThemeProvider} from './ThemeProvider';

const ThemeConsumer = styled.div<ThemeProps>`
  ${({ theme }) => css`
    color: ${theme.app.colors.blue.main};
  `}
`;

describe('ThemeProvider', () => {
  it('Provides the default theme', () => {
    const wrapper = mount(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(wrapper.find(ThemeConsumer)).toHaveStyleRule('color', defaultTheme.app.colors.blue.main);
  });
});
