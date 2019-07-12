import React from 'react';

// needs to refine this component
// the ratings must be with two decimal houses
// the stars should render a different background if value is not an integer (or decimal != 00)
const Rating = ({rating}) => {
  const starsFilled = [];
  for (var i = 0; i < rating; i++){
    starsFilled.push(
      <ion-icon name="star" key={i}></ion-icon>
    )
  }
  const starsNotFilled = [];
  for (var i = 0; i < 5 - rating; i++){
    starsNotFilled.push(
      <ion-icon name="star" key={i} style={{color: 'pink'}}></ion-icon>
    )
  }
  return (
    <div>
      {starsFilled}
      {starsNotFilled}
    </div>
  );
};

export default Rating;