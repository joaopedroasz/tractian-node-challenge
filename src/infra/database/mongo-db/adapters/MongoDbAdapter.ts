import { DatabaseConnection } from "@/infra/contracts/DatabaseConnection";
import { Collection, MongoClient } from "mongodb";

export class MongoDatabaseAdapter implements DatabaseConnection {
  private client?: MongoClient
  private url?: string

  public async connect (url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url)
  }

  public async disconnect (): Promise<void> {
    if (!this.client) return
    this.client.close()
    this.client = undefined
  }

  public async createCollection(name: string): Promise<void> {
    if (!this.client) return
    await this.client.db().createCollection(name)
  }

  public getCollection (collectionName: string): Collection | undefined {
    if (!this.client) return
    return this.client.db().collection(collectionName)
  }
}