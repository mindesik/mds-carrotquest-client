const Resource = require('./resource')
const qsStringify = require('querystring').stringify

class Apps extends Resource {
  /**
   * https://carrotquest.io/developers/endpoints/apps/activeusers/
   */
  activeUsers() {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
      })
      
      return this.client.get(`/apps/$self_app/activeusers/?${searchParams.toString()}`)
    })
  }
  
  /**
   * https://carrotquest.io/developers/endpoints/apps/users/
   * @param {Object} query 
   */
  users(query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })
      
      return this.client.get(`/apps/$self_app/users/?${searchParams.toString()}`)
    })
  }
  
  /**
   * https://carrotquest.io/developers/endpoints/apps/conversations/
   * @param {Object} query 
   */
  conversations(query) {
    return this.callResult(_ => {
      let searchParams = this.searchParams({
        id_as_string: true,
        ...query,
      })
      
      return this.client.get(`/apps/$self_app/conversations/?${searchParams.toString()}`)
    })
  }
  
  /**
   * https://carrotquest.io/developers/endpoints/apps/channels/
   */
  channels() {
    return this.callResult(_ => {
      let searchParams = this.searchParams()
      
      return this.client.get(`/apps/$self_app/channels/?${searchParams.toString()}`)
    })
  }
}

module.exports = Apps