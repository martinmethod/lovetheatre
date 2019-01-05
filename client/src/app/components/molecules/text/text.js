//====================================================|
// TEXT


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './text.scss';


//--------------------------| Component

const Text = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);


//--------------------------| Export

export default Text;
