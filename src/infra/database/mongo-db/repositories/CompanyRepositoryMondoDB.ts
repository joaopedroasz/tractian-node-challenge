import { Company } from "@/domain/entities/Company";
import { CompanyRepository } from "@/domain/repositories/company/CompanyRepository";
import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";
import { CompanyModel } from "../models/Company";

export class CompanyRepositoryMongoDB implements CompanyRepository {
  private readonly COLLECTION_NAME = 'companies'

  constructor (private readonly databaseConnection: DatabaseConnection) {}

  public async save (company: Company): Promise<void> {
    let companyCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!companyCollection) {
      await this.databaseConnection.createCollection(this.COLLECTION_NAME)
      companyCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    }

    const unitsIds = company.getUnits().map(unit => unit.getId())
    const employeesIds = company.getEmployees().map(employee => employee.getId())
    const companyToSave = new CompanyModel({
      name: company.getName(),
      description: company.getDescription(),
      unitsIds,
      employeesIds
    })
    await companyCollection?.insertOne(companyToSave)
  }
}