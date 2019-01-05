//====================================================|
// LOGO


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './logo.scss';

// Graphics
import LogoSVG from '../../../../assets/graphics/logotype.svg';


//--------------------------| Component

const Logo = ({ className }) => (
  <LogoSVG className={`${styles.root} ${className}`} />
);


//--------------------------| Export

export default Logo;
