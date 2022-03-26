import { AssetStatusTypes } from "@/domain/entities/types/Asset"
import { AssetModelProps } from "./types"

export class AssetModel {
  public readonly image: string
  public readonly description: string
  public readonly model: string
  public readonly ownerId?: string
  public readonly status: AssetStatusTypes

  constructor ({
    image,
    description,
    model,
    ownerId,
    status
  }: AssetModelProps) {
    this.image = image
    this.description = description
    this.model = model
    this.ownerId = ownerId
    this.status = status
  }
}