import { createStore } from 'redux';

const initialState = {
    username: '',
    password: '',
  };

const SET_USERNAME = 'SET_USERNAME';
const SET_PASSWORD = 'SET_PASSWORD';

export function setUsername(username) {
    return { type: SET_USERNAME, payload: username };
  }
  
  export function setPassword(password) {
    return { type: SET_PASSWORD, payload: password };
  }

  function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return { ...state, username: action.payload };
      case SET_PASSWORD:
        return { ...state, password: action.payload };
      default:
        return state;
    }
  }

  const store = createStore(reducer);

export default store;
