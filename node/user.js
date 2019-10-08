const axios = require('axios');

module.exports = class User {
  fetchAll() {
    return axios.get('/users');
  }
};
