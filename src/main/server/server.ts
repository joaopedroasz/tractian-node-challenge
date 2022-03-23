import 'dotenv/config'

import { MongoDatabaseAdapter } from "@/infra/database/mongo-db/adapters/MongoDbAdapter";
import { ExpressApp } from "../api/express/App";

const mongoAdapter = new MongoDatabaseAdapter()

const databaseConnectionURL = process.env.DATABASE_URL!

mongoAdapter.connect(databaseConnectionURL)
  .then(() => {
    new ExpressApp()
  })
  .catch(console.error)