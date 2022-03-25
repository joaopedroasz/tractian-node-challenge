import { CreateUnitInputProps } from "./types"

export class CreateUnitInput {
  public readonly name: string
  public readonly description: string
  public readonly assetsIds?: string[]

  constructor({
    name,
    description,
    assetsIds
  }: CreateUnitInputProps) {
    this.name = name
    this.description = description
    this.assetsIds = assetsIds
  }
}