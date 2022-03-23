import { Asset } from "./Asset"
import { UnitProps } from './types/unit'
import { randomUUID } from 'crypto'

export class Unit {
  private readonly id: string
  private readonly name: string
  private readonly description: string
  private assets: Asset[]

  constructor ({
    id,
    name,
    description
  }: UnitProps) {
    this.id = id ?? randomUUID()
    this.name = name
    this.description = description
    this.assets = []
  }

  public getId(): string {
    return this.id
  }

  public hasId(): boolean {
    return Boolean(this.id)
  }

  public getAssets(): Asset[] {
    return this.assets
  }

  public addAsset(asset: Asset): void {
    this.assets.push(asset)
  }
}