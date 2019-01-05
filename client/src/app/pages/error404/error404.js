//====================================================|
// ERROR 404


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// Database
import {
  errorsOptions,
  noSuchPage as noSuchPageLabel,
  whatYouCanDo as whatYouCanDoLabel,
  errors as errorsLabels
} from '../../../database/labels.json';
import { home as homePath } from '../../../database/pages.json';

// Styles
import styles from './error404.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import ErrorBlock from '../../components/molecules/error-block';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';


//--------------------------| Page

const Error404 = ({ history }) => (
  <AniWrapper className={classNames(styles.root, spacePageSection)}>
    <ErrorBlock
      title={errorsLabels.error404}
      subtitle={noSuchPageLabel}
      optionsLabel={whatYouCanDoLabel}
      options={[
        {
          label: errorsOptions.back,
          handler: () => {
            history.goBack();
          }
        },
        {
          label: errorsOptions.search,
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
  </AniWrapper>
);


//--------------------------| Export

export default withRouter(Error404);
