//====================================================|
// PREMIERES


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Database
import { plays as playsPath } from '../../../../database/pages.json';
import { premieres as premieresLabel } from '../../../../database/labels.json';

// Styles
import styles from './premieres.scss';
import { linkDark, linkText } from '../../../../styles/tokens/tokens_links.scss';
import { spacePageSection } from '../../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../atoms/heading';

// Molecules
import PremiereBar from '../../molecules/premiere-bar';

// Animation
import AniContent from '../../animations/animation-content';


//--------------------------| Component

const Premieres = ({ data }) => (
  <section className={classNames(styles.root, spacePageSection)}>
    <AniContent>
      <Heading>
        <Link
          className={classNames(
            linkDark,
            linkText
          )}
          to={playsPath}
        >
          {premieresLabel}
        </Link>
      </Heading>
    </AniContent>

    <div className={styles.list}>
      {
        data.map(item => (
          <AniContent
            key={item.sys.id}
            className={styles.bar}
          >
            <PremiereBar parentStyles={styles} data={item} />
          </AniContent>
        ))
      }
    </div>
  </section>
);


//--------------------------| Export

export default Premieres;
