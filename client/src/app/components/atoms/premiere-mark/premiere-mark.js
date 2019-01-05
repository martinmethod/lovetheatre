//====================================================|
// PREMIERE MARK


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './premiere-mark.scss';

// Graphics
import BookmarkSVG from '../../../../assets/graphics/bookmark.svg';


//--------------------------| Component

const PremiereMark = ({ title }) => (
  <span className={styles.root} title={title}>
    <BookmarkSVG />
  </span>
);


//--------------------------| Export

export default PremiereMark;
