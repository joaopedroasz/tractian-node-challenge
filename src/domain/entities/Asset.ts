import { AssetStatusTypes, AssetsProps } from './types/Asset'
import { Unit } from './Unit'

export class Asset {
  private readonly id?: string
  private readonly image: string
  private readonly description: string
  private readonly model: string
  private owner?: Unit
  private readonly status: AssetStatusTypes

  constructor ({
    id,
    image,
    description,
    model,
    status
  }: AssetsProps) {
    this.id = id
    this.image = image
    this.description = description
    this.model = model
    this.status = status
  }

  public setOwner(owner: Unit): void {
    this.owner = owner
  }
}