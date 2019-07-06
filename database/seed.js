const faker = require('faker');
const db = require('./index.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('infoPlace', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  timestamps: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Review extends Sequelize.Model {};
Review.init(
  // attributes
  {
    idPlace: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idUser: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    avatarUrl: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  // options
  {sequelize}
);

var createPlaceIds = function(){
  var placeIds = [];
  for (var i = 0; i < 5; i++){
    placeIds.push(faker.random.number())
  }
  return placeIds;
}

Review.sync({ force: true })
  .then(() => {
    var placeIds = createPlaceIds();
    for (var i = 0; i < placeIds.length; i++){
      var reviewsNum = Math.floor(Math.random() * Math.floor(60));
      for (var j = 0; j < reviewsNum; j++){
        Review.create({
          idPlace: placeIds[i],
          username: faker.name.findName(),
          idUser: faker.random.number(),
          createdAt: faker.date.past(),
          text: faker.lorem.text(),
          avatarUrl: faker.image.avatar()
        });
      }
    }
});