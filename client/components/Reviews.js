import React from 'react';
import Review from './Review';

const Reviews = ({reviews}) => {
  return (
    <div>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Reviews;