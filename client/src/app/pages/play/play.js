//====================================================|
// PLAY


//--------------------------| Import

// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import _ from 'lodash';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Services
import { formatDate, getEntry } from '../../services/content';

// Database
import { playTime } from '../../../database/content.json';
import {
  author as authorLabel,
  director as directorLabel,
  screenplay as screenplayLabel,
  compositor as compositorLabel,
  photograph as photographLabel,
  cast as castLabel,
  gallery as galleryLabel,
  upcomingEvents as upcomingEventsLabel
} from '../../../database/labels.json';
import { actors as actorsPath } from '../../../database/pages.json';

// Styles
import styles from './play.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';
import { linkLight, linkText } from '../../../styles/tokens/tokens_links.scss';

// Atoms
import Divider from '../../components/atoms/divider';
import EventBar from '../../components/atoms/event-bar';
import Heading from '../../components/atoms/heading';
import Thumb from '../../components/atoms/thumb';

// Molecules
import Text from '../../components/molecules/text';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';
import Slideshow from '../../components/organisms/slideshow';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Play = ({ match }) => {
  const play = getEntry('play', match.params.id)[0].fields;
  const events = play.events.bg;

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>{play.title.bg}</Heading>
      </AniContent>
      <div className={styles.main}>
        <AniContent className={styles.description}>
          <Text>
            <div
              dangerouslySetInnerHTML = {{
                __html: documentToHtmlString(play.summary.bg)
              }}
            />
          </Text>
        </AniContent>
        <AniContent className={styles.poster}>
          <Thumb title={play.title.bg} src={play.poster.bg.fields.file.bg.url} type={'portrait'} />
        </AniContent>
        <AniContent className={styles.details}>
          <dl>
            <dt>{authorLabel}</dt>
            <dd>
              {
                play.author.bg.map((a, i) => (
                  <span key={i}>{a}</span>
                ))
              }
            </dd>
          </dl>
          <dl>
            <dt>{directorLabel}</dt>
            <dd>
              {
                play.director.bg.map((d, i) => (
                  <span key={i}>{d.fields.name.bg}</span>
                ))
              }
            </dd>
          </dl>
          <dl>
            <dt>{screenplayLabel}</dt>
            <dd>
              {
                play.screenplay.bg.map((s, i) => (
                  <span key={i}>{s}</span>
                ))
              }
            </dd>
          </dl>
          <dl>
            <dt>{compositorLabel}</dt>
            <dd>
              {
                play.music.bg.map((c, i) => (
                  <span key={i}>{c}</span>
                ))
              }
            </dd>
          </dl>
          <dl>
            <dt>{photographLabel}</dt>
            <dd>
              {
                play.photograph.bg.map((p, i) => (
                  <span key={i}>{p}</span>
                ))
              }
            </dd>
          </dl>
          <dl>
            <dt>{castLabel}</dt>
            <dd>
              {
                _.orderBy(play.actors.bg, person => person.fields.name.bg, 'asc').map((a, i) => (
                  <p key={i}>
                    <Link
                      className={classNames(
                        linkLight,
                        linkText
                      )}
                      to={`${actorsPath}/${a.fields.id.bg}`}
                    >
                      <span>{a.fields.name.bg}</span>
                    </Link>
                  </p>
                ))
              }
            </dd>
          </dl>
        </AniContent>
      </div>

      <AniContent>
        <Divider />
      </AniContent>

      {
        play.gallery && (
          <>
            <AniContent>
              <Heading size={2} type={'subtitle'}>{galleryLabel}</Heading>
            </AniContent>
            <AniContent>
              <Slideshow gallery={play.gallery.bg} />
            </AniContent>
            <AniContent>
              <Divider />
            </AniContent>
          </>
        )
      }

      <div className={styles.events}>
        <AniContent>
          <Heading size={2} type={'subtitle'}>{upcomingEventsLabel}</Heading>
        </AniContent>
        <ItemsList>
          {
            events.map((e, i) => (
              <ListItem key={e.fields.date.bg}>
                <EventBar
                  data={{
                    stage: play.stage.bg.fields.id.bg,
                    title: formatDate(e.fields.date.bg),
                    subtitle: playTime,
                    premiere: play.premiere.bg && i === 0
                  }}
                />
              </ListItem>
            ))
          }
        </ItemsList>
      </div>
    </AniWrapper>
  );
};


//--------------------------| Export

export default Play;
