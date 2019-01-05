//====================================================|
// FOOTER


//--------------------------| Import

// Libraries
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Database
import {
  name,
  address,
  email,
  tel,
  website,
  startingYear
} from '../../../../database/content.json';
import { pages as pagesLabels } from '../../../../database/labels.json';
import {
  home as homePath,
  conditions as conditionsPath
} from '../../../../database/pages.json';

// Styles
import styles from './footer.scss';
import { linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Logo from '../../atoms/logo';


//--------------------------| Component

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.bgr} />
    <div className={styles.content}>
      <div className={styles.spotlight}>
        <div className={styles.spot} />
        <NavLink exact activeClassName={styles.activeLogo} to={homePath}>
          <Logo className={styles.logo} />
        </NavLink>
      </div>

      <div className={styles.data}>
        <p>
          {name.prefix} „<strong>{name.title}</strong>“ {name.suffix}<br />
          {address.street}, <br className={styles.separator} />
          {address.zipcode} {address.district}, {address.city}<br />
          <em>тел.</em> <strong>{tel}</strong>, <br className={styles.separator} />
          <em>e-mail:</em> <strong><a className={linkText} href={`mailto:${email}`}>{email}</a></strong><br />
        </p>

        <p>
          <Link
            className={linkText}
            to={conditionsPath}
          >
            {pagesLabels.conditions}
          </Link>
        </p>

        <p>
          <em>@ {startingYear}–2020 www.</em><strong>{website}</strong>
        </p>
      </div>
    </div>
  </footer>
);


//--------------------------| Export

export default Footer;
