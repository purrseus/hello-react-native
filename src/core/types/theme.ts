import { CallbackStyleParam } from '@core/interfaces';
import { StyleSheet } from 'react-native';

export type CallbackStyles<T> = (
  param: CallbackStyleParam,
) => T | StyleSheet.NamedStyles<T>;
