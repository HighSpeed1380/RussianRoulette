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
const UserStatsContext = createContext({
  ...initialState,
  openUserStatsModal: () => Promise.resolve(),
  closeUserStatsModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve()
});

//  Provider
function UserStatsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openUserStatsModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeUserStatsModal = () => {
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
    <UserStatsContext.Provider
      value={{
        ...state,
        openUserStatsModal,
        closeUserStatsModal,
        handleCurrentTab,
      }}
    >
      {children}
    </UserStatsContext.Provider>
  );
}

export { UserStatsContext, UserStatsProvider };