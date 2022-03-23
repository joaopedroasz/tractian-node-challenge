import { HttpResponse } from "../types/http";

export interface Controller {
  handle: (request: any) => Promise<HttpResponse>
}