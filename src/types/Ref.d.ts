interface FaunaRef {
  /** Id of the Ref */
  id: string,
  /** Collection the Ref is associated with */
  collection: { id: string }
}

/** Represents a reference to a document */
export default class Ref {
  /**
   * Creates a new Ref instance
   * @param ref FaunaDB Ref
   */
  constructor(ref: FaunaRef)

  /** Name of the collection */
  collection: string
  /** Ref id */
  id: string
}