import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

export interface LayoutAnimatedItemProps
  extends Animated.AnimateProps<ViewProps> {
  content: string;
  onPress: () => void;
  disabled?: boolean;
  animatedStyle?: Animated.AnimateStyle<StyleProp<ViewStyle>>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
