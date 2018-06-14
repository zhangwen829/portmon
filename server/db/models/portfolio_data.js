const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioData = db.define('portfolio_data', {
  id: {type: Sequelize.UUID, primaryKey: true},
  position: {type: Sequelize.DOUBLE, allowNull: false},
  created: {type: Sequelize.DATE, allowNull: false}
});

module.exports = PortfolioData;