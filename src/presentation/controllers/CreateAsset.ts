import { CreateAssetUseCase } from "@/application/contracts/use-cases/CreateAsset";
import { Controller } from "../contracts/Controller";
import { HttpResponse } from "../types/http";

export class CreateAssetController implements Controller {
  constructor(private readonly createAssetUseCase: CreateAssetUseCase) { }

  public async handle(request: any): Promise<HttpResponse> {
    try {
      const {
        assetImage,
        assetDescription,
        assetModel,
        assetStatus,
        ownerId
      } = request

      await this.createAssetUseCase.execute({
        image: assetImage,
        description: assetDescription,
        model: assetModel,
        status: assetStatus,
        ownerId
      })

      return {
        statusCode: 200,
        body: {
          message: 'Ativo criado com sucesso!'
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