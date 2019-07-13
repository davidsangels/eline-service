import React from 'react';

const Star = (type, index) => {
  const getStyle = () => {
    const otherStyles = {
      fontSize: 24
    }
    if (type === 'filled'){
      // green color of airbnb star rating
      return {fill: '#008489', ...otherStyles}
    }
    else if (type === 'partialFilled'){
      // TODO: fill with the value of partialFilled
      return {fill: '#008489', ...otherStyles}
    }
    else {
      // grey color of airbnb star rating (similar)
      return {fill: '#CECBCB', ...otherStyles}
    }
  }
  return (
    <ion-icon
      name="star"
      type={type}
      style={getStyle()}
      key={`${type},${index}`}
    ></ion-icon>
  )
}

const Rating = ({rating}) => {
  const typeStars = ((value) => {
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
  })(rating);

  const buildStars = () => {
    const stars = []
    for (var key in typeStars){
      const type = key;
      const numStars = typeStars[key]
      for (let i = 0; i < numStars; i++){
        stars.push(Star(type, i))
      }
    }
    return stars;
  }

  return (
    <div style={styles.divMain}>
      {buildStars()}
    </div>
  )
};

const styles={
  divMain: {
    width: '25%',
    alignSelf: 'flex-end'
  }
}

export default Rating;