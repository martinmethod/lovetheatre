//====================================================|
// META


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './meta.scss';


//--------------------------| Component

const Meta = ({ parentStyles, children }) => (
  <span className={classNames(styles.root, { [parentStyles]: parentStyles })}>
    {children}
  </span>
);


//--------------------------| Export

export default Meta;
