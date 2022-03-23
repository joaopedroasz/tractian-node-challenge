import { Router } from "express";

export interface Route {
  setupRoute: () => Promise<Router>
}