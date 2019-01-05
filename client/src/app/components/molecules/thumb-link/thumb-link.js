//====================================================|
// THUMB LINK


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Styles
import styles from './thumb-link.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Date from '../../atoms/date';
import Thumb from '../../atoms/thumb';


//--------------------------| Component

const ThumbLink = ({ data }) => (
  <div className={styles.root}>
    <Date date={data.date} />
    <Link
      className={classNames(
        styles.link,
        linkLight,
        linkText
      )}
      to={data.url}
    >
      <Thumb
        parentStyles={styles.thumb}
        src={data.src}
        title={data.title}
        type={data.type}
      />
      <span className={styles.title}>{data.title}</span>
    </Link>
  </div>
);


//--------------------------| Export

export default ThumbLink;
