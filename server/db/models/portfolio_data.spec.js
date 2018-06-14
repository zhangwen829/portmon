/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const PortfolioData = db.model('portfolio_data');
const PortfolioMetadata = db.model('portfolio_metadata');

describe('PortfolioData model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('Class Methods', () => {
    describe('listPortfolioDataByPortfolioMetadataId', () => {
      const TEST_PORTFOLIOMETADATA_ID_1 = 1;
      const TEST_PORTFOLIOMETADATA_ID_2 = 2;
      const TEST_PORTFOLIOMETADATA_ID_3 = 3;
      const TEST_PORTFOLIOMETADATA_1 = { name: 'Portfolio #1' };
      const TEST_PORTFOLIOMETADATA_2 = { name: 'Portfolio #2' };
      const TEST_PORTFOLIODATA_1 = { position: 100, portfolioMetadatumId: TEST_PORTFOLIOMETADATA_ID_1 };
      const TEST_PORTFOLIODATA_2 = { position: 200, portfolioMetadatumId: TEST_PORTFOLIOMETADATA_ID_1 };
      const TEST_PORTFOLIODATA_3 = { position: 300, portfolioMetadatumId: TEST_PORTFOLIOMETADATA_ID_2 };

      beforeEach(async () => {
        await PortfolioMetadata.bulkCreate([
          TEST_PORTFOLIOMETADATA_1,
          TEST_PORTFOLIOMETADATA_2
        ]);

        await PortfolioData.bulkCreate([
          TEST_PORTFOLIODATA_1,
          TEST_PORTFOLIODATA_2,
          TEST_PORTFOLIODATA_3
        ]);
      });

      it('Returns TEST_PORTFOLIODATA_1 and TEST_PORTFOLIODATA_2 when query by TEST_PORTFOLIOMETADATA_ID_1', async () => {
        const rets = await PortfolioData.listPortfolioDataByPortfolioMetadataId(TEST_PORTFOLIOMETADATA_ID_1);
        expect(rets).to.be.an('array').that.to.have.lengthOf(2);

        expect(rets[0].position).to.be.equal(TEST_PORTFOLIODATA_1.position);
        expect(rets[0].portfolioMetadatumId).to.be.equal(TEST_PORTFOLIODATA_1.portfolioMetadatumId);

        expect(rets[1].position).to.be.equal(TEST_PORTFOLIODATA_2.position);
        expect(rets[1].portfolioMetadatumId).to.be.equal(TEST_PORTFOLIODATA_2.portfolioMetadatumId);
      });

      it('Returns empty when query by TEST_PORTFOLIOMETADATA_ID_3', async () => {
        const rets = await PortfolioData.listPortfolioDataByPortfolioMetadataId(TEST_PORTFOLIOMETADATA_ID_3);
        expect(rets).to.be.an('array').that.is.empty;
      });
    });
  });
});