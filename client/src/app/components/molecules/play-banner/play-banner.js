//====================================================|
// PLAY BANNER


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Services
import { getAsset } from '../../../services/content';

// Database
import { plays as playsPath } from '../../../../database/pages.json';
import {
  author as authorLabel,
  director as directorLabel,
  upcomingPremiere as upcomingPremiereLabel
} from '../../../../database/labels.json';

// Styles
import styles from './play-banner.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../../atoms/heading';
import Thumb from '../../atoms/thumb';
import PremiereMark from '../../atoms/premiere-mark';


//--------------------------| Component

const PlayBanner = ({ parentStyles, data }) => {
  const {
    id,
    poster,
    title,
    author,
    director,
    premiere
  } = data;

  return (
    <div className={styles.root}>
      {
        premiere && <PremiereMark title={upcomingPremiereLabel} />
      }
      <Link
        to={`${playsPath}/${id}`}
        className={classNames(
          linkLight,
          linkText
        )}
      >
        <Thumb
          parentStyles={styles.thumb}
          src={getAsset(poster.sys.id).fields.file.bg.url}
          title={title}
          type={'portrait'}
        />
        <Heading size={3} type={'accent'}>{title}</Heading>
      </Link>
      <div className={styles.details}>
        <p>{authorLabel}: {author[0]}</p>
        <p>{directorLabel}: {director[0].fields.name.bg}</p>
      </div>
    </div>
  );
};


//--------------------------| Export

export default PlayBanner;
