import React from 'react';
import {mockData} from '../sampleData';
import Review from './Review';

const Reviews = () => {
  return (
    <div>
      {mockData.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  )
};

export default Reviews;