const { Sequelize, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        age: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = User;