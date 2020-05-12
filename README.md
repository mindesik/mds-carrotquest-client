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

### apps.activeUsers

Get active users

### apps.users

Get app users

|Parameter|Type|
|---|---|
|query|Object|

### apps.conversations

Get conversations

|Parameter|Type|
|---|---|
|query|Object|

### apps.channels

Get app channels

### users.get

Get user

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.events

Get user events

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.conversations

Get user conversations

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.createEvent

Create user event

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.setProps

Set user props

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.setPresence

Set user presence

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.sendMessage

Send a message to user

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.startConversation

Start a conversation with user

|Parameter|Type|
|---|---|
|id|String|
|query|Object|

### users.unsubscribeEmail

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