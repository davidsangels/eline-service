import React from 'react';
import $ from 'jquery';

import Search from './Search';
import Rating from './Rating';
import Attributes from './Attributes';
import Reviews from './Reviews';
import css from '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlace: null,
      places: [],
      reviewsByPlace: [],
      ratingsByPlace: [],
      textSearch: '',
      reviewsFound: [],
      showReviewsSearched: false
    };
    this.getReviewsByPlace = this.getReviewsByPlace.bind(this);
    this.getRatingsByPlace = this.getRatingsByPlace.bind(this);
    this.handleSearchReviews = this.handleSearchReviews.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    console.log(location)
    // logs all idPlaces
    $.ajax({
      type: 'GET',
      url: '/api/places'
    })
      .done(places => {
        const idPlaces = places.reduce((acc, cur) => {
          return acc.concat(cur.idPlace);
        }, []);

        console.log(
          '%c These are the idPlaces created in db: ',
          'color: blue; font-size: 16px',
          idPlaces
        );

        return this.setState({
          currentPlace: idPlaces[0],
          places: idPlaces
        });
      })
      .done(() => {
        this.getReviewsByPlace(this.state.currentPlace);
        this.getRatingsByPlace(this.state.currentPlace);
      });
  }

  getReviewsByPlace(id) {
    $.ajax({
      type: 'GET',
      url: `/reviews/${id}`
    })
      .done(data => {
        return this.setState({
          reviewsByPlace: data
        });
      });
  }

  getRatingsByPlace(id) {
    $.ajax({
      type: 'GET',
      url: `/reviews/ratings/${id}`
    })
      .done(data => {
        return this.setState({
          ratingsByPlace: data.reduce(cur => cur)
        });
      });
  }

  handleChangeInput(e) {
    return this.setState({
      textSearch: e.target.value
    });
  }

  handleSearchReviews(e) {
    e.preventDefault(e);
    const query = this.state.textSearch;
    const { currentPlace } = this.state;

    // ajax request to search query in db reviews model
    if (query !== '') {
      $.ajax({
        type: 'GET',
        url: `/reviews/search/${currentPlace}/${query}`
      })
        .done(data => {
          this.setState(state => {
            return {
              reviewsFound: data,
              showReviewsSearched: !state.showReviewsSearched
            }
          });
        })
    }
  }

  handleBackButton() {
    this.setState(state => {
      return {
        showReviewsSearched: !state.showReviewsSearched,
        textSearch: '',
      };
    });
    this.getReviewsByPlace(this.state.currentPlace);
  }

  render() {
    const {
      currentPlace,
      reviewsByPlace,
      ratingsByPlace,
      textSearch,
      showReviewsSearched,
      reviewsFound
    } = this.state;

    const allReviews = () => (
      <React.Fragment>
        <Attributes rating={ratingsByPlace}/>
        <Reviews reviews={reviewsByPlace} />
      </React.Fragment>
    );

    const reviewsSearched = () => (
      <React.Fragment>
        <div className='textSearch'>
          {reviewsFound.length === 0 && (
            <span className='span-text-search'>
              None of our guests have mentioned “<strong>{textSearch}</strong>”
            </span>
          )}
          {reviewsFound.length > 0 && (
            <span className='span-text-search'>
              {reviewsFound.length} guests have mentioned “<strong>{textSearch}</strong>”
            </span>
          )}
          <button
            onClick={this.handleBackButton}
            className='btn-all-reviews'
          >
            Back to all reviews
          </button>
        </div>
        <hr />
        <Reviews reviews={reviewsFound} />
      </React.Fragment>
    );

    return (
      <div className='app'>
        {currentPlace !== 'null' && (
          <div>
            <div  className='header'>
              <div className='numReviews'>
                <div>{reviewsByPlace.length} Reviews</div>
                <Rating rating={ratingsByPlace.overall_avg}/>
              </div>
              <Search
                handleSearch={this.handleSearchReviews}
                handleChange={this.handleChangeInput}
                text={textSearch}
              />
            </div>
            <hr />
            {!showReviewsSearched && allReviews()}
            {showReviewsSearched && reviewsSearched()}
          </div>
        )}
      </div>
    );
  }
}

export default App;