import React from 'react';

const Review = ({review}) => {
  return (
    <div>
      <img src={review.avatarUrl} />
      <span>{review.username}</span>
      <span>{review.createdAt}</span>
      <p>{review.text}</p>
      <hr />
    </div>
  )
};

export default Review;