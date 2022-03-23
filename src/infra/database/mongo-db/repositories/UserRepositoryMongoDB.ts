import { User } from "@/domain/entities/User";
import { UserNotFoundError } from "@/domain/errors/UserNotFound";
import { UserRepository } from "@/domain/repositories/user/UserRepository";
import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";
import { CollectionNotFoundError } from "../../errors/CollectionNotFound";

export class UserRepositoryMongoDB implements UserRepository {
  private readonly COLLECTION_NAME: string = 'users'

  constructor (private readonly databaseConnection: DatabaseConnection) {}
  
  public async getById(id: string): Promise<User> {
    const usersCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!usersCollection) throw new CollectionNotFoundError(this.COLLECTION_NAME)
    const unit = await usersCollection.findOne({
      _id: id
    })
    if (!unit) throw new UserNotFoundError(id)

    const { _id, ...unitProperties } = unit
    return {
      id: _id.toString(),
      ...unitProperties
    } as unknown as User
  }
}