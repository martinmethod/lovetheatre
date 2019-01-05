//====================================================|
// ERROR


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './error.scss';


//--------------------------| Component

const Error = ({ children }) => (
  <label className={styles.root}>
    {children}
  </label>
);


//--------------------------| Export

export default Error;
