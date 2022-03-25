export class EntityNotFoundError extends Error {
  constructor(
    entityName: string,
    entityPropertyUsedToSearching: string,
    propertyValue: string
  ) {
    super(`${entityName} with ${entityPropertyUsedToSearching} equal to ${propertyValue} was not found`)
  }
}