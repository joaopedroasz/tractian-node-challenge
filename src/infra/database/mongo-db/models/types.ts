import { AssetStatusTypes } from "@/domain/entities/types/Asset"

export type CompanyModelProps = {
  name: string
  description: string
  unitsIds: string[]
  employeesIds: string[]
}

export type UnitModelProps = {
  name: string
  description: string
  assetsIds: string[]
}

export type AssetModelProps = {
  image: string
  description: string
  model: string
  ownerId?: string
  status: AssetStatusTypes
}