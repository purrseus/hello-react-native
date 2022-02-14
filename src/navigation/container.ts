import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const useContainer = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
  };

  return { screenOptions };
};

export default useContainer;
