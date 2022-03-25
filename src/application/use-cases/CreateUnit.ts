import { Unit } from "@/domain/entities/Unit";
import { AssetRepository } from "@/domain/repositories/asset/AssetRepository";
import { UnitRepository } from "@/domain/repositories/unit/UnitRepository";
import { CreateUnitUseCase } from "../contracts/use-cases/CreateUnit";
import { CreateUnitInput } from "../dtos/create-unit/CreateUnitInput";

export class CreateUnit implements CreateUnitUseCase {
  private readonly assetRepository: AssetRepository
  private readonly unitRepository: UnitRepository

  constructor(assetRepository: AssetRepository, unitRepository: UnitRepository) {
    this.assetRepository = assetRepository
    this.unitRepository = unitRepository
  }


  public async execute (input: CreateUnitInput): Promise<void> {
    const unit = new Unit({ name: input.name, description: input.description })

    if (input.assetsIds) {
      for (const assetId of input.assetsIds) {
        const asset = await this.assetRepository.getById(assetId)
        unit.addAsset(asset)
      }
    }

    await this.unitRepository.save(unit)
  }
}