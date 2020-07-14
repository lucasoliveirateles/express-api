require('dotenv/config');

module.exports = {
  dialect: process.env.POSTGRE_DIALECT,
  host: process.env.POSTGRE_HOST,
  username: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASS,
  database: process.env.POSTGRE_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
