//====================================================|
// GET STORE


//--------------------------| Import

import configureStore from './configureStore';


//--------------------------| Store

const store = configureStore();

localStorage.setItem('lt_state', JSON.stringify(store.getState()));


//--------------------------| Export

export default store;
