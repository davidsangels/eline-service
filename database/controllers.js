const { Review, AverageRating } = require('./models.js')

const getAllPlaces = (callback) => {
  AverageRating.findAll({
    attributes: ['idPlace']
  })
  .then(data => {callback(null, data)})
  .catch(err => {callback(err)})
}

const getReviewsById = (id, callback) => {
  Review.findAll({
    where: {
      idPlace: id
    }
  })
  .then(data => {callback(null, data)})
  .catch(err => {callback(err)})
}

const getRatingsById = (id, callback) => {
  AverageRating.findAll({
    where: {
      idPlace: id
    }
  })
  .then(data => {callback(null, data)})
  .catch(err => {callback(err)})
}

module.exports = {
  getAllPlaces,
  getReviewsById,
  getRatingsById
}