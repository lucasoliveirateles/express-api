const { Sequelize } = require('sequelize');

const postgreConfig = require('../config/postgre');

const User = require('../app/models/User');

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(postgreConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
