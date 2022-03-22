import { Company } from "@/domain/entities/Company";
import { CompanyRepository } from "@/domain/repositories/company/CompanyRepository";
import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";
import { CollectionNotFoundError } from "../../errors/CollectionNotFound";

export class CompanyRepositoryMongoDB implements CompanyRepository {
  private readonly COLLECTION_NAME = 'companies'

  constructor (private readonly databaseConnection: DatabaseConnection) {}

  public async save (company: Company): Promise<void> {
    const companyCollection = this.databaseConnection.getCollection(this.COLLECTION_NAME)
    if (!companyCollection) throw new CollectionNotFoundError(this.COLLECTION_NAME)
    await companyCollection.insertOne(company)
  }
}