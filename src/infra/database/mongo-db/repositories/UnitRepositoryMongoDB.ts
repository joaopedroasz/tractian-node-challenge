import { Unit } from "@/domain/entities/Unit";
import { UserNotFoundError } from "@/domain/errors/UserNotFound";
import { UnitRepository } from "@/domain/repositories/unit/UnitRepository";
import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";
import { CollectionNotFoundError } from "../../errors/CollectionNotFound";

export class UnitRepositoryMongoDB implements UnitRepository {
  private readonly COLLECTION_NAME: string = 'unities'

  constructor (private readonly databaseConnection: DatabaseConnection) {}
  
  public async getById(id: string): Promise<Unit> {
    const unitCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!unitCollection) throw new CollectionNotFoundError(this.COLLECTION_NAME)
    const user = await unitCollection.findOne({
      _id: id
    })
    if (!user) throw new UserNotFoundError(id)

    const { _id, ...userProperties } = user
    return {
      id: _id.toString(),
      ...userProperties
    } as unknown as Unit
  }
}