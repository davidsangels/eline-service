const Sequelize = require('sequelize')
const { sequelizeData } = require('../config.js')

const sequelize = new Sequelize(
  'infoPlace',
  sequelizeData.user,
  sequelizeData.password,
  {
    host: 'localhost',
    dialect: 'mysql',
    timestamps: false
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const Review = Sequelize.Model;

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
  {
    sequelize,
    modelName: 'reviews'
  }
);

module.exports = {
  Review
}