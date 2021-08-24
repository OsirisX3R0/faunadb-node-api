const faunadb = require("faunadb");

const Collection = require("./collection");

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
  }

  // CREATE

  getByIndex(index, value) {
    return this.client.query(
      this.query.Paginate(this.query.Match(this.query.Index(index), value))
    );
  }

  // READ

  getAllCollections() {
    return this.client
      .query(this.query.Paginate(this.query.Collections()))
      .then((res) => res.data);
  }
}

module.exports = FaunaAPI;
