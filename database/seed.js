const { Review, AverageRating } = require('./models.js')
const faker = require('faker')

const createPlaceIds = function(){
  var placeIds = []
  for (var i = 0; i < 5; i++){
    placeIds.push(faker.random.number())
  }
  return placeIds
}

const placeIds = createPlaceIds()

Review.sync({ force: true })
.then(() => {
  for (var i = 0; i < placeIds.length; i++){
    var reviewsNum = Math.floor(Math.random() * Math.floor(60))
    for (var j = 0; j < reviewsNum; j++){
      let newReview = {
        idPlace: placeIds[i],
        username: faker.name.findName(),
        idUser: faker.random.number(),
        createdAt: faker.date.past(),
        text: faker.lorem.text(),
        avatarUrl: faker.image.avatar(),
      }
      Review.create(newReview)
    }
  }
})

AverageRating.sync({ force: true })
.then(() => {
    for (var i = 0; i < placeIds.length; i++){
      let newRating = {
        idPlace: placeIds[i],
        accuracy_avg: faker.random.number(5),
        communication_avg: faker.random.number(5),
        cleanliness_avg: faker.random.number(5),
        location_avg: faker.random.number(5),
        checkin_avg: faker.random.number(5),
        value_avg: faker.random.number(5),
        overall_avg: faker.random.number(5),
      }
      AverageRating.create(newRating)
    }
})
