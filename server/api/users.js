const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;


router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const result = await User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.json(result[1][0]);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

