import { UserProps } from "./types/user"

export class User {
  private readonly id?: string
  private readonly name: string
  private readonly email: string

  constructor ({
    id,
    name,
    email
  }: UserProps) {
    this.id = id
    this.name = name
    this.email = email
  }
}