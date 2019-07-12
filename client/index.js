import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from './components/App';

// get all idPlaces
$.ajax({
  type: 'GET',
  url: '/api/places'
})
.done(places => {
  console.log(
    "%c These are the idPlaces available: ",
    "color: blue; font-size: 16px",
    places,
  )})

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);