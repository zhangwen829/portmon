const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  id: {type: Sequelize.UUID, primaryKey: true},
  email: {type: Sequelize.STRING, unique: true, allowNull: false},
  // TODO(zhangwen829), add more fields like googleId below.
});

module.exports = User;