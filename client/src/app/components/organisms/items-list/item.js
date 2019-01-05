//====================================================|
// ITEMS LIST


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import { item } from './items-list.scss';

// Animation
import AniContent from '../../animations/animation-content';


//--------------------------| Component

const ListItem = ({ children }) => (
  <AniContent className={item}>
    {children}
  </AniContent>
);


//--------------------------| Export

export default ListItem;
