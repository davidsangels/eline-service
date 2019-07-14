import React from 'react';
import Review from './Review';

const styles = {
  divMain: {
    marginTop: '16px'
  }
};

const Reviews = ({reviews}) => {
  return (
    <div style={styles.divMain}>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Reviews;