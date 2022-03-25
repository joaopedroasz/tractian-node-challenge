import { Asset } from "@/domain/entities/Asset";
import { AssetNotFoundError } from "@/domain/errors/AssetNotFound";
import { AssetRepository } from "@/domain/repositories/asset/AssetRepository";
import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";

export class AssetRepositoryMongoDB implements AssetRepository {
  private readonly COLLECTION_NAME = 'assets'

  constructor(private readonly databaseConnection: DatabaseConnection) {} 

  public async getById(id: string): Promise<Asset> {
    let assetCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!assetCollection) {
      await this.databaseConnection.createCollection(this.COLLECTION_NAME)
      assetCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    }

    const asset = await assetCollection?.findOne({
      _id: id
    })
    if (!asset) throw new AssetNotFoundError(id)

    const { _id, ...assetProperties } = asset

    return {
      id: _id.toString(),
      ...assetProperties
    } as unknown as Asset
  }
}