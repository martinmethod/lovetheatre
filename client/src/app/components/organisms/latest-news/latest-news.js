//====================================================|
// LATEST NEWS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Database
import { news as newsPath } from '../../../../database/pages.json';
import { latestNews as latestNewsLabel } from '../../../../database/labels.json';

// Styles
import styles from './latest-news.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';
import { spacePageSection } from '../../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../atoms/heading';

// Molecules
import ThumbsList from '../../molecules/thumbs-list';

// Animation
import AniContent from '../../animations/animation-content';


//--------------------------| Component

const LatestNews = ({ data }) => {
  const items = data.map(item => ({
    id: item.sys.id,
    date: item.fields.date.bg,
    title: item.fields.title.bg,
    url: `${newsPath}/${item.fields.id.bg}`,
    src: item.fields.picture.bg.fields.file.bg.url
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
            to={newsPath}
          >
            <span>{latestNewsLabel}</span>
          </Link>
        </Heading>
      </AniContent>

      <ThumbsList data={items} />
    </section>
  );
};


//--------------------------| Export

export default LatestNews;
