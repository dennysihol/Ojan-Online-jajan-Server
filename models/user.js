'use strict';
const {
  Model
} = require('sequelize');

const {hash} = require('../middlewares/password')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, {foreignKey: 'UserId'})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Data must be email formated"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 15],
          msg: "Password length minimal is 6"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', (user, option) => {
    user.password = hash(user.password)
  })

  User.addHook('beforeCreate', (user, option) => {
    user.role = 'user'
  })


  return User;
};