const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const {
  getAllPlaces,
  getReviewsById,
  getRatingsById,
  searchReviews
} = require('../database/controllers.js')

app.use(express.static('public'))

// Get all idPlaces
app.get('/api/places', (req, res) => {
  getAllPlaces((err, places) => {
    if(err){
      console.log(err)
    }
    else {
      res.send(places)
    }
  })
})

// Get all the reviews for a specific place
app.get('/api/reviews/:idPlace', (req, res) => {
  getReviewsById(req.params.idPlace, (err, reviews) => {
    if(err){
      console.log(err)
    }
    else {
      res.send(reviews)
    }
  })
})

// Get all the ratings for a specific place
app.get('/api/ratings/:idPlace', (req, res) => {
  getRatingsById(req.params.idPlace, (err, ratings) => {
    if(err){
      console.log(err)
    }
    else {
      res.send(ratings)
    }
  })
})

// Get all the reviews for a specific query and a specific idPlace
app.get('/api/reviews/search/:idPlace/:query', (req, res) => {
  searchReviews(req.params.idPlace, req.params.query, (err, reviews) => {
    if(err){
      console.log(err)
    }
    else {
      res.send(reviews)
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))