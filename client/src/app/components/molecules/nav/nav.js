//====================================================|
// NAV


//--------------------------| Import

// Libraries
import React from 'react';

// Database
import { pages as pagesLabels } from '../../../../database/labels.json';
import menuItems from '../../../../database/menu.json';
import pages from '../../../../database/pages.json';

// Styles
import styles from './nav.scss';

// Molecules
import Menu from '../menu';
import SearchBox from '../search-box';


//--------------------------| Prepare menu

const menu = {};

menuItems.forEach((item) => {
  menu[item] = {
    label: pagesLabels[item],
    url: pages[item]
  };
});


//--------------------------| Component

const Nav = ({ parentStyles }) => (
  <div className={`${styles.root} ${parentStyles.nav}`}>
    <Menu parentStyles={styles} items={menu} />
    <SearchBox parentStyles={styles} />
  </div>
);


//--------------------------| Export

export default Nav;
