import React, { createContext, useReducer } from 'react';
import api from '../utils/api';

// ----------------------------------------------------------------------

const initialState = {
  modalIsOpened: false,
  currentTab: 'security',
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
const AccountContext = createContext({
  ...initialState,
  openAccountModal: () => Promise.resolve(),
  closeAccountModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve(),
  getAllUserInfos: () => Promise.resolve(),
  getUserInfoById: () => Promise.resolve()
});

//  Provider
function AccountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openAccountModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeAccountModal = () => {
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

  const getAllUserInfos = () => {
    api.get('/userinfo/getAllUserInfo')
      .then(response => {
        console.log(response.data);
        dispatch({
          type: 'SET_USER_INFOS',
          payload: response.data
        });
      })
      .catch(error => {

      })
  }

  const getUserInfoById = (_id) => {
    api.get(`/userinfo/getUserInfoById/${_id}`)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: 'SET_USER_INFO',
          payload: response.data
        });
      })
      .catch(error => {

      })
  }

  return (
    <AccountContext.Provider
      value={{
        ...state,
        openAccountModal,
        closeAccountModal,
        handleCurrentTab,
        getAllUserInfos,
        getUserInfoById
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export { AccountContext, AccountProvider };