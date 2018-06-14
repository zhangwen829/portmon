const User = require('./user');
const Security = require('./security');
const PortfolioMetadata = require('./portfolio_data');
const PortfolioData = require('./portfolio_data');

// one user can have many portfolios
PortfolioMetadata.belongsTo(User);
User.hasMany(PortfolioMetadata);

// one portfolio can have many security
// one security belongs to many portfolios

PortfolioData.belongsTo(PortfolioMetadata);
PortfolioMetadata.hasMany(PortfolioData);

Security.belongsTo(PortfolioData);
PortfolioData.hasMany(Security);

module.exports = {User, Security, PortfolioMetadata, PortfolioData};
