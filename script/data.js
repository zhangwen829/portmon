/* eslint-disable */

const dummyUser = [
  { email: 'wen@email.com', firstName: 'Wen', lastName: 'Zhang' },
  { email: 'kitty@email.com', firstName: 'kitty', lastName: 'Cat' }
];

const dummySecurity = [
  { ticker: 'GOOG', type: 'EQUITY' }, { ticker: 'AMZN', type: 'EQUITY' },
  { ticker: 'TWTR', type: 'EQUITY' }, { ticker: 'FB', type: 'EQUITY' },
  { ticker: 'MSFT', type: 'EQUITY' }, { ticker: 'EBAY', type: 'EQUITY' },
  { ticker: 'SNAP', type: 'EQUITY' }, { ticker: 'UAL', type: 'EQUITY' },
  { ticker: 'BAC', type: 'EQUITY' }, { ticker: 'JPM', type: 'EQUITY' },
  { ticker: 'QQ', type: 'EQUITY' }, { ticker: 'BABA', type: 'EQUITY' },
  { ticker: 'OIL', type: 'EQUITY' }, { ticker: 'AAPL', type: 'EQUITY' },
  { ticker: 'WFC', type: 'EQUITY' }, { ticker: 'WFM', type: 'EQUITY' },
  { ticker: 'CQY', type: 'EQUITY' }, { ticker: 'DTYS', type: 'EQUITY' },
  { ticker: 'BLK', type: 'EQUITY' }, { ticker: 'MCD', type: 'EQUITY' },

];

const dummyPortfolioData = [
  { position: 100, portfolioMetadatumId: 2, securityId: 1 },
  { position: 200, portfolioMetadatumId: 2, securityId: 3 },
  { position: 150, portfolioMetadatumId: 2, securityId: 5 },
  { position: 200, portfolioMetadatumId: 2, securityId: 7 },
  { position: 300, portfolioMetadatumId: 2, securityId: 4 },
  { position: 100, portfolioMetadatumId: 2, securityId: 9 },
  { position: 250, portfolioMetadatumId: 2, securityId: 10 },
  { position: 400, portfolioMetadatumId: 2, securityId: 8 },
  { position: 100, portfolioMetadatumId: 2, securityId: 6 },
  { position: 200, portfolioMetadatumId: 2, securityId: 12 },
  { position: 500, portfolioMetadatumId: 2, securityId: 11 },
  { position: 300, portfolioMetadatumId: 2, securityId: 13 },
  { position: 1000, portfolioMetadatumId: 2, securityId: 20 },
  { position: 100, portfolioMetadatumId: 2, securityId: 16 },
  { position: 200, portfolioMetadatumId: 2, securityId: 15 },
  { position: 400, portfolioMetadatumId: 2, securityId: 14 },
  { position: 100, portfolioMetadatumId: 2, securityId: 17 },
  { position: 250, portfolioMetadatumId: 2, securityId: 19 },
  { position: 50, portfolioMetadatumId: 2, securityId: 18 },

  { position: 200, portfolioMetadatumId: 1, securityId: 12 },
  { position: 50, portfolioMetadatumId: 1, securityId: 1 },
  { position: 300, portfolioMetadatumId: 1, securityId: 4 },
  { position: 100, portfolioMetadatumId: 1, securityId: 2 },
  { position: 200, portfolioMetadatumId: 1, securityId: 6 },

  { position: 150, portfolioMetadatumId: 3, securityId: 5 },
  { position: 150, portfolioMetadatumId: 3, securityId: 2 },
  { position: 400, portfolioMetadatumId: 3, securityId: 16 },

  { position: 100, portfolioMetadatumId: 4, securityId: 2 },
  { position: 300, portfolioMetadatumId: 4, securityId: 6 }

];

function dummyPortfolioMetadata(user1Id,user2Id) {
  return [
    { name: 'Wen\'s Personal', userId: user1Id },
    { name: 'My Family\'s Holdings', userId: user1Id },
    { name: 'My Speculative', userId: user1Id },
    { name: 'Kitty\'s Personal', userId: user2Id }
  ]
}


module.exports = {
  dummyUser,
  dummySecurity,
  dummyPortfolioData,
  dummyPortfolioMetadata
};