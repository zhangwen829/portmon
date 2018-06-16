/* eslint-disable */

const dummyUser =
    [{email: 'wen@google.com', firstName: 'Wen', lastName: 'Zhang'}];

const dummySecurity = [
  {ticker: 'GOOG', type: 'EQUITY'}, {ticker: 'AMZN', type: 'EQUITY'},
  {ticker: 'TWRT', type: 'EQUITY'}, {ticker: 'FB', type: 'EQUITY'}
];

const dummyPortfolioData = [
  {position: 100, portfolioMetadatumId: 1, securityId: 1},
  {position: 200, portfolioMetadatumId: 1, securityId: 3},
  {position: 50, portfolioMetadatumId: 2, securityId: 1},
  {position: 300, portfolioMetadatumId: 2, securityId: 4}
];

const dummyPortfolioMetadata =
    [{name: 'Portfolio #1', userId: 1}, {name: 'Portfolio #2', userId: 1}];


module.exports = {
  dummyUser,
  dummySecurity,
  dummyPortfolioData,
  dummyPortfolioMetadata
};