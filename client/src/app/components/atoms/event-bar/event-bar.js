//====================================================|
// EVENT BAR


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Database
import { premiere as premiereLabel } from '../../../../database/labels';

// Styles
import styles from './event-bar.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../heading';
import Meta from '../meta';
import PremiereMark from '../premiere-mark';


//--------------------------| Component

const EventBar = ({ data }) => (
  <div className={classNames(styles.root, styles[data.stage])}>
    {
      data.premiere && <PremiereMark title={premiereLabel} />
    }
    <Heading size={3} type={'accent'}>
      {
        data.link && (
          <Link
            to={data.link}
            className={classNames(
              linkLight,
              linkText
            )}
          >
            <span>{data.title}</span>
          </Link>
        )
      }
      {
        !data.link && (
          <span>{data.title}</span>
        )
      }
    </Heading>
    <Meta>{data.subtitle}</Meta>
  </div>
);


//--------------------------| Export

export default EventBar;
