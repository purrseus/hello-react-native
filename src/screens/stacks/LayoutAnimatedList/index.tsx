import React from 'react';
import { View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';
import AddButton from './AddButton';
import useContainer from './container';
import useStyle from './styles';

const LayoutAnimatedList = () => {
  const { data, renderItem, keyExtractor, addItem } = useContainer();
  const { container } = useStyle();

  return (
    <View style={container}>
      <Animated.FlatList
        // @ts-ignore
        itemLayoutAnimation={Layout.delay(200)}
        {...{ data, renderItem, keyExtractor }}
      />
      <AddButton addItem={addItem} />
    </View>
  );
};

export default LayoutAnimatedList;
