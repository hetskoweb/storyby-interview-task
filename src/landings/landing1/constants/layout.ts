import { BREAKPOINTS } from './breakpoints';
import { THRESHOLDS } from './thresholds';

export const getThreshold = (width: number) => {
  if (width >= BREAKPOINTS.desktop) {
    return THRESHOLDS.desktop;
  }
  if (width >= BREAKPOINTS.tablet) {
    return THRESHOLDS.tablet;
  }

  return THRESHOLDS.mobile;
};
