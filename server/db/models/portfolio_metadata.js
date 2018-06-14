const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioMetadata = db.define('portfolio_metadata', {
  // id: {
  //   type: Sequelize.UUID,
  //   primaryKey: true
  // },
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

// PortfolioMetadata.createPortfolioMetadata = function (portfolio) {
//   return this.create({
//     name: portfolio.name
//   });
// };

// PortfolioMetadata.deletePortfolioMetadata = function (portfolioId) {
//   return PortfolioMetadata.destroy({
//     where: { id: portfolioId }
//   });
// };

module.exports = PortfolioMetadata;
