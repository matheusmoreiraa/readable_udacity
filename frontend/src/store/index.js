import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//CREATING STORE TO MANIPULATE THE STATE WITH REDUX
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
