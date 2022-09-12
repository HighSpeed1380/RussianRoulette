// import { getGridSingleSelectQuickFilterFn } from '@mui/x-data-grid';
import { createSlice } from '@reduxjs/toolkit';
// utils
import api from '../../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: 'staking',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

export function addStaking(username, value, received, type, _id, balance) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      balance = balance - Number(value);
      const response = await api.put(`/userInfo/updateUserInfoById/${_id}`, { balance });
      const res = await api.post('/transactionInfo/insertTransactionInfo', { username, value, received, type });
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      console.log(error);
    }
  };
}

// ----------------------------------------------------------------------
