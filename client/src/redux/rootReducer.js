import { combineReducers } from 'redux';
// slices
import gameReducer from './slices/game';
import userReducer from './slices/user';
import stakingReducer from './slices/staking';
import tipReducer from './slices/tip';
import getAddressReducer from './slices/getAddress';
import generateMultiplierReducer from './slices/generateMultiplier';

// ----------------------------------------------------------------------



const rootReducer = combineReducers({
    game: gameReducer,
    user: userReducer,
    staking: stakingReducer,
    tip: tipReducer,
    getAddress: getAddressReducer,
    generateMultiplier: generateMultiplierReducer,
});

export { rootReducer };
