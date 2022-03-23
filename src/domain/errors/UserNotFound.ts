import { EntityNotFoundError } from "./EntityNotFound";

export class UserNotFoundError extends EntityNotFoundError {
  constructor(id: string) {
    super('user', 'id', id)
  }
}