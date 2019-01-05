//====================================================|
// THUMB


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './thumb.scss';


//--------------------------| Component

const Thumb = (props) => {
  const {
    parentStyles,
    title,
    src,
    type = 'landscape'
  } = props;

  return (
    <div className={classNames(styles.root, { [parentStyles]: parentStyles }, styles[type])}>
      <picture className={styles.pic}>
        <img draggable='false' className={styles.image} src={src} alt={title} />
      </picture>
    </div>
  );
};


//--------------------------| Export

export default Thumb;
