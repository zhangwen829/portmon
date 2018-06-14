/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const PortfolioMetadata = db.model('portfolio_metadata');
const User = db.model('user');

describe('PortfolioMetadata model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('Class Methods', () => {
    describe('listPortfolioMetadataByUserId', () => {
      const TEST_USER_ID_1 = 1;
      const TEST_USER_ID_2 = 2;
      const TEST_USER_ID_3 = 3;
      const TEST_USER_1 = { email: 'user1@google.com', firstName: 'user1_first', lastName: 'user1_last' };
      const TEST_USER_2 = { email: 'user2@google.com', firstName: 'user2_first', lastName: 'user2_last' };
      const TEST_PORTFOLIO_1 = { name: 'Portfolio #1', userId: TEST_USER_ID_1 };
      const TEST_PORTFOLIO_2 = { name: 'Portfolio #2', userId: TEST_USER_ID_1 };
      const TEST_PORTFOLIO_3 = { name: 'Portfolio #3', userId: TEST_USER_ID_2 };

      beforeEach(async () => {
        await User.bulkCreate([
          TEST_USER_1,
          TEST_USER_2
        ]);

        await PortfolioMetadata.bulkCreate([
          TEST_PORTFOLIO_1,
          TEST_PORTFOLIO_2,
          TEST_PORTFOLIO_3
        ]);
      });

      it('Returns TEST_PORTFOLIO_1 and TEST_PORTFOLIO_2 when query by TEST_USER_ID_1', async () => {
        const rets = await PortfolioMetadata.listPortfolioMetadataByUserId(TEST_USER_ID_1);
        expect(rets).to.be.an('array').that.to.have.lengthOf(2);

        expect(rets[0].name).to.be.equal(TEST_PORTFOLIO_1.name);
        expect(rets[0].userId).to.be.equal(TEST_PORTFOLIO_1.userId);

        expect(rets[1].name).to.be.equal(TEST_PORTFOLIO_2.name);
        expect(rets[1].userId).to.be.equal(TEST_PORTFOLIO_2.userId);
      });

      it('Returns empty when query by TEST_USER_ID_3', async () => {
        const rets = await PortfolioMetadata.listPortfolioMetadataByUserId(TEST_USER_ID_3);
        expect(rets).to.be.an('array').that.is.empty;
      });
    });
  });
});