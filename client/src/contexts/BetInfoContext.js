import React, { createContext, useReducer } from 'react';
import { useContext } from 'react';
import { GameInfoContext } from './GameInfoContext';

const initialState = {
  modalIsOpened: false,
  currentTab: 'security',
};

const handlers = {
  SET_MODAL_IS_OPENED: (state, action) => {
    return {
      ...state,
      modalIsOpened: action.payload
    };
  },
  SET_CURRENT_TAB: (state, action) => {
    return {
      ...state,
      currentTab: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const BetInfoContext = createContext({
  ...initialState,
  openBetInfoModal: () => Promise.resolve(),
  closeBetInfoModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve()
});

//  Provider
function BetInfoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { closeGameInfoModal } = useContext(GameInfoContext);

  const openBetInfoModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
    // closeGameInfoModal();
  };

  const closeBetInfoModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  const handleCurrentTab = (tabName) => {
    dispatch({
      type: 'SET_CURRENT_TAB',
      payload: tabName
    });
  };

  return (
    <BetInfoContext.Provider
      value={{
        ...state,
        openBetInfoModal,
        closeBetInfoModal,
        handleCurrentTab,
      }}
    >
      {children}
    </BetInfoContext.Provider>
  );
}

export { BetInfoContext, BetInfoProvider };