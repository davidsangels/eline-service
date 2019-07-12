import React from 'react';
import $ from 'jquery';

import Search from './Search';
import Rating from './Rating';
import Attributes from './Attributes';
import Reviews from './Reviews';
import Pagination from './Pagination';
import {mockData} from '../sampleData';

const numBtn = Math.ceil(mockData.length / 7);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: 1,
      currentPlace: null,
      places: []
    };
  }

  componentDidMount(){
    // logs all idPlaces
    $.ajax({
      type: 'GET',
      url: '/api/places'
    })
    .done(places => {
      const idPlaces = places.reduce((acc, cur) => {
        return acc.concat(cur.idPlace)
      }, []);

      console.log(
        "%c These are the idPlaces available: ",
        "color: blue; font-size: 16px",
        idPlaces,
      );

      return this.setState({
        currentPlace: idPlaces[0],
        places: idPlaces
      })
    })
  }

  render() {
    const { currentPlace, places } = this.state;

    return (
      <div>
        {currentPlace !== 'null' && (
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h4>357 Reviews</h4>
              <Rating />
              <Search />
            </div>
            <hr />
            <Attributes />
            <Reviews reviews={mockData} />
            <Pagination
              numBtn={numBtn}
              activeBtn={this.state.activeBtn}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;