import { RouteName } from '@core/enums';
import { RootStackParamList } from '@core/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const useAppNavigation = <R extends RouteName>() =>
  useNavigation<NavigationProp<RootStackParamList, R>>();

export default useAppNavigation;
