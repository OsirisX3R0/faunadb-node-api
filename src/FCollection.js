const Document = require("./FDocument");

class Collection {
  constructor(name, client, query) {
    this.name = name;
    this.client = client;
    this.query = query;
  }

  // CREATE

  async create(data) {
    let documents = await this.client.query(
      this.query.Create(this.query.Collection(this.name), { data })
    );
  }

  // READ

  async getAll() {
    let documents = await this.client.query(
      this.query.Map(
        this.query.Paginate(
          this.query.Documents(this.query.Collection(this.name))
        ),
        this.query.Lambda((x) => this.query.Get(x))
      )
    );

    return documents.data.map((doc) => new Document(doc));
  }

  async getById(id) {
    let documents = await this.client.query(
      this.query.Get(this.query.Ref(this.query.Collection(this.name), id))
    );

    return documents;
  }

  // UPDATE

  async update(id, data) {
    let documents = await this.client.query(
      this.query.Update(this.query.Ref(this.query.Collection(this.name), id), {
        data,
      })
    );
  }

  // DELETE

  async deleteById(id) {
    let documents = await this.client.query(
      this.query.Delete(this.query.Ref(this.query.Collection(this.name), id))
    );
  }
}

module.exports = Collection;
