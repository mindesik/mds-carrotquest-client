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

```javascript
client.apps.activeUsers()
```

Get active users

```javascript
client.apps.users(query)
```

Get app users

|Parameter|Type|
|---|---|
|query|Object|

```javascript
client.apps.conversations(query)
```

Get conversations

|Parameter|Type|
|---|---|
|query|Object|

```javascript
client.apps.channels()
```

Get app channels

```javascript
client.users.get(id, query)
```

Get user

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.events(id, query)
```

Get user events

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.conversations(id, query)
```

Get user conversations

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.createEvent(id, query)
```

Create user event

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.setProps(id, query)
```

Set user props

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.setPresence(id, query)
```

Set user presence

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.sendMessage(id, query)
```

Send a message to user

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.startConversation(id, query)
```

Start a conversation with user

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

```javascript
client.users.unsubscribeEmail(id, query)
```

Unsubscribe user email

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