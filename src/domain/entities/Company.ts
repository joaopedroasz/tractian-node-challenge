import { CompanyProps } from "./types/company"
import { Unit } from "./Unit"
import { User } from "./User"
import { randomUUID } from 'crypto'

export class Company {
  private readonly id: string
  private readonly name: string
  private readonly description: string
  private units: Unit[]
  private employees: User[]

  constructor ({
    id,
    name,
    description
  }: CompanyProps) {
    this.id = id ?? randomUUID()
    this.name = name
    this.description = description
    this.units = []
    this.employees = []
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getDescription(): string {
    return this.description
  }

  public getUnits(): Unit[] {
    return this.units
  }

  public getEmployees(): User[] {
    return this.employees
  }

  public addUnit(unit: Unit) {
    this.units.push(unit)
  }

  public addEmployee(employee: User) {
    this.employees.push(employee)
  }
}
