const axios = require('axios')

module.exports = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    common: {
      'Accept': 'application/vnd.github.v3+json'
    }
  }
})
