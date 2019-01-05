//====================================================|
// PREMIERE BAR


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Database
import { plays as playsPath } from '../../../../database/pages.json';
import {
  author as authorLabel,
  director as directorLabel
} from '../../../../database/labels.json';

// Styles
import styles from './premiere-bar.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Date from '../../atoms/date';
import Meta from '../../atoms/meta';
import Heading from '../../atoms/heading';


//--------------------------| Component

const PremiereBar = ({ data }) => (
  <div className={styles.root}>
    <div className={styles.main}>
      <Heading size={2} type={'accent'}>
        <Link className={classNames(linkLight, linkText)} to={`${playsPath}/${data.fields.id.bg}`}>
          <span>{data.fields.title.bg}</span>
        </Link>
      </Heading>
      <Date date={data.fields.events.bg[0].fields.date.bg} />
    </div>
    <aside>
      <Meta>
        <label>{authorLabel}:</label>
        <span>{data.fields.author.bg[0]}</span>
      </Meta>
      <Meta>
        <label>{directorLabel}:</label>
        <span>{data.fields.director.bg[0].fields.name.bg}</span>
      </Meta>
    </aside>
  </div>
);


//--------------------------| Export

export default PremiereBar;
