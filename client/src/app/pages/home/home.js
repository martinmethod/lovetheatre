//====================================================|
// HOME


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import {
  getCoverPlays,
  getEvents,
  getPremieres,
  getNews
} from '../../services/content';

// Styles
import styles from './home.scss';

// Organisms
import Jumbotron from '../../components/organisms/jumbotron';
import Upcoming from '../../components/organisms/upcoming';
import Premieres from '../../components/organisms/premieres';
import LatestNews from '../../components/organisms/latest-news';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Home = () => (
  <AniWrapper className={styles.root}>
    <AniContent>
      <Jumbotron data={getCoverPlays()} />
    </AniContent>
    <Upcoming data={getEvents(6)} />
    <Premieres data={getPremieres(6)} />
    <LatestNews data={getNews(6)} />
  </AniWrapper>
);


//--------------------------| Export

export default Home;
