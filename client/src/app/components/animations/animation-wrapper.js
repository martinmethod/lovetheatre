//====================================================|
// WRAPPER ANIMATION


//--------------------------| Import

// Libraries
import React from 'react';
import posed from 'react-pose';


//--------------------------| Animation

const AniWrapper = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 0, staggerDirection: -1 }
});


//--------------------------| Export

export default AniWrapper;
