import { Asset } from "@/domain/entities/Asset";
import { AssetRepository } from "@/domain/repositories/asset/AssetRepository";
import { UnitRepository } from "@/domain/repositories/unit/UnitRepository";
import { CreateAssetUseCase } from "../contracts/use-cases/CreateAsset";
import { CreateAssetInput } from "../dtos/create-asset/CreateAssetInput";

export class CreateAsset implements CreateAssetUseCase {
  constructor(
    private readonly assetRepository: AssetRepository,
    private readonly unitRepository: UnitRepository
  ) { }

  public async execute(input: CreateAssetInput): Promise<void> {
    const {
      image,
      description,
      model,
      status,
      ownerId
    } = input

    const asset = new Asset({ image, description, model, status })

    if (ownerId) {
      const owner = await this.unitRepository.getById(ownerId)
      asset.setOwner(owner)
    }

    await this.assetRepository.save(asset)
  }
}