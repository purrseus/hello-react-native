import { CommonState } from '@core/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { createPersistReducer } from '@utilities';

const initialState: CommonState = {
  loading: false,
};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    enableLoading: (state) => {
      state.loading = true;
    },
    disableLoading: (state) => {
      state.loading = false;
    },
  },
});

export const commonActions = common.actions;
export default createPersistReducer({ key: common.name }, common.reducer);
