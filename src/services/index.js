const commitHistory = require('./commit-history/commit-history.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(commitHistory);
};
