import express, { Application, json, Router } from 'express'
import { Route } from '../contracts/Route'
import { RoutesFactory } from '../factories/RouterFactory'

export class ExpressApp {
  private readonly app: Application

  private readonly API_PORT = process.env.API_PORT || 3001

  constructor () {
    this.app = express()
    this.app.use(json())
    const router = express.Router()
    this.setupRoutes(this.app, router)
    this.app.listen(this.API_PORT, () => console.log(`Server running on port ${this.API_PORT}`))
  }

  private setupRoutes(app: Application, router: Router): void {
    const configuredRoutes = new RoutesFactory(router).router
    app.use('/api', configuredRoutes)
  }
}