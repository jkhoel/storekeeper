/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
  if (process.env.NODE_ENV !== 'test') {
    module.exports = require('./keys_dev');
  } else {
    module.exports = require('./keys_test');
  }
} else {
  module.exports = require('./keys_prod');
}
