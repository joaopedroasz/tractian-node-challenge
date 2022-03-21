import { Asset } from "./Asset"
import { UnitProps } from './types/unit'

export class Unit {
  private readonly id?: string
  private readonly name: string
  private readonly description: string
  private assets: Asset[]

  constructor ({
    id,
    name,
    description
  }: UnitProps) {
    this.id = id
    this.name = name
    this.description = description
    this.assets = []
  }

  public getAssets(): Asset[] {
    return this.assets
  }

  public addAsset(asset: Asset): void {
    this.assets.push(asset)
  }
}