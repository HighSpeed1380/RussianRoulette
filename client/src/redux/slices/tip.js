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
    name: 'tip',
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

export function addTip(username, type, value, receiveUsername, _id, balance) {
    return async (dispatch) => {
        dispatch(slice.actions.startLoading());
        try {
            let receiving_balance = balance;
            balance = balance - value;
            let received = 0;
            let receive_value = 0;
            const res = await api.post('/transactionInfo/insertTransactionInfo', { username, value, received, type });
            username = receiveUsername;
            received = value;
            value = receive_value;
            const res1 = await api.post('/transactionInfo/insertTransactionInfo', { username, value, received, type });
            const response = await api.put(`/userInfo/updateUserInfoById/${_id}`, { balance });
            balance = receiving_balance + received;
            const updatedResult = await api.put('/userInfo/updateUserInfoOne', { receiveUsername, balance });
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            console.log(error);
        }
    };
}

// ----------------------------------------------------------------------
