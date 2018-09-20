const axios = require('axios')
const instance = axios.create()

instance.defaults.baseURL = 'https://api.github.com'

// Set GitHub API version explicitly to v3
instance.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'

// Extract GitHub personal access token from env variables
if (process.server && process.env.GITHUB_USER && process.env.GITHUB_TOKEN) {
  instance.defaults.auth = {
    username: process.env.GITHUB_USER,
    password: process.env.GITHUB_TOKEN
  }
}

module.exports = instance
