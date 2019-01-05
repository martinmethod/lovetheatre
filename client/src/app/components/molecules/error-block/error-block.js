//====================================================|
// ERROR BLOCK


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './error-block.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';

// Atoms
import Heading from '../../atoms/heading';
import Error from '../../atoms/error';

// Animation
import AniContent from '../../animations/animation-content';


//--------------------------| Component

const ErrorBlock = (props) => {
  const {
    title,
    subtitle,
    optionsLabel,
    options
  } = props;

  return (
    <div className={styles.root}>
      <AniContent>
        <Error>{title}</Error>
      </AniContent>
      {
        subtitle && (
          <AniContent>
            <Heading size={2} type={'subtitle'}>{subtitle}</Heading>
          </AniContent>
        )
      }
      {
        options && optionsLabel && (
          <div className={styles.options}>
            <AniContent>
              <p>{optionsLabel}</p>
            </AniContent>
            <AniContent>
              <ul>
                {
                  options.map((option, i) => (
                    <li key={i}>
                      <p>
                        <a
                          onClick={option.handler}
                          className={classNames(
                            linkLight,
                            linkText
                          )}
                        >
                          <span>{option.label}</span>
                        </a>
                      </p>
                    </li>
                  ))
                }
              </ul>
            </AniContent>
          </div>
        )
      }
    </div>
  );
};


//--------------------------| Export

export default ErrorBlock;
