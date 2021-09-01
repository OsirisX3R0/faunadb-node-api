const faunadb = require('faunadb')

export type IndexGetValues = string[] | number[] | boolean[]

export class Document {
  /**
   * Creates a new Document instance
   * @param document FaunaDB document
   */
  constructor(document: object): void

  /** Id of the document */
  id: string
  /** Ref id */
  ref: Ref
  /** Timestamp */
  timestamp: number
}

export class Ref {
  /**
   * Creates a new Ref instance
   * @param ref FaunaDB Ref
   */
  constructor(ref: faunadb.query.Ref): void

  /** Name of the collection */
  collection: string
  /** Ref id */
  id: string
}

export class Index {
  /**
   * Creates a new Index instance
   * @param name Name of the collection
   * @param client FaunaDB database `Client` used for querying the database
   * @param query Collection of expressions used for querying the database
   */
  constructor(name: string, client: faunadb.Client, query: object): void

  /** Name of the collection */
  name: string
  /** FaunaDB database `Client` used for querying the database */
  client: faunadb.Client
  /** Collection of expressions used for querying the database */
  query: object

  /**
   * Gets documents by the index
   * @param values Values for index
   */
  get(values: IndexGetValues): Ref[]
}

export class Collection {
  /**
   * Creates a new Collection instance
   * @param name Name of the collection
   * @param client FaunaDB database `Client` used for querying the database
   * @param query Collection of expressions used for querying the database
   */
  constructor(name: string, client: faunadb.Client, query: object): void

  /** Name of the collection */
  name: string
  /** FaunaDB database `Client` used for querying the database */
  client: faunadb.Client
  /** Collection of expressions used for querying the database */
  query: object

  /**
   * Creates a new document in the collection
   * @param data Data for new document
   */
  create(data: object): Promise<void>
  /** Returns all documents in the collection */
  getAll(): Promise<Document[]>
  /**
   * Returns a single document by its Ref id
   * @param id Id of the document you want to get
   */
  getById(id: string): Promise<Docuemnt>
  /**
   * Updates a document in the update
   * @param id Id of the document you want to update
   * @param data Data to update the document
   */
  update(id: string, data: object): Promise<void>
  /**
   * Deletes a document by its Ref id
   * @param id Id of the document you want to delete
   */
  deleteById(id: string): Promise<void>
}

/** Utility for contacting a FaunaDB database */
export class FaunaAPI {
  /**
   * Creates a new API instance
   * @param secret FaunaDB secret
   */
  constructor(secret: string): void

  /** FaunaDB database `Client` used for querying the database */
  client: faunadb.Client
  /** Collection of expressions used for querying the database */
  query: object

  /** Connects the API to the database */
  connect(): Promise<void>
  /** Returns all collections in the database */
  getAllCollections(): Promise<Collection[]>
  /** Returns all indexes in the database */
  getAllIndexes(): Promise<Index[]>
}