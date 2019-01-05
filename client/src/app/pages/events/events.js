//====================================================|
// EVENTS


//--------------------------| Import

// Libraries
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import moment from 'moment';

// Services
import capitalizeFirstLetter from '../../services/text';

// Database
import {
  pages as pagesLabels,
  duringMonth as duringMonthLabel,
  expectNextMonth as expectNextMonthLabel
} from '../../../database/labels.json';

// Styles
import styles from './events.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Divider from '../../components/atoms/divider';
import InfoBar from '../../components/atoms/info-bar';

// Molecules
import PlayBar from '../../components/molecules/play-bar';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Events = ({ data }) => {
  let months = _.values(_.groupBy(data, event => moment(event.fields.date.bg).format('M')));

  months = months.map(month => ({
    name: capitalizeFirstLetter(moment(month[0].fields.date.bg).format('MMMM')),
    events: month
  }));

  let nextMonth = parseInt(moment(months[months.length - 1].events[0].fields.date.bg).format('M'), 10);
  nextMonth = nextMonth === 12 ? 0 : nextMonth;
  nextMonth = capitalizeFirstLetter(moment().month(nextMonth.toString()).format('MMMM'));

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>{pagesLabels.events}</Heading>
      </AniContent>
      <div className={styles.months}>
        {
          months.map((m, i) => (
            <React.Fragment key={i}>
              <AniContent>
                <Heading size={2} type='subtitle'>{duringMonthLabel} {m.name}:</Heading>
              </AniContent>
              <ItemsList>
                {
                  m.events.map(e => (
                    <ListItem key={e.fields.date.bg}>
                      <PlayBar
                        parentStyles={styles}
                        data={{
                          date: e.fields.date.bg,
                          play: e.fields.play.bg.fields
                        }}
                      />
                    </ListItem>
                  ))
                }
              </ItemsList>
              {
                i < months.length - 1 && <AniContent><Divider /></AniContent>
              }
            </React.Fragment>
          ))
        }
      </div>
      <AniContent>
        <InfoBar>{expectNextMonthLabel} {nextMonth}!</InfoBar>
      </AniContent>
    </AniWrapper>
  );
};


//--------------------------| Export

export default Events;
