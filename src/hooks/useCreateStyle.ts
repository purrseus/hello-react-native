import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import globalStyles from '@theme/styles';
import sizes from '@theme/sizes';
import { commonColors, lightTheme, darkTheme } from '@theme/colors';
import { CallbackStyles } from '@core/types';

const useCreateStyle = <T>(callbackStyle: CallbackStyles<T>): T => {
  const dimensions = useWindowDimensions();
  const colorScheme = useColorScheme();
  const colors = {
    ...commonColors,
    ...(colorScheme === 'dark' ? darkTheme : lightTheme),
  };

  return StyleSheet.create(
    callbackStyle({ globalStyles, sizes, colors, dimensions }),
  );
};

export default useCreateStyle;
