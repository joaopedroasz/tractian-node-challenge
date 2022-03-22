import { User } from "@/domain/entities/User";

export interface UserRepository {
  getById: (id: string) => Promise<User>
}