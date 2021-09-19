const Ref = require("./Ref");

class Index {
  constructor(name, client, query) {
    this.name = name;
    this.client = client;
    this.query = query;
  }

  // READ

  async get(...values) {
    let refs = await this.client.query(
      this.query.Paginate(this.query.Match(this.query.Index(this.name), values))
    );

    return refs.data.map((ref) => new Ref(ref));
  }
}

module.exports = Index;
