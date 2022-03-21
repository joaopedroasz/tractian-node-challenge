import { AssetStatusTypes, AssetsProps } from './types/Asset'

export class Asset {
  private readonly id?: string
  private readonly image: string
  private readonly description: string
  private readonly model: string
  private readonly owner: string
  private readonly status: AssetStatusTypes

  constructor ({
    id,
    image,
    description,
    model,
    owner,
    status
  }: AssetsProps) {
    this.id = id
    this.image = image
    this.description = description
    this.model = model
    this.owner = owner
    this.status = status
  }
}