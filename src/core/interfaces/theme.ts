import { commonColors, lightTheme, darkTheme } from '@theme/colors';
import sizes from '@theme/sizes';
import globalStyles from '@theme/styles';
import { ScaledSize } from 'react-native';

export interface CallbackStyleParam {
  globalStyles: typeof globalStyles;
  sizes: typeof sizes;
  colors: typeof commonColors & typeof lightTheme & typeof darkTheme;
  dimensions: ScaledSize;
}
