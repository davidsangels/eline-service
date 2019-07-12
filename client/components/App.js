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
      places: [],
      reviewsByPlace: [],
      ratingsByPlace: [],
      pagination: {
        start: 0,
        end: 7,
        page: 1
      }
    };
    this.getReviewsByPlace = this.getReviewsByPlace.bind(this);
    this.getRatingsByPlace = this.getRatingsByPlace.bind(this);
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
    .done(() => {
      this.getReviewsByPlace(this.state.currentPlace)
      this.getRatingsByPlace(this.state.currentPlace)
    })
  }

  getReviewsByPlace(id){
    $.ajax({
      type: 'GET',
      url: `/api/reviews/${id}`
    })
    .done(data => {
      return this.setState({
        reviewsByPlace: data
      })
    })
  }

  getRatingsByPlace(id){
    $.ajax({
      type: 'GET',
      url: `/api/ratings/${id}`
    })
    .done(data => {
      return this.setState({
        ratingsByPlace: data.reduce(cur => cur)
      })
    })
  }

  render() {
    const {
      currentPlace,
      reviewsByPlace,
      ratingsByPlace,
      pagination
    } = this.state;

    return (
      <div>
        {currentPlace !== 'null' && (
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h4>357 Reviews</h4>
              <Rating rating={ratingsByPlace.overall_avg} />
              <Search />
            </div>
            <hr />
            <Attributes rating={ratingsByPlace}/>
            <Reviews
              reviews={reviewsByPlace.slice(pagination.start, pagination.end)}
            />
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