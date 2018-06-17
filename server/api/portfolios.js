const router = require('express').Router();
const {PortfolioMetadata} = require('../db/models');
module.exports = router;

router.get('/user/:userId', async (req, res, next) => {
  try {
    const portfolios =
        await PortfolioMetadata.listPortfolioMetadataByUserId(req.params.Id);
    res.json(portfolios);
  } catch (error) {
    next(error);
  }
});


router.post('/user/:userId', async (req, res, next) => {
  try {
    const created = await PortfolioMetadata.create(
        {name: req.body.name, userId: req.params.id});
    res.json(created);
  } catch (error) {
    next(error);
  }
});

router.delete('/:portfoiloId', async (req, res, next) => {
  try {
    await PortfolioMetadata.destroy({where: {id: req.params.id}});
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});


router.put('/:portfoiloId', async (req, res, next) => {
  try {
    const portfolio = await PortfolioMetadata.findById(req.params.id);
    const updated = await portfolio.update(req.body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});
