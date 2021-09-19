import faunadb from 'faunadb'
import Document from './Document'

/** Represents a collection in the FaunaDB database */
export default class Collection {
  /**
   * Creates a new Collection instance
   * @param name Name of the collection
   * @param client `Client` for querying the database
   * @param query Querying utilities
   */
  constructor(name: string, client: faunadb.Client, query: object)

  /** Name of the collection */
  name: string
  /** `Client` for querying the database */
  client: faunadb.Client
  /** Querying utilities */
  query: object

  /**
   * Creates one document in the collection
   * @param data The data for the document
   */
  create(data: object): Promise<void>
  
  /** Returns all documents from the collection */
  getAll(): Promise<Document[]>

  /**
   * Returns a single document from the collection
   * @param id Id to query for
   */
  getById(id: string): Promise<Document>

  /**
   * Updates one document in the collection, by Id
   * @param id Id of the document to update
   * @param data Updated data for the document
   */
  update(id: string, data: object): Promise<void>

  /**
   * Deletes one document in the collection, by Id
   * @param id Id of the document to delete
   */
  deleteById(id: string): Promise<void>
}