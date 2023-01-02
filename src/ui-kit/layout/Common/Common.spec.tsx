import React from 'react';
import TestRenderer from 'react-test-renderer';

import {COLOR_DARK_BLUE, COLOR_GREY_BACKGROUND} from '../../theme';
import {ContentContainer} from './ContentContainer';

describe('UI Kit/Layout', () => {
  describe('ContentContainer', () => {
    it('has the default style', () => {
      const renderer = TestRenderer.create(
          <ContentContainer>
            <p>Some content in the container</p>
          </ContentContainer>,
      ).toJSON();
      expect(renderer).toHaveStyleRule('background-color', COLOR_GREY_BACKGROUND);
    });

    it('has the overridden background color', () => {
      const renderer = TestRenderer.create(
          <ContentContainer backgroundColor={'hotpink'}>
            <p>Some content in the container</p>
          </ContentContainer>,
      ).toJSON();
      expect(renderer).toHaveStyleRule('background-color', 'hotpink');
    });

    it('should contain a border bottom style', () => {
      const renderer = TestRenderer.create(
          <ContentContainer backgroundColor={'white'} borderBottom>
            <p>Lorem ipsum</p>
          </ContentContainer>,
      ).toJSON();

      expect(renderer).toHaveStyleRule('border-bottom', `1px solid ${COLOR_DARK_BLUE}`);
    });

    it('should not have a padding bottom style', () => {
      const renderer = TestRenderer.create(
          <ContentContainer backgroundColor={'white'} paddingBottom={false}>
            <p>Lorem ipsum</p>
          </ContentContainer>,
      ).toJSON();

      expect(renderer).not.toHaveStyleRule('padding-bottom', '80px');
    });

    it('should have a padding bottom style', () => {
      const renderer = TestRenderer.create(
          <ContentContainer backgroundColor={'white'}>
            <p>Lorem ipsum</p>
          </ContentContainer>,
      ).toJSON();

      expect(renderer).toHaveStyleRule('padding-bottom', '80px');
    });
  });
});
