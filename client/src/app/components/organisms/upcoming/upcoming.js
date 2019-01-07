//====================================================|
// UPCOMING


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Services
import { getAsset } from '../../../services/content';

// Database
import {
  events as eventsPath,
  plays as playsPath
} from '../../../../database/pages.json';
import { upcoming as upcomingLabel } from '../../../../database/labels.json';

// Styles
import styles from './upcoming.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';
import { spacePageSection } from '../../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../atoms/heading';

// Molecules
import ThumbsList from '../../molecules/thumbs-list';

// Animation
import AniContent from '../../animations/animation-content';


//--------------------------| Component

const Upcoming = ({ data }) => {
  const items = data.map(item => ({
    id: item.sys.id,
    date: item.fields.date.bg,
    title: item.fields.play.bg.fields.title.bg,
    url: `${playsPath}/${item.fields.play.bg.fields.id.bg}`,
    src: getAsset(item.fields.play.bg.fields.poster.bg.sys.id).fields.file.bg.url,
    type: 'portrait'
  }));

  return (
    <section className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>
          <Link
            className={classNames(
              linkLight,
              linkText
            )}
            to={eventsPath}
          >
            <span>{upcomingLabel}</span>
          </Link>
        </Heading>
      </AniContent>

      <ThumbsList data={items} />
    </section>
  );
};


//--------------------------| Export

export default Upcoming;
