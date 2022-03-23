import { CreateCompany } from "@/application/use-cases/CreateCompany";
import { MongoDatabaseAdapter } from "@/infra/database/mongo-db/adapters/MongoDbAdapter";
import { CompanyRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/CompanyRepositoryMondoDB";
import { UnitRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/UnitRepositoryMongoDB";
import { UserRepositoryMongoDB } from "@/infra/database/mongo-db/repositories/UserRepositoryMongoDB";
import { CreateCompanyController } from "@/presentation/controllers/CreateCompany";
import { Router } from "express";
import { RouterAdapterExpress } from "../../adapters/RouterAdapterExpress";
import { Route } from "../../contracts/Route";
import { RouterAdapter } from "../../contracts/RouterAdapter";

export class CreateCompanyRouter implements Route {
  constructor (
    private readonly router: Router
  ) {
    this.setupRoute()
  }

  public async setupRoute(): Promise<Router> {
    const mongoDatabase = new MongoDatabaseAdapter()
    const userRepository = new UserRepositoryMongoDB(mongoDatabase)
    const unitRepository = new UnitRepositoryMongoDB(mongoDatabase)
    const companyRepository = new CompanyRepositoryMongoDB(mongoDatabase)
    const createCompanyUseCase = new CreateCompany(companyRepository, unitRepository, userRepository)
    const createCompanyController = new CreateCompanyController(createCompanyUseCase)

    const routerAdapter = new RouterAdapterExpress()

    this.router.post('/companies', routerAdapter.adapt(createCompanyController))

    return this.router
  }
}