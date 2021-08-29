const faunadb = require("faunadb");

const Collection = require("./FCollection");
const Index = require("./FIndex");

class FaunaAPI {
  constructor(secret) {
    this.client = new faunadb.Client({ secret });
    this.query = faunadb.query;

    return Promise.all([this.getAllCollections(), this.getAllIndexes()]).then(
      ([collections, indexes]) => {
        for (let c = 0; c < collections.length; c++) {
          let collection = collections[c].value;
          this[collection.id] = new Collection(
            collection.id,
            this.client,
            this.query
          );
        }

        for (let i = 0; i < indexes.length; i++) {
          let index = indexes[i].value;
          this[index.id] = new Index(index.id, this.client, this.query);
        }

        return this;
      }
    );
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
