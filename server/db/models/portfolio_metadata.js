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


PortfolioMetadata.listPortfolioMetadataByUserId = (userId) => {
  this.findAll({
    where: { userId }
  });
};

PortfolioMetadata.createPortfolioMetadata = (portfolio) => {
  this.create({
    name: portfolio.name
  });
};

PortfolioMetadata.deletePortfolioMetadata = (portfolioId) => {
  PortfolioMetadata.destroy({
    where: { id: portfolioId }
  });
};

module.exports = PortfolioMetadata;
