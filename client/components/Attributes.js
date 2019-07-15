import React from 'react';

import Rating from './Rating';
import css from '../styles/attributes.css';

const attributes = [
  {'Accuracy': 'accuracy_avg'},
  {'Communication': 'communication_avg'},
  {'Cleanliness': 'cleanliness_avg'},
  {'Location': 'location_avg'},
  {'Check-in': 'checkin_avg'},
  {'Value': 'value_avg'}
];

const Attributes = ({rating}) => {
  return (
    <div className='all-attributes'>
      <div className='left'>
        {attributes.slice(0, 3).map((attr, index) => {
          const nameAttr = Object.keys(attr)[0];
          const valueAttr = rating[Object.values(attr)[0]];
          return (
            <div key={index} className='div-attribute'>
              <div className='textAttribute'>{nameAttr}</div>
              <Rating rating={valueAttr} />
            </div>
          );
        })}
      </div>
      <div className='right'>
        {attributes.slice(3).map((attr, index) => {
          const nameAttr = Object.keys(attr)[0];
          const valueAttr = rating[Object.values(attr)[0]];
          return (
            <div key={index} className='div-attribute'>
              <div className='textAttribute'>{nameAttr}</div>
              <Rating rating={valueAttr} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attributes;