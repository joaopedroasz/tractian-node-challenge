import { UserProps } from "./types/user"
import { randomUUID } from 'crypto'

export class User {
  private readonly id: string
  private readonly name: string
  private readonly email: string

  constructor ({
    id,
    name,
    email
  }: UserProps) {
    this.id = id ?? randomUUID()
    this.name = name
    this.email = email
  }

  public getId(): string {
    return this.id
  }

  public hasId(): boolean {
    return Boolean(this.id)
  }
}