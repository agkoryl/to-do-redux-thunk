import {
    createStore, combineReducers,
    applyMiddleware, compose
  } from 'redux';
  import thunk from 'redux-thunk';


  import toDoReducer from './reducers';

  
  const rootReducer = combineReducers({
   todo: toDoReducer
  });

  const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const middleware = [thunk];

  
  const store = createStore(
   rootReducer,
   composeEnhancers(
    applyMiddleware(...middleware)
  )
  );
  
  export default store;