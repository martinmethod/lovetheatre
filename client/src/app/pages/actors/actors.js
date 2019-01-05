//====================================================|
// ACTORS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Database
import { pages as pagesLabels } from '../../../database/labels.json';

// Styles
import styles from './actors.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';
import { linkLight, linkText } from '../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../../components/atoms/heading';

// Molecules
import AvatarBanner from '../../components/molecules/avatar-banner';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Actors = ({ data }) => (
  <AniWrapper className={classNames(styles.root, spacePageSection)}>
    <AniContent>
      <Heading>{pagesLabels.actors}</Heading>
    </AniContent>
    <ItemsList>
      {
        data.map(actor => (
          <ListItem key={actor.fields.id.bg}>
            <AvatarBanner
              data={{
                id: actor.fields.id.bg,
                photo: actor.fields.avatar.bg.fields.file.bg.url,
                title: actor.fields.name.bg
              }}
            />
          </ListItem>
        ))
      }
    </ItemsList>
  </AniWrapper>
);


//--------------------------| Export

export default Actors;
