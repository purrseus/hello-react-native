import { RouteName } from '@core/enums';
import { RootStackParamList } from '@core/types';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as StackScreens from '@screens/stacks';
import React, { FC } from 'react';
import BottomTabBar from './tab';
import useContainer from './container';

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  const { screenOptions } = useContainer();

  return (
    <Stack.Navigator
      initialRouteName={RouteName.Welcome}
      screenOptions={screenOptions}
    >
      {Object.entries({ ...StackScreens, BottomTabBar }).map(
        ([name, Screen]) => (
          <Stack.Screen
            key={name}
            name={name as RouteName}
            component={Screen}
          />
        ),
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
