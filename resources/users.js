const Resource = require('./resource')

class Users extends Resource {
  /**
   * https://carrotquest.io/developers/endpoints/users/user/
   * @param {String} id
   * @param {Object} query
   */
  get(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.get(`/users/${id}?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/eventsget/
   * @param {String} id
   * @param {Object} query
   */
  events(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.get(`/users/${id}/events?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/conversations/
   * @param {String} id
   * @param {Object} query
   */
  conversations(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.get(`/users/${id}/conversations?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/events/
   * @param {String} id
   * @param {Object} query
   */
  createEvent(id, query) {
    return this.callResult(_ => {
      if (query.params) {
        query.params = JSON.stringify(query.params)
      }

      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.post(`/users/${id}/events?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/props/
   * @param {String} id
   * @param {Object} query
   */
  setProps(id, query) {
    return this.callResult(_ => {
      if (query.operations) {
        query.operations = JSON.stringify(query.operations)
      }

      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.post(`/users/${id}/props?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/setpresence/
   * @param {String} id
   * @param {Object} query
   */
  setPresence(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.post(`/users/${id}/setpresence?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/sendmessage/
   * @param {String} id
   * @param {Object} query
   */
  sendMessage(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.post(`/users/${id}/sendmessage?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/startconversation/
   * @param {String} id
   * @param {Object} query
   */
  startConversation(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.post(`/users/${id}/startconversation?${searchParams.toString()}`)
    })
  }

  /**
   * https://carrotquest.io/developers/endpoints/users/unsubscribeemail/
   * @param {String} id
   * @param {Object} query
   */
  unsubscribeEmail(id, query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })

      return this.client.post(`/users/${id}/unsubscribeemail?${searchParams.toString()}`)
    })
  }
}

module.exports = Users
