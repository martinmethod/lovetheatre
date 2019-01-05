//====================================================|
// CONTENT ANIMATION


//--------------------------| Import

// Libraries
import React from 'react';
import posed from 'react-pose';


//--------------------------| Animation

const AniContent = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 300, opacity: 0 }
});


//--------------------------| Export

export default AniContent;
