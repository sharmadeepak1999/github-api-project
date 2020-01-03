// Initializes the `commitHistory` service on path `/history`
const { CommitHistory } = require('./commit-history.class');
const hooks = require('./commit-history.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/history', new CommitHistory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('history');

  service.hooks(hooks);
};
