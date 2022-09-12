import React, { createContext, useReducer } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  modalIsOpened: false,
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
const BetListContext = createContext({
  ...initialState,
  openBetListModal: () => Promise.resolve(),
  closeBetListModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve()
});

//  Provider
function BetListProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openBetListModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeBetListModal = () => {
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
    <BetListContext.Provider
      value={{
        ...state,
        openBetListModal,
        closeBetListModal,
        handleCurrentTab,
      }}
    >
      {children}
    </BetListContext.Provider>
  );
}

export { BetListContext, BetListProvider };