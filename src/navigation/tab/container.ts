import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const useContainer = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
  };

  return { screenOptions };
};

export default useContainer;
