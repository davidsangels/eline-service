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
    <div style={styles.divMain}>
      <div style={styles.divLeft}>
      {attributes.slice(0,3).map((attr, index) => {
        const nameAttr = Object.keys(attr)[0];
        const valueAttr = rating[Object.values(attr)[0]];
        return(
          <div key={index} style={styles.divAttribute}>
            <div style={styles.textAttribute}>{nameAttr}</div>
            <Rating rating={valueAttr} />
          </div>
        )
      })}
      </div>
      <div style={styles.divRight}>
      {attributes.slice(3).map((attr, index) => {
        const nameAttr = Object.keys(attr)[0];
        const valueAttr = rating[Object.values(attr)[0]];
        return(
          <div key={index} style={styles.divAttribute}>
            <div style={styles.textAttribute}>{nameAttr}</div>
            <Rating rating={valueAttr} />
          </div>
        )
      })}
      </div>
    </div>
  );
};

const styles = {
  divMain: {
    display: 'flex',
  },
  divLeft: {
    flex: 1,
    padding: '0 16px 0 0'
    // alignItems: 'stretch'
  },
  divRight: {
    flex: 1,
    padding: '0 0 0 8px'
    // alignItems: 'stretch'
  },
  divAttribute: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  textAttribute: {
    margin: '0px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '16px',
    fontWeight: '200',
    lineHeight: '1.375em',
    color: '#484848',
  }
}
export default Attributes;