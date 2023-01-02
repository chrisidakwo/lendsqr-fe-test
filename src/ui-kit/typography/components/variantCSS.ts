import {css} from "styled-components";

import colors from "../../theme/definitions/colors";
import {BREAKPOINT_SCREEN_XS_MAX} from "../../theme";

export const defaultStyles = css`
  color: ${colors.blue.main};
  font-size: 1rem;
  line-height: 1.75rem;
`;

export const subscriptStyles = css`
  color: ${colors.grey.main};
  font-size: 0.85rem;
  line-height: 1.5rem;
`;

export const body2Styles = css`
  color: ${colors.grey.main};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const body1Styles = css`
  ${defaultStyles} @media only screen and(max-width: ${BREAKPOINT_SCREEN_XS_MAX}px) {
  ${subscriptStyles}
}
`;

export const h6Styles = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const h5Styles = css`
  font-size: 1.25rem;
  line-height: 2rem;
`;

export const h4Styles = css`
  color: ${colors.blue.main};
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 2rem;
`;

export const h3Styles = css`
  color: ${colors.blue.main};
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.5rem;
`;

export const h2Styles = css`
  color: ${colors.blue.main};
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
`;

export const h1Styles = css`
  color: ${colors.blue.main};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3rem;
`;
