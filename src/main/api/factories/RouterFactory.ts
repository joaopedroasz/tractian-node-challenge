import { Router } from "express";
import { Route } from "../contracts/Route";
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
      new CreateUnitRouter(this.router)
    ]
  }
}