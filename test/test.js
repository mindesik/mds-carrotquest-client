require('dotenv').config()
const assert = require('assert')
const { describe, it } = require('mocha')

const CarrotQuest = require('../index')
const client = new CarrotQuest(process.env.API_KEY)

let userId = null

const dump = (json) => {
  console.log(JSON.stringify(json, null, 2))
}

describe('Apps', function() {
  this.timeout(30000)
  
  it('should get users', function(done) {
    client.apps.users().then(response => {
      userId = response.data.users[0].id
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should get active users', function(done) {
    client.apps.activeUsers().then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should get active conversations', function(done) {
    client.apps.conversations().then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  // it('should get channels', function(done) {
  //   client.apps.channels().then(response => {
  //     assert.equal(response.meta.status, 200)
  //     done()
  //   }).catch(done)
  // })
})

describe('Users', function () {
  this.timeout(30000)
  
  it('should get user', function(done) {
    client.users.get(userId).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should get user events', function(done) {
    client.users.events(userId).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should get user conversations', function(done) {
    client.users.conversations(userId).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should create user event', function(done) {
    client.users.postEvent(userId, {
      event: 'TEST EVENT',
      params: {
        foo: 'bar',
      },
    }).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should set user props', function(done) {
    client.users.postProps(userId, {
      operations: [{
        key: '$phone',
        value: Date.now(),
        op: 'update_or_create',
      }, {
        key: '$name',
        value: `Test ${Date.now()}`,
        op: 'update_or_create',
      }]
    }).then(response => {
      assert.equal(response.meta.status, 200)
      assert.notEqual(response.meta.affected_props.indexOf('$phone'), -1)
      assert.notEqual(response.meta.affected_props.indexOf('$name'), -1)
      done()
    }).catch(done)
  })
  
  it('should set user presence', function(done) {
    client.users.setPresence(userId, {
      session: '123',
      presence: 'online',
    }).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should send message to user', function(done) {
    client.users.setPresence(userId, {
      body: 'foo bar baz',
    }).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should start conversation with user', function(done) {
    client.users.startConversation(userId, {
      body: 'foo bar baz',
    }).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
  
  it('should unsubscribe email', function(done) {
    client.users.unsubscribeEmail(userId,).then(response => {
      assert.equal(response.meta.status, 200)
      done()
    }).catch(done)
  })
})

// @TODO: conversations tests
// describe('Conversations', function () {
//   this.timeout(30000)
// })
