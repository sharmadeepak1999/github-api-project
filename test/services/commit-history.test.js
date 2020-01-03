const app = require('../../src/app');

describe('\'commitHistory\' service', () => {
  it('registered the service', () => {
    const service = app.service('history');
    expect(service).toBeTruthy();
  });
});
