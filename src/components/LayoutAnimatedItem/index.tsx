import { LayoutAnimatedItemProps } from '@core/interfaces';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import useStyle from './styles';

const LayoutAnimatedItem: FC<LayoutAnimatedItemProps> = ({
  content,
  onPress,
  disabled = false,
  style,
  textStyle,
  animatedStyle,
  ...props
}) => {
  const styles = useStyle();

  return (
    <Animated.View {...props} style={animatedStyle}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.container, style]}
      >
        <Text style={[styles.content, textStyle]}>{content}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LayoutAnimatedItem;
