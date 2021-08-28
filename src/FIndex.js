class Index {
  constructor(name, client, query) {
    this.name = name;
    this.client = client;
    this.query = query;
  }

  // READ

  get(...values) {
    return this.client.query(
      this.query.Paginate(this.query.Match(this.query.Index(this.name), values))
    );
  }
}

module.exports = Index;
