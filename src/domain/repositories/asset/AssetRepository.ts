import { Asset } from "@/domain/entities/Asset";

export interface AssetRepository {
  getById: (id: string) => Promise<Asset>
  save: (asset: Asset) => Promise<void>
}