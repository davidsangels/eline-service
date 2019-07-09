const Sequelize = require('sequelize')
const sequelize = require('./index.js')

const Review = Sequelize.Model;

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

module.exports = Review