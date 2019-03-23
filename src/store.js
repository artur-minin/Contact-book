import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import reducer from './reducers';

// Logs the type of action
const logMiddleware = (store) => (next) => (action) => {
  console.log(action.type, store.getState())
  return next(action)
};

const store = createStore(reducer, applyMiddleware(ThunkMiddleware, logMiddleware));

export default store;