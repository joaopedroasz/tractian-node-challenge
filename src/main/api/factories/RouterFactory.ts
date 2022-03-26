import { Router } from "express";
import { Route } from "../contracts/Route";
import { CreateAssetRouter } from "../routers/asset-routes/CreateAsset";
import { CreateCompanyRouter } from "../routers/company-routes/CreateCompany";
import { CreateUnitRouter } from "../routers/unit-routes/CreateUnit";

export class RoutesFactory {
  private routes: Route[]

  constructor (public readonly router: Router) {
    this.routes = []
    this.setRoutes()
  }

  private setRoutes(): Route[] {
    return this.routes = [
      new CreateCompanyRouter(this.router),
      new CreateUnitRouter(this.router),
      new CreateAssetRouter(this.router)
    ]
  }
}