const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioMetadata = db.define('portfolio_metadata', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

PortfolioMetadata.listPortfolioMetadataByUserId = function (userId) {
  return this.findAll({
    where: { userId }
  });
};

module.exports = PortfolioMetadata;
