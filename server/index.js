const express = require('express')
const app = express()
const port = 3000
const {
  getReviewsById,
  getRatingsById
} = require('../database/controllers.js')

app.use(express.static('public'))

// Get all the reviews for a specific place.
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

// Get all the ratings for a specific place.
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))