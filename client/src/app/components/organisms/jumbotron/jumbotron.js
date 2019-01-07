//====================================================|
// JUMBOTRON


//--------------------------| Import

// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Services
import { getAsset } from '../../../services/content';

// Database
import { plays as playsPath } from '../../../../database/pages.json';
import { expectSoon as expectSoonLabel } from '../../../../database/labels.json';

// Styles
import styles from './jumbotron.scss';

// Atoms
import CoverImage from '../../atoms/cover-image';
import Hotline from '../../atoms/hotline';
import Heading from '../../atoms/heading';


//--------------------------| Component

const Jumbotron = ({ data }) => {
  const play = data[0].fields;
  const title = play.title.bg;

  return (
    <section className={styles.root}>
      <Link to={`${playsPath}/${play.id.bg}`}>
        <CoverImage
          parentStyles={styles}
          title={title}
          src={getAsset(play.cover.bg.sys.id).fields.file.bg.url}
        />
        <Hotline parentStyles={styles}>
          <Heading>
            <span>{expectSoonLabel}: </span>
            <strong>{title}</strong>
          </Heading>
        </Hotline>
      </Link>
    </section>
  );
};


//--------------------------| Export

export default Jumbotron;
