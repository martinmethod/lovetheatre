//====================================================|
// MAP


//--------------------------| Import

// Libraries
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import classNames from 'classnames';

// Database
import {
  showBGMaps as showBGMapsLabel,
  showGMaps as showGMapsLabel
} from '../../../../database/labels.json';

// Styles
import styles from './map.scss';
import { linkLight, linkText } from '../../../../styles/tokens/tokens_links.scss';


//--------------------------| Component

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { bgMaps, gMaps } = this.props;

    const Card = ({ frame, switcher }) => (
      <div>
        <div className={styles.frame}>
          <iframe
            src={frame}
            frameBorder='0'
            allowFullScreen
            width='100%'
          />
        </div>
        <a
          className={classNames(
            styles.switch,
            linkLight,
            linkText
          )}
          onClick={this.handleClick}
        >
          <span>{switcher}</span>
        </a>
      </div>
    );

    return (
      <div className={styles.root}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key='front'>
            <div className={styles.frame}>
              <iframe
                src={bgMaps}
                frameBorder='0'
                allowFullScreen
              />
            </div>
            <a
              className={classNames(
                styles.switch,
                linkLight,
                linkText
              )}
              onClick={this.handleClick}
            >
              <span>{showGMapsLabel}</span>
            </a>
          </div>
          <div key='back'>
            <div className={styles.frame}>
              <iframe
                src={gMaps}
                frameBorder='0'
                allowFullScreen
              />
            </div>
            <a
              className={classNames(
                styles.switch,
                linkLight,
                linkText
              )}
              onClick={this.handleClick}
            >
              <span>{showBGMapsLabel}</span>
            </a>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}


//--------------------------| Export

export default Map;
