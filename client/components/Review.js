import React from 'react';

const Review = ({review}) => {
  return (
    <div>
      <img src={review.avatarUrl} height="50" width="50" />
      <span>{review.username}</span>
      <span>{review.createdAt}</span>
      <p>{review.text}</p>
      <hr />
    </div>
  );
};

export default Review;