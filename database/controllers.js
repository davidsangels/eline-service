const { Review, AverageRating } = require('./models.js')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

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

const searchReviews = (idPlace, query, callback) => {
  Review.findAll({
    where: {
      idPlace: idPlace,
      text: {
        [Op.substring]: `%${query}%`
      }
    }
  })
  .then(data => {callback(null, data)})
  .catch(err => {callback(err)})
}

module.exports = {
  getAllPlaces,
  getReviewsById,
  getRatingsById,
  searchReviews
}