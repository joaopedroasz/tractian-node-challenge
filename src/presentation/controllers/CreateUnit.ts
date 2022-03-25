import { CreateUnitUseCase } from "@/application/contracts/use-cases/CreateUnit";
import { Controller } from "../contracts/Controller";
import { HttpResponse } from "../types/http";

export class CreateUnitController implements Controller {

  constructor(private readonly createUnitUseCase: CreateUnitUseCase) { }

  public async handle(request: any): Promise<HttpResponse> {
    try {
      const { unitName, unitDescription, assetsIds } = request

      await this.createUnitUseCase.execute({
        name: unitName,
        description: unitDescription,
        assetsIds
      })

      return {
        statusCode: 202,
        body: {
          message: 'Unidade criada com sucesso!'
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