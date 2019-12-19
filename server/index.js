const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const {
  getReviewsById,
  getRatingsById,
  searchReviews
} = require('../database/controllers.js')

app.use('/:id',express.static('public'))

// Get all the reviews for a specific place
app.get('/reviews/:idPlace', (req, res) => {
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
app.get('/reviews/ratings/:idPlace', (req, res) => {
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
app.get('/reviews/search/:idPlace/:query', (req, res) => {
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