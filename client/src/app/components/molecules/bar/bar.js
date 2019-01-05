//====================================================|
// BAR


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './bar.scss';

// Atoms
import Season from '../../atoms/season';

// Molecules
import Nav from '../nav';


//--------------------------| Component

const Bar = props => (
  <div className={styles.root}>
    <Nav parentStyles={styles} />
    <Season parentStyles={styles} />
  </div>
);


//--------------------------| Export

export default Bar;
