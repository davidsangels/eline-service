import React from 'react';
import {mockData} from '../sampleData';

const Reviews = () => {
  return (
    <div>
      {mockData.map(review => (
        <div>{review.text}</div>
      ))}
    </div>
  )
};

export default Reviews;