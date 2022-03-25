import { Router } from "express";

export abstract class Route {
  constructor (
    readonly router: Router
  ) {
    this.setupRoute()
  }

  public abstract setupRoute(): Promise<Router>
}