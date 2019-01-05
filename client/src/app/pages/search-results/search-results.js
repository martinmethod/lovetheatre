//====================================================|
// SEARCH RESULTS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// Services
import { getResults } from '../../services/content';

// Database
import {
  home as homePath,
  news as newsPath
} from '../../../database/pages.json';
import {
  errorsOptions,
  whatYouCanDo as whatYouCanDoLabel,
  pages as pagesLabels,
  errors as errorsLabels,
  within as inLabel,
  re as forLabel
} from '../../../database/labels.json';

// Styles
import styles from './search-results.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';
import { linkLight, linkText } from '../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Divider from '../../components/atoms/divider';

// Molecules
import ErrorBlock from '../../components/molecules/error-block';
import PlayBanner from '../../components/molecules/play-banner';
import AvatarBanner from '../../components/molecules/avatar-banner';
import ThumbLink from '../../components/molecules/thumb-link';

// Organisms
import ItemsList from '../../components/organisms/items-list';
import ListItem from '../../components/organisms/items-list/item';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const SearchResults = ({ match, history }) => {
  const { actors, plays, news } = getResults(match.params.id);
  const results = actors.length + plays.length + news.length !== 0;

  console.log('Actors', actors);

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      {
        !results && (
          <div className={styles.noResults}>
            <ErrorBlock
              title={errorsLabels.noResults}
              optionsLabel={whatYouCanDoLabel}
              options={[
                {
                  label: errorsOptions.back,
                  handler: () => {
                    history.goBack();
                  }
                },
                {
                  label: errorsOptions.searchAgain,
                  handler: () => {
                    document.getElementById('search-checkbox').checked = true;
                    document.getElementById('search-input').focus();
                  }
                },
                {
                  label: errorsOptions.home,
                  handler: () => {
                    history.push(homePath);
                  }
                }
              ]}
            />
          </div>
        )
      }
      {
        results && (
          <>
            <AniContent>
              <Heading>{`${pagesLabels.search} ${forLabel} „${match.params.id}“`}</Heading>
            </AniContent>
            {
              plays.length > 0 && (
                <div className={styles.resultsGroup}>
                  <AniContent>
                    <Heading size={2} type={'subtitle'}>{`${inLabel} ${pagesLabels.plays}:`}</Heading>
                  </AniContent>
                  <ItemsList centered>
                    {
                      plays.map(p => (
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
                </div>
              )
            }
            {
              (
                (plays.length > 0 && actors.length > 0) || (plays.length > 0 && news.length > 0)
              ) && <AniContent><Divider /></AniContent>
            }
            {
              actors.length > 0 && (
                <div className={styles.resultsGroup}>
                  <AniContent>
                    <Heading size={2} type={'subtitle'}>{`${inLabel} ${pagesLabels.actors}:`}</Heading>
                  </AniContent>
                  <ItemsList centered>
                    {
                      actors.map(actor => (
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
                </div>
              )
            }
            {
              actors.length > 0 && news.length > 0 && <AniContent><Divider /></AniContent>
            }
            {
              news.length > 0 && (
                <div className={styles.resultsGroup}>
                  <AniContent>
                    <Heading size={2} type={'subtitle'}>{`${inLabel} ${pagesLabels.news}:`}</Heading>
                  </AniContent>
                  <ItemsList centered>
                    {
                      news.map(n => (
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
                </div>
              )
            }
          </>
        )
      }
    </AniWrapper>
  );
};


//--------------------------| Export

export default withRouter(SearchResults);
