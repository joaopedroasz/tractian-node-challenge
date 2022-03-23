import { CreateCompanyUseCase } from "@/application/contracts/use-cases/CreateCompany";
import { Controller } from "../contracts/Controller";
import { HttpResponse } from "../types/http";

export class CreateCompanyController implements Controller {

  constructor (private readonly createCompanyUseCase: CreateCompanyUseCase) {}

  public async handle(request: any): Promise<HttpResponse> {
    try {
      const { companyName, companyDescription, unitsIds, employeesIds } = request

      await this.createCompanyUseCase.execute({
        name: companyName,
        description: companyDescription,
        unitsIds,
        employeesIds
      })

      return {
        statusCode: 200,
        body: {
          message: 'Empresa criada com sucesso!'
        }
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: {
          message: error.message ?? error
        }
      }
    }
  }
}