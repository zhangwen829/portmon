const Sequelize = require('sequelize');
const db = require('../db');
const Security = require('./security');

const PortfolioData = db.define('portfolio_data', {
  position: {type: Sequelize.DOUBLE, allowNull: false},
});

PortfolioData.listPortfolioDataByPortfolioMetadataId = function(
    portfolioMetadatumId) {
  return this.findAll({where: {portfolioMetadatumId}, include: [Security]});
};

module.exports = PortfolioData;
