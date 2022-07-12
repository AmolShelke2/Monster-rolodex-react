import React from 'react';

import { CardList } from '../card-list/card-list.component';
import './card-styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster-img"
      src={`https://robohash.org/${props.monster.id}?set=set2&sizes='138x138'`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);
