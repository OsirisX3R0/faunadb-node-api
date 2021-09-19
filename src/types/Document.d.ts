import Ref from './Ref'

type FaunaDoc = {
  ref: { id: string }
  ts: string
}

/** Represents a document (row) in the database */
export default class Document {
  /**
   * Creates a new Document instance
   * @param document The document from FaunaDB
   */
  constructor(document: FaunaDoc): Document

  /** Id of the document */
  id: string
  /** Ref for the document */
  ref: Ref
  /** Timestamp (ts) for the document */
  timestamp: string
}