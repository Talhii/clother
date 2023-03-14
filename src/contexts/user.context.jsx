import { createContext, useState, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state, action) => {
  const {type, payload} = action;

  switch(type){
    case 'SET_CURRENT_USER':
      return {
        ...state,
        ...payload
      }
    default:
      throw new Error(`Unhandled ${type}`)
  }
}


export const UserProvider = ({ children }) => {

  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const setCurrentUser = (user) => {
    const payload = {
      currentUser: user
    }

    dispatch({type: 'SET_CURRENT_USER', payload: payload})
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
