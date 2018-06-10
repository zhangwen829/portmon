const router = require('express').Router();
const {PortfolioMetadata} = require('../db/models');
module.exports = router;

router.get(
    '/user/:userId',
    (req, res, next) => {
        // TODO(zhangwen829), get all portfolio (metadata) belongs to this user.
    });

router.post(
    '/user/:userId', (req, res, next) => {
                         // TODO(zhangwen829), add a new portfolio (metadata)
                         // belongs to this user.
                     });

router.delete(
    '/:portfoiloId',
    (req, res, next) => {
        // TODO(zhangwen829), delete an existing portfolio (metadata)
        // belongs to this user.
    });

router.put(
    '/:portfoiloId',
    (req, res, next) => {
        // TODO(zhangwen829), add/delete security + position within a portfolio
    });