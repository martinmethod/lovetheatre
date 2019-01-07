//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Router
import PageRouter from './routers/page-router';

// Styles
import styles from './app.scss';


//--------------------------| Component

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className={styles.root}>
      <PageRouter />
    </div>
  </BrowserRouter>
);


//--------------------------| Export

export default hot(module)(App);
