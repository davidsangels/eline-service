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
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    communication_avg: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    cleanliness_avg: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    location_avg: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    checkin_avg: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    value_avg: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    overall_avg: {
      type: Sequelize.DECIMAL(10,2),
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