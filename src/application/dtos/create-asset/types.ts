import { AssetStatusTypes } from "@/domain/entities/types/Asset"

export type CreateAssetInputProps = {
  image: string
  description: string
  model: string
  ownerId?: string
  status: AssetStatusTypes
}