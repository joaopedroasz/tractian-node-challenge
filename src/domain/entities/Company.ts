import { CompanyProps } from "./types/company"
import { Unit } from "./Unit"
import { User } from "./User"

export class Company {
  private readonly id?: string
  private readonly name: string
  private readonly description: string
  private unities: Unit[]
  private employees: User[]

  constructor ({
    id,
    name,
    description
  }: CompanyProps) {
    this.id = id
    this.name = name
    this.description = description
    this.unities = []
    this.employees = []
  }

  public addUnit(unit: Unit) {
    this.unities.push(unit)
  }

  public addEmployee(employee: User) {
    this.employees.push(employee)
  }
}
