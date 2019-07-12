const Sequelize = require('sequelize')
const sequelize = require('./index.js')

const Model = Sequelize.Model;

class Review extends Model {};

Review.init(
  // attributes:
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
  // options:
  {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  }
);

class AverageRating extends Model {};
AverageRating.init(
  // attributes:
  {
    idPlace: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    accuracy_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    communication_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cleanliness_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    location_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    checkin_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    value_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    overall_avg: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  },
  // options:
  {
    sequelize,
    modelName: 'averageRatings',
    timestamps: false
  }
);

module.exports = {
  Review,
  AverageRating
}