const faunadb = require('faunadb')

export declare class Collection {
  constructor(name: string, client: faunadb.Client, query: object): void

  /** Name of the collection */
  name: string
  /** FaunaDB database `Client` used for querying the database */
  client: faunadb.Client
  /** Collection of expressions used for querying the database */
  query: object

  create(data: object): Docuemnt
  getAll(): Document[]
  getById(id: string): void
  update(): void
  delete(): void
}

/** Utility for contacting a FaunaDB database */
export declare class FaunaAPI {
  /** Creates a new API instance */
  constructor(secret: string): void

  /** FaunaDB database `Client` used for querying the database */
  client: faunadb.Client
  /** Collection of expressions used for querying the database */
  query: object

  connect(): Promise<void>
  getAllCollections(): Collection[]
  getAllIndexes(): Index[]
}