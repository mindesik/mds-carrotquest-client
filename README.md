# mds-carrotquest-client

[![wercker status](https://app.wercker.com/status/e3afc14c8ba4e0ce2177d8ede8fea510/s/ "wercker status")](https://app.wercker.com/project/byKey/e3afc14c8ba4e0ce2177d8ede8fea510)

Simple carrotquest.io client with Promises for nodejs.

Carrot quest web api documentation: https://carrotquest.io/developers/webapi/

## Installation

`npm install mds-carrotquest-client` or `yarn add mds-carrotquest-client`

## Examples

```javascript
const CarrotQuest = require('mds-carrotquest-client')
const client = new CarrotQuest(apiKey)

// Get all users
client.apps.users().then(users => {
  console.log(users)
}).catch(err => {
  console.error(err)
})
```

## Methods

Get active users

```javascript
client.apps.activeUsers()
```

---

Get app users

```javascript
client.apps.users(query)
```

|Parameter|Type|
|---|---|
|query|Object|

---

Get conversations

```javascript
client.apps.conversations(query)
```

|Parameter|Type|
|---|---|
|query|Object|

---

Get app channels

```javascript
client.apps.channels()
```

---

Get user

```javascript
client.users.get(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Get user events

```javascript
client.users.events(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Get user conversations

```javascript
client.users.conversations(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Create user event

```javascript
client.users.createEvent(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Set user props

```javascript
client.users.setProps(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Set user presence

```javascript
client.users.setPresence(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Send a message to user

```javascript
client.users.sendMessage(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Start a conversation with user

```javascript
client.users.startConversation(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

---

Unsubscribe user email

```javascript
client.users.unsubscribeEmail(id, query)
```

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

## Testing

Create `.env` file with your Carrot Quest API key and run `yarn test`:

```
echo API_KEY > .env
yarn install
yarn test
```