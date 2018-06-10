const Sequelize = require('sequelize');
const db = require('../db');

const PortfolioData = db.define('portfolio_data', {
  id: {type: Sequelize.UUID, primaryKey: true},
  position: {type: Sequelize.DOUBLE, allowNull: false},
  security_id:
      {type: Sequelize.UUID},  // TODO(zhangwen829), security_id is foreign key.
  created: {type: Sequelize.DATE, allowNull: false}
});

PortfolioData.belongsTo(PortfolioMetadata);
// TOOD(zhangwen829), security and portfolio_data is many-to-many.

module.exports = PortfolioData;