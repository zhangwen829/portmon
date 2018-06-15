const User = require('./user');
const Security = require('./security');
const PortfolioMetadata = require('./portfolio_metadata');
const PortfolioData = require('./portfolio_data');

PortfolioMetadata.belongsTo(User);
User.hasMany(PortfolioMetadata);

PortfolioData.belongsTo(PortfolioMetadata);
PortfolioMetadata.hasMany(PortfolioData);

PortfolioData.belongsTo(Security);
Security.hasMany(PortfolioData);

module.exports = { User, Security, PortfolioMetadata, PortfolioData };
