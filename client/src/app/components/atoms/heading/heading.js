//====================================================|
// HEADING


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './heading.scss';


//--------------------------| Component

const Heading = ({ size = 1, type = 'page', children }) => {
  const H = `h${size}`;
  const classes = classNames(styles.root, styles[type]);

  return (
    <H className={classes}>
      {children}
    </H>
  );
};


//--------------------------| Export

export default Heading;
