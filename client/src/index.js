//====================================================|
// LOVE THEATRE


//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { stringify } from 'flatted/esm';

// App
import App from './app';

// Services
import { requestContent } from './app/services/content';

// Store
import store from './app/store/getStore';

// Actions
import { changeScreenType } from './app/actions/app';

// Styles
import './styles/scaffoldings/base.scss';
import './styles/scaffoldings/font-faces.scss';

// Images
import './assets/images/logo.png';


(async () => {
  //--------------------------| Root
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);


  //--------------------------| Store content

  const content = await requestContent();
  localStorage.setItem('lt_content', stringify(content));


  //--------------------------| State store

  store.subscribe(() => {
    localStorage.setItem('lt_state', JSON.stringify(store.getState()));
  });


  //--------------------------| Handle screen type

  const setScreenType = () => {
    const type = window.innerWidth < 992 ? 'mobile' : 'desktop';
    store.dispatch(changeScreenType(type));
  };

  window.addEventListener('resize', setScreenType);
  setScreenType();


  //--------------------------| Render

  const jsx = (
    <Provider store={ store }>
      <App />
    </Provider>
  );

  ReactDOM.render(jsx, root);
})();
