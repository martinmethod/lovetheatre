//====================================================|
// SEASON


//--------------------------| Import

// Libraries
import React from 'react';

// Database
import { season as seasonLabel } from '../../../../database/labels.json';
import { season } from '../../../../database/content.json';

// Styles
import styles from './season.scss';


//--------------------------| Component

const Season = ({ parentStyles }) => (
  <div
    className={`${styles.root} ${parentStyles.season}`}
  >
    {seasonLabel} {season}
  </div>
);


//--------------------------| Export

export default Season;
