import { Collection } from "mongodb"

export interface DatabaseConnection {
  connect: (url: string) => Promise<void>
  disconnect: () => Promise<void>
  createCollection: (collectionName: string) => Promise<void>
  getCollection: (collectionName: string) => Collection | undefined
}