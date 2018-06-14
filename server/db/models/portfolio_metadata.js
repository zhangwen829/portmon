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

// CURD - Read
// Class Method
PortfolioMetadata.getPortfolioMetadataByUserId = (userId) => {
  this.findAll({ where: { userId } });
};

// CURD - Create
// Class Method
PortfolioMetadata.createNewPortfolio = (portfolioName) => {
  this.create({
    name: portfolioName
  });
};

// CURD - Update
// Instance Method
PortfolioMetadata.prototype.changePortfolioName = async (portfolioId, newName) => {
  const portfolio = await this.findOne({ where: { portfolioId } });
  portfolio.name = newName;
};

// CURD - Delete
// Instance Method
PortfolioMetadata.prototype.deletePortfolio = (portfolioId) => {
  PortfolioMetadata.destroy({ where: { portfolioId } });
};

module.exports = PortfolioMetadata;
