const Sequelize = require('sequelize');
const db = require('../db');

const Security = db.define('portfolio_metadata', {
  id: {type: Sequelize.UUID, primaryKey: true},
  ticker: {type: Sequelize.STRING, allowNull: false},
  type: {type: Sequelize.ENUM('EQUITY, BOND'), allowNull: false}
});

module.exports = Security;