import { UnitModelProps } from "./types"

export class UnitModel {
  public readonly name: string
  public readonly description: string
  public readonly assetsIds?: string[]

  constructor({
    name,
    description,
    assetsIds
  }: UnitModelProps) {
    this.name = name
    this.description = description
    this.assetsIds = assetsIds
  }
}