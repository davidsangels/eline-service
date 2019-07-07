const { Review } = require('./models.js')
const faker = require('faker')

var createPlaceIds = function(){
  var placeIds = []
  for (var i = 0; i < 5; i++){
    placeIds.push(faker.random.number())
  }
  return placeIds
}

Review.sync({ force: true })
.then(() => {
  var placeIds = createPlaceIds()
  for (var i = 0; i < placeIds.length; i++){
    var reviewsNum = Math.floor(Math.random() * Math.floor(60))
    for (var j = 0; j < reviewsNum; j++){
      Review.create({
        idPlace: placeIds[i],
        username: faker.name.findName(),
        idUser: faker.random.number(),
        createdAt: faker.date.past(),
        text: faker.lorem.text(),
        avatarUrl: faker.image.avatar()
      })
    }
  }
})