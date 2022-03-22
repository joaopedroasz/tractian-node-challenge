import { CompanyProps } from "./types/company"
import { Unit } from "./Unit"
import { User } from "./User"

export class Company {
  private readonly id?: string
  private readonly name: string
  private readonly description: string
  private units: Unit[]
  private employees: User[]

  constructor ({
    id,
    name,
    description
  }: CompanyProps) {
    this.id = id
    this.name = name
    this.description = description
    this.units = []
    this.employees = []
  }

  public addUnit(unit: Unit) {
    this.units.push(unit)
  }

  public addEmployee(employee: User) {
    this.employees.push(employee)
  }
}
