import { CreateUnit } from "@/application/use-cases/CreateUnit";
import { MongoDatabaseAdapter } from "@/infra/database/mongo-db/adapters/MongoDbAdapter";
import { AssetRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/AssetRepositoryMongoDB";
import { UnitRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/UnitRepositoryMongoDB";
import { CreateUnitController } from "@/presentation/controllers/CreateUnit";
import { Router } from "express";
import { RouterAdapterExpress } from "../../adapters/RouterAdapterExpress";
import { Route } from "../../contracts/Route";

export class CreateUnitRouter extends Route {
  constructor (
    readonly router: Router
  ) {
    super(router)
  }

  public async setupRoute(): Promise<Router> {
    const databaseAdapter = new MongoDatabaseAdapter()
    const unitRepository = new UnitRepositoryMongoDB(databaseAdapter)
    const assetRepository = new AssetRepositoryMongoDB(databaseAdapter)
    const createUnitUseCase = new CreateUnit(assetRepository, unitRepository)
    const createUnitController = new CreateUnitController(createUnitUseCase)

    const routerAdapter = new RouterAdapterExpress()
    this.router.post('/units', routerAdapter.adapt(createUnitController))

    return this.router
  }
}