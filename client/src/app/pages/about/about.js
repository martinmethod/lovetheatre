//====================================================|
// ABOUT


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Services
import { getEntry, getAsset } from '../../services/content';

// Database
import { pages as pagesLabels } from '../../../database/labels.json';

// Styles
import styles from './about.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Thumb from '../../components/atoms/thumb';

// Molecules
import Text from '../../components/molecules/text';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const About = () => {
  const page = getEntry('page', 'about')[0].fields;
  const { content } = page.content.bg;

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>
          {pagesLabels.about}
        </Heading>
      </AniContent>
      <Text>
        <AniContent>
          <Thumb
            src={getAsset(page.picture.bg.sys.id).fields.file.bg.url}
            title={pagesLabels.about}
          />
        </AniContent>
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

export default About;
