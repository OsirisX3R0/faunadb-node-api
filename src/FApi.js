const faunadb = require("faunadb");

const Collection = require("./FCollection");
const Index = require("./FIndex");

class FaunaAPI {
  constructor(secret) {
    this.client = new faunadb.Client({ secret });
    this.query = faunadb.query;

    this.getAllCollections().then((collections) => {
      collections.forEach(
        ({ value }) =>
          (this[value.id] = new Collection(value.id, this.client, this.query))
      );
    });

    this.getAllIndexes().then((indexes) => {
      indexes.forEach(
        ({ value }) =>
          (this[value.id] = new Index(value.id, this.client, this.query))
      );
    });
  }

  // READ

  getAllCollections() {
    return this.client
      .query(this.query.Paginate(this.query.Collections()))
      .then((res) => res.data);
  }

  getAllIndexes() {
    return this.client
      .query(this.query.Paginate(this.query.Indexes()))
      .then((res) => res.data);
  }
}

module.exports = FaunaAPI;
