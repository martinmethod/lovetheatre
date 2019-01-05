//====================================================|
// AVATAR BANNER


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Database
import { actors as actorsPath } from '../../../../database/pages.json';

// Styles
import styles from './avatar-banner.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../../atoms/heading';
import Thumb from '../../atoms/thumb';


//--------------------------| Component

const AvatarBanner = ({ parentStyles, data }) => {
  const {
    id,
    photo,
    title
  } = data;

  return (
    <div className={styles.root}>
      <Link
        to={`${actorsPath}/${id}`}
        className={classNames(
          linkLight,
          linkText
        )}
      >
        <Thumb
          parentStyles={styles.thumb}
          src={photo}
          title={title}
          type={'avatar'}
        />
        <Heading size={3} type={'accent'}>{title}</Heading>
      </Link>
    </div>
  );
};


//--------------------------| Export

export default AvatarBanner;
