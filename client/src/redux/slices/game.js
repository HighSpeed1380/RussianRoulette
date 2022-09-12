// import { getGridSingleSelectQuickFilterFn } from '@mui/x-data-grid';
import { createSlice } from '@reduxjs/toolkit';
// utils
import api from '../../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  multipliers: [],
  multiplier: null,
  balance: 0,
  gameInfo: [{"_id":"62a8386fc9d0f53cfc658141","date":"","game":"group","game_id":1,"payout":27.34,"players":102,"result":75,"type":"base","username":"master","wagered":300}],
};

const slice = createSlice({
  name: 'game',
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

    getRandomNumber(state, action) {
      state.isLoading = false;
      state.multipliers = action.payload;
    },

    getResult(state, action) {
      state.isLoading = false;
      state.multiplier = action.payload;
    },

    getBalance(state, action) {
      state.isLoading = false;
      state.balance = action.payload;
    },

    getGameInfomation(state, action) {
      state.isLoading = false;
      state.gameInfo = action.payload;
    },
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

export function addNewGame(wagered, payout, username, game, type, _id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      // const response = await api.post('/gameInfo/insertGameInfo', { wagered, payout, username, game, type });
      const response = await api.post('/gameInfo/generatorRandomNumber', { wagered, payout, username, game, type });
      dispatch(slice.actions.getRandomNumber(response.data.randomNumber));
      dispatch(slice.actions.getResult(response.data.result));
      const res = await api.get(`/userInfo/getUserInfoById/${_id}`);
      let balance = res.data.balance;
      if (response.data.result < Number(payout)) {
        balance = balance - Number(wagered);
      } else {
        balance = balance + (Number(wagered) * Number(payout));
      }
      await api.put(`/userInfo/updateUserInfoById/${_id}`, { balance });
      setTimeout(() => {
        dispatch(slice.actions.getBalance(balance));
        const oldUserInfo = JSON.parse(localStorage.getItem('userinfo'));
        const newUserInfo = { ...oldUserInfo, balance };
        localStorage.setItem('userinfo', JSON.stringify(newUserInfo));
      }, 5500)
    } catch (error) {
      console.log('# error => ', error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getGameInfo() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try{
      const response = await api.get('/gameInfo/getAllGameInfo');
      dispatch(slice.actions.getGameInfomation(response.data));
    } catch(error) {
      console.log("get All Game Info Error => " ,error);
      dispatch(slice.actions.hasError(error));
    }
  }
}
