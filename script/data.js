/* eslint-disable */

const dummyUser = [
  {email: 'wen@google.com', firstName: 'Wen', lastName: 'Zhang'},
  {email: 'ling@google.com', firstName: 'Ling', lastName: 'Xu'}
];

const dummySecurity = [
  {ticker: 'GOOG', type: 'EQUITY'},
  {ticker: 'AMZN', type: 'EQUITY'},
  {ticker: 'TWTR', type: 'EQUITY'},
  {ticker: 'FB', type: 'EQUITY'},
  {ticker: 'MSFT', type: 'EQUITY'},
  {ticker: 'EBAY', type: 'EQUITY'},
];

const dummyPortfolioData = [
  {position: 100, portfolioMetadatumId: 1, securityId: 1},
  {position: 200, portfolioMetadatumId: 1, securityId: 3},
  {position: 150, portfolioMetadatumId: 1, securityId: 5},
  {position: 50, portfolioMetadatumId: 2, securityId: 1},
  {position: 300, portfolioMetadatumId: 2, securityId: 4},
  {position: 100, portfolioMetadatumId: 2, securityId: 2},
  {position: 200, portfolioMetadatumId: 2, securityId: 6},
  {position: 150, portfolioMetadatumId: 3, securityId: 5},
  {position: 150, portfolioMetadatumId: 3, securityId: 2},
  {position: 100, portfolioMetadatumId: 4, securityId: 2},
  {position: 300, portfolioMetadatumId: 4, securityId: 6}

];

const dummyPortfolioMetadata = [
  {name: 'Portfolio #1', userId: 1}, {name: 'Portfolio #2', userId: 1},
  {name: 'Portfolio #3', userId: 1}, {name: 'Portfolio #1', userId: 2}
];


module.exports = {
  dummyUser,
  dummySecurity,
  dummyPortfolioData,
  dummyPortfolioMetadata
};