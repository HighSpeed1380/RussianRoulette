import React, { createContext, useReducer } from 'react';

// ----------------------------------------------------------------------

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
const GameInfoContext = createContext({
  ...initialState,
  openGameInfoModal: () => Promise.resolve(),
  closeGameInfoModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve()
});

//  Provider
function GameInfoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openGameInfoModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeGameInfoModal = () => {
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
    <GameInfoContext.Provider
      value={{
        ...state,
        openGameInfoModal,
        closeGameInfoModal,
        handleCurrentTab,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}

export { GameInfoContext, GameInfoProvider };