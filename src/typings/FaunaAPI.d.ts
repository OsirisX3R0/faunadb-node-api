import faunadb from 'faunadb'

import Ref from "./Ref";

/** The API that communicates with a FaunaDB database */
declare class FaunaAPI {
  /**
   * Creates a new API instance
   * @param secret FaunaDB secret to initiate connection
   */
  constructor(secret: string)

  /** `Client` for querying the database */
  client: faunadb.Client
  /** Querying utilities */
  query: object

  /** Connects to the database and provides collections and indexes */
  connect(): this
  /** Returns all collections */
  getAllCollections(): Promise<Ref[]>
  /** Returns all indexes */
  getAllIndexes(): Promise<Ref[]>
}

export default FaunaAPI