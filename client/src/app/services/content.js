//====================================================|
// // SERVICES: CONTENT


//--------------------------| Import

// Libraries
import { createClient } from 'contentful';
import { parse } from 'flatted/esm';
import moment from 'moment';
import _ from 'lodash';

// Database
import { year as yearLabel } from '../../database/labels';


//--------------------------| Set Bulgarian for moment.js

moment.locale('bg');


//--------------------------| Define Contentful client

const client = createClient({
  space: 'lpnn0lk867xw',
  accessToken: 'f175b39ca3bbc87427dd778dfff5357dd8fbc2bf614dd3eb2d6a15c937e40478'
});


//--------------------------| Update content

const updateContent = (content, payload) => {
  const types = ['Entries', 'Assets'];
  const newContent = { ...content };

  for (let type = 0; type < types.length; type += 1) {
    const lowerType = types[type].toLowerCase();

    if (payload[lowerType].length > 0) {
      newContent[lowerType] = _.concat(newContent[lowerType], payload[lowerType]);
    }

    if (payload[`deleted${types[type]}`].length > 0) {
      newContent[lowerType] = _.differenceWith(
        newContent[lowerType],
        payload[`deleted${types[type]}`],
        (item, deletedItem) => item.sys.id === deletedItem.sys.id
      );
    }
  }

  return newContent;
};


//--------------------------| Request content

export const requestContent = async () => {
  const storage = localStorage.getItem('lt_content');
  const token = localStorage.getItem('lp_contentful_sync_token');
  const syncParams = token ? { nextSyncToken: token } : { initial: true };

  let content = await client.sync(syncParams);

  if (token) {
    content = updateContent(parse(storage), content);
  }

  localStorage.setItem('lp_contentful_sync_token', content.nextSyncToken);

  return new Promise((resolve) => {
    resolve(content);
  });
};


//--------------------------| Get entries

export const getEntries = type => parse(localStorage.getItem('lt_content')).entries.filter(item => item.sys.contentType.sys.id === type);


//--------------------------| Get cover plays

export const getCoverPlays = () => {
  const plays = parse(localStorage.getItem('lt_content')).entries.filter(item => item.sys.contentType.sys.id === 'play');
  return plays.filter(item => item.fields.frontCover && item.fields.frontCover.bg);
};


//--------------------------| Get events

export const getEvents = (count) => {
  const events = _.sortBy(getEntries('event'), item => moment(item.fields.date.bg));

  if (count) {
    return events.slice(0, count);
  }

  return events;
};


//--------------------------| Get plays

export const getPlays = () => {
  const plays = _.orderBy(getEntries('play'), play => play.fields.title.bg, 'asc');

  return plays;
};


//--------------------------| Get plays by stage

export const getPlaysByStage = () => {
  const stages = _.values(_.groupBy(getEntries('play'), play => play.fields.stage.bg.fields.id.bg));
  const plays = stages.map(stage => ({
    name: stage[0].fields.stage.bg.fields.title.bg,
    plays: _.orderBy(stage, play => play.fields.title.bg, 'asc')
  }));

  return plays;
};


//--------------------------| Get premiers

export const getPremieres = (count) => {
  const premieres = _.sortBy(getEntries('play').filter(play => play.fields.premiere.bg), item => moment(item.fields.events.bg[0].fields.date.bg));

  if (count) {
    return premieres.slice(0, count);
  }

  return premieres;
};


//--------------------------| Get news

export const getNews = (count) => {
  const news = _.sortBy(getEntries('news'), item => moment(item.fields.date.bg)).reverse();

  if (count) {
    return news.slice(0, count);
  }

  return news;
};


//--------------------------| Get actors

export const getActors = () => {
  const actors = _.orderBy(getEntries('person'), person => person.fields.name.bg, 'asc');

  return actors;
};


//--------------------------| Get entry

export const getEntry = (type, id) => {
  const entries = parse(localStorage.getItem('lt_content')).entries.filter(item => item.sys.contentType.sys.id === type);

  return entries.filter(entry => entry.fields.id.bg === id);
};


//--------------------------| Get results

export const getResults = q => ({
  actors: _.filter(
    getActors(), a => a.fields.name.bg.toLowerCase().indexOf(q.toLowerCase()) !== -1
  ),
  plays: _.filter(
    getPlays(), p => p.fields.title.bg.toLowerCase().indexOf(q.toLowerCase()) !== -1
  ),
  news: _.filter(
    getNews(), a => a.fields.title.bg.toLowerCase().indexOf(q.toLowerCase()) !== -1
  )
});


//--------------------------| Format date

export const formatDate = (date, format = `D MMMM, YYYY ${yearLabel}`) => moment(date).format(format);
