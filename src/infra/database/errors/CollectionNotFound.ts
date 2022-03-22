export class CollectionNotFoundError extends Error {
  constructor (collectionName: string) {
    super(`Collection ${collectionName} not found`)
  }
}