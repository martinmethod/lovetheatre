//====================================================|
// PLAYS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Database
import { pages as pagesLabels } from '../../../database/labels.json';

// Styles
import styles from './plays.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Divider from '../../components/atoms/divider';

// Molecules
import PlayBanner from '../../components/molecules/play-banner';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Plays = ({ data }) => (
  <AniWrapper className={classNames(styles.root, spacePageSection)}>
    <AniContent>
      <Heading>{pagesLabels.plays}</Heading>
    </AniContent>
    <div className={styles.stages}>
      {
        data.map((s, i) => (
          <React.Fragment key={i}>
            <AniContent>
              <Heading size={2} type='subtitle'>{s.name}</Heading>
            </AniContent>
            <ItemsList>
              {
                s.plays.map(p => (
                  <ListItem key={p.sys.id}>
                    <PlayBanner
                      data={{
                        id: p.fields.id.bg,
                        poster: p.fields.poster.bg,
                        title: p.fields.title.bg,
                        author: p.fields.author.bg,
                        director: p.fields.director.bg,
                        premiere: p.fields.premiere.bg
                      }}
                    />
                  </ListItem>
                ))
              }
            </ItemsList>
            {
              i < data.length - 1 && <AniContent><Divider /></AniContent>
            }
          </React.Fragment>
        ))
      }
    </div>
  </AniWrapper>
);


//--------------------------| Export

export default Plays;
