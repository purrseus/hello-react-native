import { LayoutAnimatedItem } from '@components';
import { RouteName } from '@core/enums';
import { useAppNavigation } from '@hooks';
import BottomTabBar from '@navigation/tab';
import React, { FC, useCallback } from 'react';
import { ListRenderItem } from 'react-native';
import { SlideInRight } from 'react-native-reanimated';
import * as StackScreens from '..';

const useContainer = () => {
  const { navigate } = useAppNavigation();
  const data = Object.entries({ ...StackScreens, BottomTabBar });

  const renderItem = useCallback<ListRenderItem<[string, FC]>>(
    ({ item: [name], index }) => (
      <LayoutAnimatedItem
        content={name}
        onPress={() => navigate(RouteName[name as RouteName])}
        entering={SlideInRight.delay(index * 100)}
      />
    ),
    [],
  );

  const keyExtractor = ([name]: [string, FC]) => name;

  return { data, renderItem, keyExtractor };
};

export default useContainer;
