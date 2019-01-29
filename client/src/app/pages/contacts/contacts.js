//====================================================|
// CONTACTS


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Services
import { getEntry } from '../../services/content';

// Database
import { pages as pagesLabels } from '../../../database/labels.json';
import { maps as mapsPaths } from '../../../database/content.json';

// Styles
import styles from './contacts.scss';
import { spacePageSection } from '../../../styles/tokens/tokens_spaces.scss';

// Atoms
import Heading from '../../components/atoms/heading';

// Molecules
import Map from '../../components/molecules/map';
import Text from '../../components/molecules/text';

// Animation
import AniWrapper from '../../components/animations/animation-wrapper';
import AniContent from '../../components/animations/animation-content';


//--------------------------| Page

const Contacts = () => {
  const page = getEntry('page', 'contacts')[0].fields;
  const { content } = page.content.bg;

  return (
    <AniWrapper className={classNames(styles.root, spacePageSection)}>
      <AniContent>
        <Heading>{pagesLabels.contacts}</Heading>
      </AniContent>
      <div className={styles.layout}>
        <AniContent className={styles.map}>
          <Map
            bgMaps={mapsPaths.bgMaps}
            gMaps={mapsPaths.gMaps}
          />
        </AniContent>
        <div className={styles.content}>
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
        </div>
      </div>
    </AniWrapper>
  );
};


//--------------------------| Export

export default Contacts;
