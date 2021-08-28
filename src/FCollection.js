class Collection {
  constructor(name, client, query) {
    this.name = name;
    this.client = client;
    this.query = query;
  }

  // CREATE

  create(data) {
    return this.client.query(
      this.query.Create(this.query.Collection(this.name), { data })
    );
  }

  // READ

  getById(id) {
    return this.client.query(
      this.query.Get(this.query.Ref(this.query.Collection(this.name), id))
    );
  }

  // UPDATE

  update(id, data) {
    return this.client.query(
      this.query.Update(this.query.Ref(this.query.Collection(this.name), id), {
        data,
      })
    );
  }

  // DELETE

  deleteById(id) {
    return this.client.query(
      this.query.Delete(this.query.Ref(this.query.Collection(this.name), id))
    );
  }
}

module.exports = Collection;
