import { Unit } from "@/domain/entities/Unit";

export interface UnitRepository {
  getById: (id: string) => Promise<Unit>
  save: (unit: Unit) => Promise<void>
}