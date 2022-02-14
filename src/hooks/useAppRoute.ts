import { RouteName } from '@core/enums';
import { RootStackParamList } from '@core/types';
import { RouteProp, useRoute } from '@react-navigation/native';

const useAppRoute = <R extends RouteName>() =>
  useRoute<RouteProp<RootStackParamList, R>>();

export default useAppRoute;
