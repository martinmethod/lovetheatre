//====================================================|
// ARTICLE


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Services
import { getEntry } from '../../services/content';

// Styles
import styles from './article.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Thumb from '../../components/atoms/thumb';
import Date from '../../components/atoms/date';

// Molecules
import Text from '../../components/molecules/text';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Article = ({ match }) => {
  const article = getEntry('news', match.params.id)[0].fields;

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <Text>
        <AniContent>
          <Heading>{article.title.bg}</Heading>
        </AniContent>
        <AniContent>
          <p style={{ textAlign: 'center' }}>
            <Date date={article.date.bg} />
          </p>
        </AniContent>
        <AniContent>
          <Thumb
            src={article.picture.bg.fields.file.bg.url}
            title={article.title.bg}
          />
        </AniContent>
        <AniContent>
          <div dangerouslySetInnerHTML = {{ __html: documentToHtmlString(article.text.bg) }}/>
        </AniContent>
      </Text>
    </AniWrapper>
  );
};


//--------------------------| Export

export default Article;
