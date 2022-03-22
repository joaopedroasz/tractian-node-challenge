import { CreateCompanyInputProps } from "./types"

export class CreateCompanyInput {
  public readonly name: string
  public readonly description: string
  public readonly unitsIds?: string[]
  public readonly employeesIds?: string[]

  constructor ({
    name,
    description,
    unitsIds,
    employeesIds
  }: CreateCompanyInputProps) {
    this.name = name
    this.description = description
    this.unitsIds = unitsIds
    this.employeesIds = employeesIds
  }
}