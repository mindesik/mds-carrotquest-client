const axios = require('axios')
const Apps = require('./resources/apps')
const Users = require('./resources/users')
const Conversations = require('./resources/conversations')

class CarrotQuest {
  /**
   *
   * @param {String} apiKey
   * @param {String} baseURL
   * @param {Number} timeout
   */
  constructor(apiKey, baseURL, timeout) {
    this.apiKey = apiKey
    this.client = axios.create({
      baseURL: baseURL || 'https://api.carrotquest.io/v1',
      timeout: timeout || 5000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    this.apps = new Apps(this.client, this.apiKey)
    this.users = new Users(this.client, this.apiKey)
    this.conversations = new Conversations(this.client, this.apiKey)
  }
}

module.exports = CarrotQuest
