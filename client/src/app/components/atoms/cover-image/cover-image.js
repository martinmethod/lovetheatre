//====================================================|
// COVER IMAGE


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './cover-image.scss';


//--------------------------| Component

const CoverImage = ({ parentStyles, title, src }) => (
  <div className={classNames(styles.root, parentStyles.image)}>
    <picture
      className={styles.pic}
    >
      <img draggable='false' className={styles.image} src={src} alt={title} />
    </picture>
  </div>
);


//--------------------------| Export

export default CoverImage;
