import React, { createContext, useReducer } from 'react';
import api from '../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  modalIsOpened: false,
  userInfos: [],
  userInfo: null
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
  },
  SET_USER_INFOS: (state, action) => {
    return {
      ...state,
      userInfos: action.payload
    }
  },
  SET_USER_INFO: (state, action) => {
    return {
      ...state,
      userInfo: action.payload
    }
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const FairnessContext = createContext({
  ...initialState,
  openFairnessModal: () => Promise.resolve(),
  closeFairnessModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve(),
  getAllUserInfos: () => Promise.resolve(),
  getUserInfoById: () => Promise.resolve()
});

//  Provider
function FairnessProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openFairnessModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeFairnessModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <FairnessContext.Provider
      value={{
        ...state,
        openFairnessModal,
        closeFairnessModal,
      }}
    >
      {children}
    </FairnessContext.Provider>
  );
}

export { FairnessContext, FairnessProvider };