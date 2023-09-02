import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  isAuthenticated: false,
};
const store = createStore(rootReducer, initialState);

export default store;
