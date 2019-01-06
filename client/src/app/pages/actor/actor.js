//====================================================|
// ACTOR


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Services
import { formatDate, getEntry } from '../../services/content';

// Database
import {
  participations as participationsLabel
} from '../../../database/labels.json';
import { plays as playsPath } from '../../../database/pages.json';

// Styles
import styles from './actor.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';
import { linkLight, linkText } from '../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Divider from '../../components/atoms/divider';
import EventBar from '../../components/atoms/event-bar';
import Thumb from '../../components/atoms/thumb';

// Molecules
import Text from '../../components/molecules/text';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Actor = ({ match }) => {
  const actor = getEntry('person', match.params.id)[0].fields;
  const roles = actor.roles.bg;

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>{actor.name.bg}</Heading>
      </AniContent>
      <div className={styles.main}>
        <AniContent className={styles.avatar}>
          <Thumb title={actor.name.bg} src={actor.avatar.bg.fields.file.bg.url} type={'avatar'} />
        </AniContent>
        <AniContent className={styles.summary}>
          <Text>
            <div
              dangerouslySetInnerHTML = {{
                __html: documentToHtmlString(actor.biography.bg)
              }}
            />
          </Text>
        </AniContent>
      </div>

      {
        roles && roles.length !== 0 && (
          <>
            <AniContent>
              <Divider />
            </AniContent>
            <AniContent>
              <Heading size={2} type={'subtitle'}>{participationsLabel}:</Heading>
            </AniContent>
            <ItemsList>
              {
                roles.map(r => (
                  <ListItem key={r.fields.id.bg}>
                    <EventBar
                      data={{
                        stage: r.fields.stage.bg.fields.id.bg,
                        title: r.fields.title.bg,
                        subtitle: r.fields.stage.bg.fields.title.bg,
                        link: `${playsPath}/${r.fields.id.bg}`
                      }}
                    />
                  </ListItem>
                ))
              }
            </ItemsList>
          </>
        )
      }
    </AniWrapper>
  );
};


//--------------------------| Export

export default Actor;
