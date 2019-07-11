const { Review } = require('./models.js')
// const { AverageRating } = require('./models.js')
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
      Review.create({
        idPlace: placeIds[i],
        username: faker.name.findName(),
        idUser: faker.random.number(),
        createdAt: faker.date.past(),
        text: faker.lorem.text(),
        avatarUrl: faker.image.avatar(),
        accuracy_rating: faker.random.number(5),
        communication_rating: faker.random.number(5),
        cleanliness_rating: faker.random.number(5),
        location_rating: faker.random.number(5),
        checkin_rating: faker.random.number(5),
        value_rating: faker.random.number(5),
        overall_rating: faker.random.number(5)
      })
    }
  }
})

// AverageRating.sync({ force: true })
// .then(() => {

// })