import { TabRouteName, RouteName } from '@core/enums';
import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabsParamList = {
  [TabRouteName.Home]: undefined;
  [TabRouteName.Friends]: undefined;
  [TabRouteName.Notifications]: undefined;
  [TabRouteName.Menu]: undefined;
};

export type RootStackParamList = {
  [RouteName.Welcome]: undefined;
  [RouteName.BottomTabBar]: NavigatorScreenParams<BottomTabsParamList>;
  [RouteName.LayoutAnimatedList]: undefined;
};
