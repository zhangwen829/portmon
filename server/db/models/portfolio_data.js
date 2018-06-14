const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioData = db.define('portfolio_data', {
  position: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
});

module.exports = PortfolioData;
