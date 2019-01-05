//====================================================|
// DATE


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { formatDate } from '../../../services/content';

// Styles
import styles from './date.scss';

// Atoms
import Meta from '../meta';


//--------------------------| Component

const Date = ({ date, format }) => (
  <Meta parentStyles={styles.root}>{formatDate(date, format)}</Meta>
);


//--------------------------| Export

export default Date;
