const faunadb = require("faunadb");

const Collection = require("./collection");

class FaunaAPI {
  constructor(secret, collections) {
    this.client = new faunadb.Client({ secret });
    this.query = faunadb.query;

    collections.forEach(
      (collection) =>
        (this[collection] = new Collection(collection, this.client, this.query))
    );
  }

  // CREATE

  getByIndex(index, value) {
    return this.client.query(
      this.query.Paginate(this.query.Match(this.query.Index(index), value))
    );
  }
}

module.exports = FaunaAPI;
