import React from 'react';
import Rating from './Rating';

const attributes = [
  'Accuracy',
  'Communication',
  'Cleanliness',
  'Location',
  'Check-in',
  'Value'
];

const Attributes = () => {
  return (
    <div>
      {attributes.map(attr => (
        <div key={attr}>
          <span>{attr}</span>
          <Rating />
        </div>
      ))}
    </div>
  )
};

export default Attributes;