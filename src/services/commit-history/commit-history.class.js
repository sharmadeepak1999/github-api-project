/* eslint-disable no-unused-vars */
const axios = require('axios');

exports.CommitHistory = class CommitHistory {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    try {
      const response = await axios.get('https://api.github.com/repos/sharmadeepak1999/PI/commits');
      return response.data;
    } catch(e) {
      return {
        success: false,
        error: e
      };
    }
  }
};
