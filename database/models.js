const Sequelize = require('sequelize')
const sequelize = require('./index.js')

const Review = Sequelize.Model;
// const AverageRating = Sequelize.Model;

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
    },
    accuracy_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    communication_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cleanliness_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    location_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    checkin_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    value_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    overall_rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  },
  // options:
  {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  }
);

// AverageRating.init(
//   // attributes:
//   {
//     idPlace: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     accuracy_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     communication_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     cleanliness_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     location_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     checkin_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     value_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     overall_avg: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//   },
//   // options:
//   {
//     sequelize,
//     modelName: 'averageRatings',
//     timestamps: false
//   }
// );

module.exports = {
  Review,
  // AverageRating
}