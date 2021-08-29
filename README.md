# faunadb-node-api

A NodeJS API for FaunaDB

## Usage

```js
// api.js

const FaunaAPI = require("@osirisx3r0/faunadb-node-api");

module.exports = new FaunaAPI(process.env.FAUNA_API_KEY);
```

```js
// users.js

const API = require("api.js");

const getUsers = async () => {
  await API.connect();
  return await API.users.getAll();
};
```

## Development

1. Clone the repository
2. Create a `config.js` file at the project root

   ```js
   module.exports = {
     FAUNA_ADMIN_KEY: "A9OP84HAE4598ES45GSAE9P458GE9GH8095GPS98",
   };
   ```
