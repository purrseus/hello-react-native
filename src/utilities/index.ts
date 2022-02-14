import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const createPersistReducer = <S>(
  config: Partial<PersistConfig<S>> & Pick<PersistConfig<S>, 'key'>,
  reducer: Reducer<S>,
) => {
  const persistConfig: PersistConfig<S> = {
    version: 1,
    debug: __DEV__,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    ...config,
  };

  return persistReducer(persistConfig, reducer);
};

export const generateRandomColor = () =>
  `#${Math.random().toString(16).slice(-6)}`;
