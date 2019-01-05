//====================================================|
// CONDITIONS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Services
import { getEntry } from '../../services/content';

// Database
import { pages as pagesLabels } from '../../../database/labels.json';

// Styles
import styles from './conditions.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';

// Molecules
import Text from '../../components/molecules/text';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Conditions = () => {
  const { content } = getEntry('page', 'conditions')[0].fields.content.bg;

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>{pagesLabels.conditions}</Heading>
      </AniContent>
      <Text>
        {
          content.map((item, i) => (
            <AniContent key={i}>
              {
                item.nodeType === 'heading-2' && <Heading size={2} type={'subtitle'}>{item.content[0].value}</Heading>
              }
              {
                item.nodeType === 'paragraph' && <p>{item.content[0].value}</p>
              }
            </AniContent>
          ))
        }
      </Text>
    </AniWrapper>
  );
};


//--------------------------| Export

export default Conditions;
