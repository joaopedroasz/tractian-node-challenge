import { EntityNotFoundError } from "./EntityNotFound";

export class AssetNotFoundError extends EntityNotFoundError {
  constructor(id: string) {
    super('asset', 'id', id)
  }
}