//====================================================|
// INFO BAR


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './info-bar.scss';


//--------------------------| Component

const InfoBar = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);


//--------------------------| Export

export default InfoBar;
