import { Company } from "@/domain/entities/Company";
import { CompanyRepository } from "@/domain/repositories/company/CompanyRepository";
import { UnitRepository } from "@/domain/repositories/unit/UnitRepository";
import { UserRepository } from "@/domain/repositories/user/UserRepository";
import { CreateCompanyUseCase } from "../contracts/use-cases/CreateCompany";
import { CreateCompanyInput } from "../dtos/create-company/CreateCompanyInput";

export class CreateCompany implements CreateCompanyUseCase {
  constructor (
    private readonly companyRepository: CompanyRepository,
    private readonly unitRepository: UnitRepository,
    private readonly userRepository: UserRepository,
  ) {}

  public async execute (input: CreateCompanyInput): Promise<void> {
    const company = new Company({ name: input.name, description: input.description })
    
    if (input.unitsIds) 
      for (const unitId of input.unitsIds) {
        const unit = await this.unitRepository.getById(unitId)
        company.addUnit(unit)
      }
    
    if (input.employeesIds)
      for (const userId of input.employeesIds) {
        const user = await this.userRepository.getById(userId)
        company.addEmployee(user)
      }

    await this.companyRepository.save(company)
  }
}