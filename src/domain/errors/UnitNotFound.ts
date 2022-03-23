import { EntityNotFoundError } from "./EntityNotFound";

export class UnitNotFoundError extends EntityNotFoundError {
  constructor(id: string) {
    super('unit', 'id', id)
  }
}