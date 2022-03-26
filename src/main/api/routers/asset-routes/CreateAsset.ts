import { CreateAsset } from "@/application/use-cases/CreateAsset";
import { MongoDatabaseAdapter } from "@/infra/database/mongo-db/adapters/MongoDbAdapter";
import { AssetRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/AssetRepositoryMongoDB";
import { UnitRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/UnitRepositoryMongoDB";
import { CreateAssetController } from "@/presentation/controllers/CreateAsset";
import { Router } from "express";
import { RouterAdapterExpress } from "../../adapters/RouterAdapterExpress";
import { Route } from "../../contracts/Route";

export class CreateAssetRouter extends Route {
  constructor (
    readonly router: Router
  ) {
    super(router)
  }

  public async setupRoute(): Promise<Router> {
    const databaseConnection = new MongoDatabaseAdapter()
    const assetRepository = new AssetRepositoryMongoDB(databaseConnection)
    const unitRepository = new UnitRepositoryMongoDB(databaseConnection)
    const createAssetUseCase = new CreateAsset(assetRepository, unitRepository)
    const createAssetController = new CreateAssetController(createAssetUseCase)

    const routerAdapter = new RouterAdapterExpress()
    this.router.post('/assets', routerAdapter.adapt(createAssetController))
    return this.router
  }
}