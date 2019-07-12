import React from 'react';

const Star = (type) => {
  const getStyle = () => {
    if (type === 'filled'){
      return {color: 'red'}
    }
    else if (type === 'partialFilled'){
      return {color: 'purple'}
    }
    else {
      return {color: 'green'}
    }
  }
  return (
    <ion-icon name="star" type={type} style={getStyle()}>
    </ion-icon>
  )
}

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

  return (
    <div>
      {buildStars()}
    </div>
  )
};

export default Rating;