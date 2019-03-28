import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(ThunkMiddleware));

export default store;