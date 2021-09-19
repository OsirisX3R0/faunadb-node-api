import faunadb from "faunadb";

import Ref from "./Ref";

type Values = (string|number|boolean)[]

/** Represents an Index used to query collections by particular parameters */
export default class Index {
  /**
   * Creates a new Index instance
   * @param name The name of the index
   * @param client The FaunaDB `Client` used to query the database
   * @param query Query utilities
   */
  constructor(name: string, client: faunadb.Client, query: object)

  /** Name of the index */
  name: string
  /** `Client` for querying the database */
  client: faunadb.Client
  /** Querying utilities */
  query: object

  get(values: Values): Promise<Ref[]>
}