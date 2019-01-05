//====================================================|
// SEARCH BOX


//--------------------------| Import

// Libraries
import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

// Database
import { searchPlaceholder } from '../../../../database/labels.json';
import { search as searchPath } from '../../../../database/pages.json';

// Styles
import styles from './search-box.scss';

// Graphics
import MagnifierSVG from '../../../../assets/graphics/magnifier.svg';


//--------------------------| Component

const SearchBox = ({ history, parentStyles }) => (
  <div className={classNames(styles.root, parentStyles.searchBox, parentStyles.navModule)}>
    <input
      className={classNames(
        styles.checkboxToggle,
        parentStyles.checkboxToggle
      )}
      id='search-checkbox'
      type='checkbox'
      onChange={(e) => {
        if (e.target.checked) {
          setTimeout(() => {
            document.getElementById('search-input').focus();
          }, 300);

          document.getElementById('menu-checkbox').checked = false;
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
      htmlFor='search-checkbox'
    >
      <MagnifierSVG />
    </label>
    <div className={classNames(styles.stage, parentStyles.stage)}>
      <label className={classNames(
        styles.mobileToggle,
        styles.xToggle,
        parentStyles.mobileToggle,
        parentStyles.xToggle
      )}
        htmlFor='search-checkbox'
      >
        <span />
      </label>
      <form
        className={styles.form}
        method='get'
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.target.elements.query.value) {
            return false;
          }

          history.push(`${searchPath}/${e.target.elements.query.value}`);
          document.getElementById('search-checkbox').checked = false;
          e.target.elements.query.value = '';
          return true;
        }}
      >
        <input className={styles.textfield} id='search-input' type='search' placeholder={searchPlaceholder} name='query' />
        <button className={styles.button}>
          <MagnifierSVG />
        </button>
      </form>
    </div>
  </div>
);


//--------------------------| Export

export default withRouter(SearchBox);
