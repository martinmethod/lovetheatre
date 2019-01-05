//====================================================|
// NEWS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Database
import { pages as pagesLabels } from '../../../database/labels.json';
import { news as newsPath } from '../../../database/pages.json';

// Styles
import styles from './news.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';

// Molecules
import ThumbLink from '../../components/molecules/thumb-link';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const News = ({ data }) => (
  <AniWrapper className={classNames(styles.root, spacePageSection)}>
    <AniContent>
      <Heading>{pagesLabels.news}</Heading>
    </AniContent>
    <ItemsList>
      {
        data.map(n => (
          <ListItem key={n.sys.id}>
            <ThumbLink data={{
              id: n.sys.id,
              date: n.fields.date.bg,
              title: n.fields.title.bg,
              url: `${newsPath}/${n.fields.id.bg}`,
              src: n.fields.picture.bg.fields.file.bg.url
            }} />
          </ListItem>
        ))
      }
    </ItemsList>
  </AniWrapper>
);


//--------------------------| Export

export default News;
