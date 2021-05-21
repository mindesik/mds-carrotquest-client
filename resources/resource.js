class Resource {
  constructor(client, apiKey) {
    this.client = client
    this.apiKey = apiKey
  }

  /**
   * Make URLSearchParams with auth
   *
   * @param {Object} query
   * @returns {URLSearchParams}
   */
  searchParams(query) {
    let searchParams = new URLSearchParams(query)
    searchParams.append('auth_token', this.apiKey)

    return searchParams
  }

  /**
   * Requests wrapper
   *
   * @param {Promise} promise
   * @returns {Promise}
   */
  callResult (promise) {
    return new Promise((resolve, reject) => {
      promise().then(response => {
        resolve(response.data)
      }).catch(err => {
        console.error(err)
        reject(err.response)
      })
    })
  }
}

module.exports = Resource
