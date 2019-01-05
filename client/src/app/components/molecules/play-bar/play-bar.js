//====================================================|
// PLAY BAR


//--------------------------| Import

// Libraries
import React from 'react';

// Database
import { plays as playsPath } from '../../../../database/pages.json';
import { playTime } from '../../../../database/content.json';

// Styles
import styles from './play-bar.scss';

// Atoms
import Date from '../../atoms/date';
import Meta from '../../atoms/meta';
import EventBar from '../../atoms/event-bar';


//--------------------------| Component

const PlayBar = ({ parentStyles, data }) => (
  <div className={styles.root}>
    <div className={styles.date}>
      <Date date={data.date} />
      <Meta>{playTime}</Meta>
    </div>
    <EventBar data={{
      stage: data.play.stage.bg.fields.id.bg,
      title: data.play.title.bg,
      subtitle: data.play.stage.bg.fields.title.bg,
      link: `${playsPath}/${data.play.id.bg}`
    }} />
  </div>
);


//--------------------------| Export

export default PlayBar;
