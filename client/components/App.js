import React from 'react';
import $ from 'jquery';

import Search from './Search';
import Rating from './Rating';
import Attributes from './Attributes';
import Reviews from './Reviews';
import Pagination from './Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: 1,
      currentPlace: null,
      places: [],
      reviewsByPlace: [],
      ratingsByPlace: [],
      currentPage: 1,
      reviewsStart: 0,
      reviewsEnd: 7
    };
    this.getReviewsByPlace = this.getReviewsByPlace.bind(this);
    this.getRatingsByPlace = this.getRatingsByPlace.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
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

  handleChangePage(value){
    const { currentPage, reviewsByPlace } = this.state;

    return this.setState({
      currentPage: value
    })

  }

  render() {
    const {
      currentPlace,
      reviewsByPlace,
      ratingsByPlace,
      currentPage,
      reviewsStart,
      reviewsEnd
    } = this.state;
    const numBtns = Math.ceil(reviewsByPlace.length / 7);

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
              reviews={reviewsByPlace.slice(reviewsStart, reviewsEnd)}
            />
            <Pagination
              currentPage={currentPage}
              numBtns={numBtns}
              changePage={this.handleChangePage}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;