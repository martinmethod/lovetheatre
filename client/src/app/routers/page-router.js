//====================================================|
// PAGE ROUTER


//--------------------------| Import

// Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import ScrollToTop from './scroll-to-top';

// Services
import {
  getEntry,
  getEvents,
  getNews,
  getActors,
  getPlaysByStage
} from '../services/content';

// Database
import pages from '../../database/pages';

// Styles
import styles from '../app.scss';

// Organisms
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';

// Pages
import Home from '../pages/home';
import Events from '../pages/events';
import Plays from '../pages/plays';
import Play from '../pages/play';
import Actors from '../pages/actors';
import Actor from '../pages/actor';
import News from '../pages/news';
import Article from '../pages/article';
import About from '../pages/about';
import Contacts from '../pages/contacts';
import SearchResults from '../pages/search-results';
import Conditions from '../pages/conditions';
import Error404 from '../pages/error404';

// Animation
import AniWrapper from '../components/animations/animation-wrapper';
import AniContent from '../components/animations/animation-content';


//--------------------------| Animation

const Animation = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
});


//--------------------------| Router

const PageRouter = () => (
  <ScrollToTop>
    <Route
      render={({ location }) => (
        <PoseGroup>
          <Animation
            key={location.pathname}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1
            }}
          >
            <AniWrapper>
              <AniContent>
                <Header />
              </AniContent>
            </AniWrapper>
            <main className={styles.main}>
              <Switch location={location}>
                <Route path={pages.home} component={Home} exact />
                <Route path={pages.events} render={() => <Events data={getEvents()} />} />
                <Route path={pages.plays} render={() => <Plays data={getPlaysByStage()} />} exact />
                <Route path={`${pages.plays}/:id`} render={
                  (props) => {
                    if (getEntry('play', props.match.params.id).length === 0) {
                      return <Error404 />;
                    }

                    return <Play {...props} />;
                  }
                } />
                <Route path={pages.actors} render={() => <Actors data={getActors()} />} exact />
                <Route path={`${pages.actors}/:id`} render={
                  (props) => {
                    if (getEntry('person', props.match.params.id).length === 0) {
                      return <Error404 />;
                    }

                    return <Actor {...props} />;
                  }
                } />
                <Route path={pages.news} render={() => <News data={getNews()} />} exact />
                <Route path={`${pages.news}/:id`} render={
                  (props) => {
                    if (getEntry('news', props.match.params.id).length === 0) {
                      return <Error404 />;
                    }

                    return <Article {...props} />;
                  }
                } />
                <Route path={pages.about} component={About} />
                <Route path={pages.contacts} component={Contacts} />
                <Route path={`${pages.search}/:id`} component={SearchResults} />
                <Route path={pages.conditions} component={Conditions} />
                <Route component={Error404} />
              </Switch>
            </main>
            <AniWrapper>
              <AniContent>
                <Footer />
              </AniContent>
            </AniWrapper>
          </Animation>
        </PoseGroup>
      )}
    />
  </ScrollToTop>
);


//--------------------------| Export

export default PageRouter;
