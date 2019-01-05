//====================================================|
// THUMBS LIST


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Styles
import styles from './thumbs-list.scss';

// Atoms
import ThumbLink from '../thumb-link';

// Animation
import AniContent from '../../animations/animation-content';


//--------------------------| Component

const ThumbsList = ({ data }) => (
  <div className={styles.root}>
    {
      data.map(item => (
        <AniContent
          key={item.id}
          className={styles.thumbLink}
        >
          <ThumbLink data={item} />
        </AniContent>
      ))
    }
  </div>
);


//--------------------------| Export

export default ThumbsList;
