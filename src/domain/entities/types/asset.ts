export type AssetStatusTypes = "RUNNING" | "ALERT" | "STOPPED"

export type AssetsProps = {
  id?: string
  image: string
  description: string
  model: string
  status: AssetStatusTypes
}