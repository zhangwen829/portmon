const { dummyUser, dummySecurity, dummyPortfolioData, dummyPortfolioMetadata } = require('./data');
const db = require('../server/db');
const { User, Security, PortfolioData, PortfolioMetadata } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all(dummyUser.map(user => User.create(user)));
  const portfolioMetadata = await Promise.all(dummyPortfolioMetadata.map(portfolioMetadatum => PortfolioMetadata.create(portfolioMetadatum)));
  const securities = await Promise.all(dummySecurity.map(security => Security.create(security)));
  const portfolioData = await Promise.all(dummyPortfolioData.map(portfolioDatum => PortfolioData.create(portfolioDatum)));


  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${securities.length} securities`);
  console.log(`seeded ${portfolioData.length} portfolioData`);
  console.log(`seeded ${portfolioMetadata.length} portfolioMetadata`);
  console.log(`seeded successfully`);
}

if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .then(() => {
      console.log('closing db connection');
      db.close();
      console.log('db connection closed');
    });
  console.log('seeding...');
}

module.exports = seed;
