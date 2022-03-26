import { AssetStatusTypes } from "@/domain/entities/types/Asset"
import { CreateAssetInputProps } from "./types"

export class CreateAssetInput {
  public readonly image: string
  public readonly description: string
  public readonly model: string
  public readonly ownerId?: string
  public readonly status: AssetStatusTypes

  constructor({
    image,
    description,
    model,
    ownerId,
    status
  }: CreateAssetInputProps) {
    this.image = image
    this.description = description
    this.model = model
    this.ownerId = ownerId
    this.status = status
  }
}