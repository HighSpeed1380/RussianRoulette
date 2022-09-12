import { createSlice } from '@reduxjs/toolkit';
// import { STATES } from 'mongoose';
// utils
import api from '../../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: 'user',
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
    getUserName(state, action) {
        state.isLoading = false;
        state.posts = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;
// ----------------------------------------------------------------------

export function getUserName(){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading());
        try{
            const response = await api.get('/userinfo/getUserName');
            dispatch(slice.actions.getUserName(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

// ----------------------------------------------------------------------
