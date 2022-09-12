import { createSlice } from "@reduxjs/toolkit";
// utils
import api from "../../utils/api";
import axios from "axios";
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  multipliers: [],
  multiplier: null,
  generateMultiplier: [],
  nonce: 0,
};

const slice = createSlice({
  name: "generateMultiplier",
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
    getGenerateMultiplier(state, action) {
      state.isLoading = false;
      state.generateMultiplier = action.payload;
    },
    getRandomNumber(state, action) {
      state.isLoading = false;
      state.multipliers = action.payload;
    },

    getResult(state, action) {
      state.isLoading = false;
      state.multiplier = action.payload;
    },

    setNonce(state, action) {
      state.isLoading = false;
      state.nonce = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

export function generateMultiplier(
  wagered,
  payout,
  username,
  game,
  type,
  _id,
  nonce
) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      console.log("nonce============>", nonce);
      const response = await axios.get("https://blockchain.info/latestblock");
      const clientSeed = response.data.hash;
      const res = await api.post("/gameInfo/generatorRandomNumber", {
        wagered,
        payout,
        username,
        game,
        type,
        clientSeed,
        nonce,
      });
      dispatch(slice.actions.getRandomNumber(res.data.randomNumber));
      dispatch(slice.actions.getResult(res.data.result));
      dispatch(slice.actions.getGenerateMultiplier(response.hash));
      dispatch(slice.actions.setNonce(nonce + 1));
    } catch (error) {
      console.log("# generate Multiplier Error => ", error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
