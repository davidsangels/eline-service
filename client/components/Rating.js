import React from 'react';

const Star = (type) => (
  <ion-icon name="star" type={type}></ion-icon>
);

const Rating = ({rating}) => {
  const typeStars = (value) => {
    const result = {};

    if(value % 1 === 0){
      result.notFilled = 5 - value;
      result.filled = 5 - result.notFilled;
      result.partialFilled = 0;
    } else {
      result.filled = Math.floor(value);
      result.partialFilled = Number((value % 1).toFixed(2));
      result.notFilled = 5 - result.filled - Math.ceil(result.partialFilled);
    }
    return result;
  }

  const buildStars = () => {
    const stars = []
    const types = typeStars(rating);
    for (var key in types){
      const type = key;
      const numStars = types[key]
      for (let i = 0; i < numStars; i++){
        stars.push(Star(type))
      }
    }
    return stars;
  }

  // buildStars()

  return (
    <div>
      {buildStars()}
    </div>

  )



};

export default Rating;

// const starsFilled = [];
//   for (var i = 0; i < rating; i++){
//     starsFilled.push(
//       <ion-icon name="star" key={i}></ion-icon>
//     )
//   }
//   const starsNotFilled = [];
//   for (var i = 0; i < 5 - rating; i++){
//     starsNotFilled.push(
//       <ion-icon name="star" key={i} style={{color: 'pink'}}></ion-icon>
//     )
//   }

//   return (
//     <div>
//       {starsFilled}
//       {starsNotFilled}
//     </div>
//   );