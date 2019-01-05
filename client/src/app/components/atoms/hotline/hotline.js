//====================================================|
// HOTLINE


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './hotline.scss';


//--------------------------| Component

const Hotline = ({ parentStyles, children }) => (
  <div
    className={classNames(styles.root, parentStyles.hotline)}
  >
    {children}
  </div>
);


//--------------------------| Export

export default Hotline;
