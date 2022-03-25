import { Unit } from "@/domain/entities/Unit";
import { UserNotFoundError } from "@/domain/errors/UserNotFound";
import { UnitRepository } from "@/domain/repositories/unit/UnitRepository";
import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";
import { CollectionNotFoundError } from "../../errors/CollectionNotFound";
import { UnitModel } from "../models/Unit";

export class UnitRepositoryMongoDB implements UnitRepository {
  private readonly COLLECTION_NAME: string = 'unities'

  constructor (private readonly databaseConnection: DatabaseConnection) {}
  
  public async getById(id: string): Promise<Unit> {
    let unitCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!unitCollection){
      await this.databaseConnection.createCollection(this.COLLECTION_NAME)
      unitCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    } 
    const unit = await unitCollection?.findOne({
      _id: id
    })
    if (!unit) throw new UserNotFoundError(id)

    const { _id, ...unitProperties } = unit
    return {
      id: _id.toString(),
      ...unitProperties
    } as unknown as Unit
  }

  public async save(unit: Unit): Promise<void> {
    let unitCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!unitCollection) {
      await this.databaseConnection.createCollection(this.COLLECTION_NAME)
      unitCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    }

    const assetsIds = unit.getAssets().map(asset => asset.getId())
    const unitToSave = new UnitModel({
      name: unit.getName(),
      description: unit.getDescription(),
      assetsIds
    })

    await unitCollection?.insertOne(unitToSave)
  }
}