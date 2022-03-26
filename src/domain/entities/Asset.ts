import { randomUUID } from 'crypto'
import { AssetStatusTypes, AssetsProps } from './types/Asset'
import { Unit } from './Unit'

export class Asset {
  private readonly id: string
  private readonly image: string
  private readonly description: string
  private readonly model: string
  private owner?: Unit
  private status: AssetStatusTypes

  constructor ({
    id,
    image,
    description,
    model,
    status
  }: AssetsProps) {
    this.id = id ?? randomUUID()
    this.image = image
    this.description = description
    this.model = model
    this.status = status
  }

  public getId(): string {
    return this.id
  }

  public getImage(): string {
    return this.image
  }

  public getDescription(): string {
    return this.description
  }

  public getModel(): string {
    return this.model
  }

  public getStatus(): AssetStatusTypes {
    return this.status
  }

  public getOwnerId(): string | undefined  {
    return this.owner?.getId()
  }

  public setOwner(owner: Unit): void {
    this.owner = owner
  }

  public setStatus(status: AssetStatusTypes) {
    this.status = status
  }
}