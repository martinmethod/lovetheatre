//====================================================|
// DIVIDER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './divider.scss';

// Graphics
import DividerSVG from '../../../../assets/graphics/divider.svg';


//--------------------------| Component

const Divider = () => (
  <DividerSVG className={styles.root} />
);


//--------------------------| Export

export default Divider;
