import React, { FC } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import useContainer from './container';
import useStyles from './styles';

const Welcome: FC = () => {
  const { data, renderItem, keyExtractor } = useContainer();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Animated.FlatList
        {...{ data, renderItem, keyExtractor }}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Welcome;
