import { RootState } from '@core/types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
