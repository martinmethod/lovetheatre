//====================================================|
// PORTRAIT


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Styles
import styles from './portrait.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Thumb from '../../atoms/thumb';
import Heading from '../../atoms/heading';


//--------------------------| Component

const Portrait = ({ link, name, pic }) => (
  <div className={styles.root}>
    <Link
      className={classNames(
        styles.link,
        linkLight,
        linkText
      )}
      to={link}
    >
      <Thumb
        src={pic}
        title={name}
      />
      <Heading size={2} type={'accent'}>{name}</Heading>
    </Link>
  </div>
);


//--------------------------| Export

export default Portrait;
