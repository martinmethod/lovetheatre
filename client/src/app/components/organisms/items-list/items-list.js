//====================================================|
// ITEMS LIST


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import { list, center } from './items-list.scss';


//--------------------------| Component

const ItemsList = ({ children, centered }) => (
  <div className={classNames(list, { [center]: centered })}>
    {children}
  </div>
);


//--------------------------| Export

export default ItemsList;
