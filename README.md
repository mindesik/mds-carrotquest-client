# mds-carrotquest-client

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

Create `.env` file with your Carrot Quest API key and run `yarn test`:

```
echo API_KEY > .env
yarn install
yarn test
```