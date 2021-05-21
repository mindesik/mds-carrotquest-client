require('dotenv').config()

const CarrotQuest = require('../index')
const client = new CarrotQuest(process.env.API_KEY)

let userId = null

describe('Apps', function() {
  test('should get users', function(done) {
    client.apps.users().then(response => {
      userId = response.data.users[0].id
      expect(response.meta.status).toBe(200)
      done()
    }).catch(done)
  })

  test('should get active users', function(done) {
    client.apps.activeUsers().then(response => {
      expect(response.meta.status).toBe(200)
      done()
    }).catch(done)
  })

  test('should get active conversations', function(done) {
    client.apps.conversations().then(response => {
      expect(response.meta.status).toBe(200)
      done()
    }).catch(done)
  })

  // test('should get channels', function(done) {
  //   client.apps.channels().then(response => {
  //     expect(response.meta.status).toBe(200)
  //     done()
  //   }).catch(done)
  // })
})

describe('Users', function () {
  test('should get user', function(done) {
    client.users.get(userId).then(response => {
      expect(response.meta.status).toBe(200)
      done()
    }).catch(done)
  })

  test('should get user events', function(done) {
    client.users.events(userId).then(response => {
      expect(response.meta.status).toBe(200)
      done()
    }).catch(done)
  })

  test('should get user conversations', function(done) {
    client.users.conversations(userId).then(response => {
      expect(response.meta.status).toBe(200)
      done()
    }).catch(done)
  })

  // test('should create user event', function(done) {
  //   client.users.createEvent(userId, {
  //     event: 'TEST EVENT',
  //     params: {
  //       foo: 'bar',
  //     },
  //   }).then(response => {
  //     expect(response.meta.status).toBe(200)
  //     done()
  //   }).catch(done)
  // })

  // test('should set user props', function(done) {
  //   client.users.setProps(userId, {
  //     operations: [{
  //       key: '$phone',
  //       value: Date.now(),
  //       op: 'update_or_create',
  //     }, {
  //       key: '$name',
  //       value: `Test ${Date.now()}`,
  //       op: 'update_or_create',
  //     }],
  //   }).then(response => {
  //     expect(response.meta.status).toBe(200)
  //     expect(response.meta.affected_props.indexOf('$phone')).toBeGreaterThan(-1)
  //     expect(response.meta.affected_props.indexOf('$name')).toBeGreaterThan(-1)
  //     done()
  //   }).catch(done)
  // })

  // test('should set user presence', function(done) {
  //   client.users.setPresence(userId, {
  //     session: '123',
  //     presence: 'online',
  //   }).then(response => {
  //     expect(response.meta.status).toBe(200)
  //     done()
  //   }).catch(done)
  // })

  // test('should send message to user', function(done) {
  //   client.users.setPresence(userId, {
  //     body: 'foo bar baz',
  //   }).then(response => {
  //     expect(response.meta.status).toBe(200)
  //     done()
  //   }).catch(done)
  // })

  // test('should start conversation with user', function(done) {
  //   client.users.startConversation(userId, {
  //     body: 'foo bar baz',
  //   }).then(response => {
  //     expect(response.meta.status).toBe(200)
  //     done()
  //   }).catch(done)
  // })

  // test('should unsubscribe email', function(done) {
  //   client.users.unsubscribeEmail(userId).then(response => {
  //     expect(response.meta.status).toBe(200)
  //     done()
  //   }).catch(done)
  // })
})

console.log(userId)

// @TODO: conversations tests
// describe('Conversations', function () {
//   this.timeout(30000)
// })
