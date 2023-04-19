/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { sizeScale } from '@/Common/Scale';

/**
 * Colors
 */
export const Colors = {
  background: 'rgb(242, 242, 242)',
  purple1: '#8E6CA0',
  green1: '#e2f2e2',
  green2: '#76bb71',
  green3: '#ADE792',
  green4: '#558b6e',
  green5: '#72caaf',
  green6: '#94e590',
  orange1: '#de887e',
  yellow1: '#F3ECB0',
  blue1: '#344D67',
  white: '#ffffff',
  black: '#000000',
  text: '#212529',
  primary: '#72caaf',
  success: '#28a745',
  error: '#dc3545',
  disable: '#e0e0e0',
  placeHolder: '#f5f5f5',
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
};

export const NavigationColors = {
  primary: Colors.primary,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  MetricsSizes,
};
