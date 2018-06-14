const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioData = db.define('portfolio_data', {
  position: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
});

PortfolioData.listPortfolioDataByPortfolioMetadataId = function (portfolioMetadatumId) {
  return this.findAll({
    where: { portfolioMetadatumId }
  });
};

module.exports = PortfolioData;
