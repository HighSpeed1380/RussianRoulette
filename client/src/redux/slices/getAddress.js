import { createSlice } from '@reduxjs/toolkit';
// utils
import api from '../../utils/api';
// ----------------------------------------------------------------------

const initialState = {
    isLoading: false,
    error: false,
    generatedAddress: '',
};

const slice = createSlice({
    name: 'getAddress',
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
        getGeneratedAddress(state, action) {
            state.isLoading = false;
            state.generatedAddress = action.payload;
        },

    }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

export function getAddress() {
    
    return async (dispatch) => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await api.get('/userinfo/getGeneratedAddress');
            console.log("generated address:", response.data.data.item.address);
            dispatch(slice.actions.getGeneratedAddress(response.data.data.item.address));
        } catch (error) {
            console.log('# get Address Error => ', error);
            dispatch(slice.actions.hasError(error));
        }
    };
}

// ----------------------------------------------------------------------

