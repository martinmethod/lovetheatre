//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './header.scss';

// Molecules
import Stage from '../../molecules/stage';
import Bar from '../../molecules/bar';


//--------------------------| Component

const Header = () => (
  <header className={styles.root}>
    <Stage />
    <Bar />
  </header>
);


//--------------------------| Export

export default Header;
