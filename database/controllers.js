const { Review } = require('./models.js')

const getReviewsById = (id, callback) => {
  console.log(id)
  Review.findAll({
    where: {
      idPlace: id
    }
  })
  .then(data => {callback(null, data)})
  .catch(err => {callback(err)})
}

module.exports = {
  getReviewsById
}