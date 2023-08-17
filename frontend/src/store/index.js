import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from "./session";
import storesReducer from "./stores";
import dishesReducer from "./dishes";
import commentsReducer from './comments';
import shoppingCartsReducer from './shoppingcarts';

const rootReducer = combineReducers({
    session: sessionReducer,
    stores: storesReducer,
    dishes: dishesReducer,
    comments: commentsReducer,
    shoppingCarts: shoppingCartsReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;