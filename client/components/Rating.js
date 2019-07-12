import React from 'react';

const Rating = ({rating}) => {
  const starsFilled = [];
  for (var i = 0; i < rating; i++){
    starsFilled.push(<ion-icon name="star"></ion-icon>)
  }
  const starsNotFilled = [];
  for (var i = 0; i < 5 - rating; i++){
    starsNotFilled.push(<ion-icon name="star" style={{backgroundColor: 'pink'}}></ion-icon>)
  }
  return (
    <div>
      {starsFilled}
      {starsNotFilled}
    </div>
  );
};

export default Rating;