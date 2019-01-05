//====================================================|
// STAGE


//--------------------------| Import

// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// Database
import { home as homePath } from '../../../../database/pages';

// Styles
import styles from './stage.scss';

// Graphics
import CurtainSVG from '../../../../assets/graphics/curtain.svg';

// Atoms
import Logo from '../../atoms/logo';


//--------------------------| Component

const Stage = props => (
  <div className={styles.root}>
    <div className={styles.curtains}>
      <CurtainSVG />
      <CurtainSVG />
    </div>

    <NavLink exact activeClassName={styles.activeLogo} to={homePath}>
      <Logo className={styles.logo} />
    </NavLink>
  </div>
);


//--------------------------| Export

export default Stage;
