import store from '@store';
import { TypedUseSelectorHook } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SelectorCallback = (
  state: RootState,
) => ReturnType<TypedUseSelectorHook<RootState>>;
