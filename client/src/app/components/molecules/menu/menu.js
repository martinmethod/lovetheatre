//====================================================|
// MENU


//--------------------------| Import

// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import styles from './menu.scss';

// Graphics
import NavSVG from '../../../../assets/graphics/nav.svg';


//--------------------------| Component

const Menu = ({ items, parentStyles }) => (
  <nav className={classNames(styles.root, parentStyles.navModule)}>
    <input
      className={classNames(
        styles.checkboxToggle,
        parentStyles.checkboxToggle
      )}
      id='menu-checkbox'
      type='checkbox'
      onChange={(e) => {
        if (e.target.checked) {
          document.getElementById('search-checkbox').checked = false;
        }
      }}
    />
    <label
      className={classNames(
        styles.mobileToggle,
        styles.mainToggle,
        parentStyles.mobileToggle,
        parentStyles.mainToggle
      )}
      htmlFor='menu-checkbox'
    >
      <NavSVG />
    </label>
    <div className={classNames(styles.stage, parentStyles.stage)}>
      <label
        className={classNames(
          styles.mobileToggle,
          styles.xToggle,
          parentStyles.mobileToggle,
          parentStyles.xToggle
        )}
        htmlFor='menu-checkbox'
      >
        <span />
      </label>
      <ul className={styles.menuList}>
        {
          Object.keys(items).map(i => (
            <li className={styles.menuItem} key={i}>
              <NavLink
                activeClassName={styles.current}
                to={items[i].url}
                exact
                onClick={() => {
                  if (window.innerWidth < 992) {
                    document.getElementById('menu-checkbox').checked = false;
                  }
                }}
              >
                <span>{items[i].label}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
);


//--------------------------| Export

export default Menu;
