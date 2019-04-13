import {
    createStore, combineReducers
  } from 'redux';


  import toDoReducer from './reducers';

  
  const reducer = combineReducers({
   todo: toDoReducer
  });
  
  
  const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;