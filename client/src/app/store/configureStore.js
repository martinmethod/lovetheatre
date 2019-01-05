//====================================================|
// CONFIGURE STORE


//--------------------------| Import

// Redux
import { createStore, combineReducers } from 'redux';

// Reducers
import appReducer from '../reducers/app';


//--------------------------| Export

export default () => createStore(
  combineReducers({
    app: appReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);
