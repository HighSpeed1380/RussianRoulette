import React, { createContext, useEffect, useReducer } from 'react';
import api from '../utils/api';
// ----------------------------------------------------------------------

const initialState = {
  modalIsOpened: false,
  currentUser: null,
  token: ''
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
  SET_CURRENT_USER: (state, action) => {
    console.log(action.payload);
    return {
      ...state,
      currentUser: action.payload
    };
  },
  SET_TOKEN: (state, action) => {
    return {
      ...state,
      token: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const AuthContext = createContext({
  ...initialState,
  openAuthModal: () => Promise.resolve(),
  closeAuthModal: () => Promise.resolve(),
  handleCurrentTab: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  signin: () => Promise.resolve(),
  signout: () => Promise.resolve()
});

//  Provider
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let userInfo = localStorage.getItem('userinfo');
    if (userInfo) {
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: JSON.parse(userInfo).currentUser
      });
      dispatch({
        type: 'SET_TOKEN',
        payload: JSON.parse(userInfo).token
      });
    } else {
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: null
      });
      dispatch({
        type: 'SET_TOKEN',
        payload: ''
      });
    }
  }, []);

  const openAuthModal = (tabName) => {
    dispatch({
      type: 'SET_CURRENT_TAB',
      payload: tabName
    });
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeAuthModal = () => {
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

  //  Sign up
  const signup = (newUserData) => {
    console.log(newUserData);
    api.post('/userinfo/signup', newUserData)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('userinfo', JSON.stringify(response.data));
        dispatch({
          type: 'SET_CURRENT_USER',
          payload: response.data.currentUser
        });
        dispatch({
          type: 'SET_TOKEN',
          payload: response.data.token
        });
        dispatch({
          type: 'SET_MODAL_IS_OPENED',
          payload: false
        });
        alert('Done!');
      })
      .catch(error => {
        localStorage.removeItem('userinfo');
        dispatch({
          type: 'SET_CURRENT_USER',
          payload: null
        });
        dispatch({
          type: 'SET_TOKEN',
          payload: ''
        });
        dispatch({
          type: 'SET_MODAL_IS_OPENED',
          payload: false
        });
        alert(error.response?.data?.errors[0]?.message);
      });
  };

  //  Sign in
  const signin = (userdata) => {
    console.log("sign in =======", userdata);
    api.post('/userinfo/signin', userdata)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('userinfo', JSON.stringify(response.data));
        dispatch({
          type: 'SET_CURRENT_USER',
          payload: response.data.currentUser
        });
        dispatch({
          type: 'SET_TOKEN',
          payload: response.data.token
        });
        dispatch({
          type: 'SET_MODAL_IS_OPENED',
          payload: false
        }); 
        alert('Done!');
      })
      .catch(error => {
        console.log(error.response);
        localStorage.removeItem('userinfo');
        dispatch({
          type: 'SET_CURRENT_USER',
          payload: null
        });
        dispatch({
          type: 'SET_TOKEN',
          payload: ''
        });
        dispatch({
          type: 'SET_MODAL_IS_OPENED',
          payload: false
        });
        alert(error.response?.data?.errors[0]?.message);
      });
  };

  //  Sign out
  const signout = () => {
    localStorage.removeItem('userinfo');
    dispatch({
      type: 'SET_CURRENT_USER',
      payload: null
    });
    dispatch({
      type: 'SET_TOKEN',
      payload: ''
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        openAuthModal,
        closeAuthModal,
        handleCurrentTab,
        signup,
        signin,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };