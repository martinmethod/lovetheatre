//====================================================|
// SLIDESHOW


//--------------------------| Import

// Libraries
import React from 'react';
import ImageGallery from 'react-image-gallery';

// Services
import { getAsset } from '../../../services/content';

// Styles
import styles from './slideshow.scss';
import 'react-image-gallery/styles/css/image-gallery.css';


//--------------------------| Component

const Slideshow = ({ gallery }) => {
  const images = gallery.map(i => ({
    original: getAsset(i.sys.id).fields.file.bg.url,
    thumbnail: getAsset(i.sys.id).fields.file.bg.url
  }));

  return (
    <div className={styles.root}>
      <ImageGallery
        items={images}
        thumbnailPosition={'right'}
        showFullscreenButton={false}
      />
    </div>
  );
};


//--------------------------| Export

export default Slideshow;
