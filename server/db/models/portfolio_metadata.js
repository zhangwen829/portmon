const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioMetadata = db.define('portfolio_metadata', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false
  }
});


PortfolioMetadata.getPortfolioMetadataByUserId = (userId) => {
  this.findAll({ where: { userId } });
};

module.exports = PortfolioMetadata;
