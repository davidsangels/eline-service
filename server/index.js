const express = require('express')
const app = express()
const port = 3000
const { getReviewsById } = require('../database/controllers.js')

app.use(express.static('public'))

// GET /api/reviews/:placeId
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))