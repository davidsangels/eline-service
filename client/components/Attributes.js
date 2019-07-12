import React from 'react';
import Rating from './Rating';

const attributes = [
  {'Accuracy': 'accuracy_avg'},
  {'Communication': 'communication_avg'},
  {'Cleanliness': 'cleanliness_avg'},
  {'Location': 'location_avg'},
  {'Check-in': 'checkin_avg'},
  {'Value': 'value_avg'}
];

const Attributes = ({rating}) => {
  return (
    <div>
      {attributes.map((attr, index) => {
        const nameAttr = Object.keys(attr)[0];
        const valueAttr = rating[Object.values(attr)[0]];
        return(
          <div key={index}>
          <span>{nameAttr}</span>
          <Rating rating={valueAttr} />
        </div>
        )
      })}
    </div>
  );
};

export default Attributes;