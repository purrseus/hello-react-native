import { TabRouteName } from '@core/enums';
import { BottomTabsParamList } from '@core/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as TabScreen from '@screens/tabs';
import React, { FC } from 'react';
import useContainer from './container';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabBar: FC = () => {
  const { screenOptions } = useContainer();

  return (
    <Tab.Navigator
      initialRouteName={TabRouteName.Home}
      screenOptions={screenOptions}
    >
      {Object.entries(TabScreen).map(([name, Screen]) => (
        <Tab.Screen key={name} name={name as TabRouteName} component={Screen} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabBar;
