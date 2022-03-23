import { Controller } from "@/presentation/contracts/Controller";
import { Handler, Request, Response } from "express";
import { RouterAdapter } from "../contracts/RouterAdapter";

export class RouterAdapterExpress implements RouterAdapter {
  public adapt(controller: Controller): Handler {
    return async (request: Request, response: Response) => {
      const controllerRequest = {
        ...(request.body || {}),
        ...(request.params || {})
      }

      const controllerResponse = await controller.handle(controllerRequest)
      if (controllerResponse.statusCode >= 200 && controllerResponse.statusCode <= 299)
        response.status(controllerResponse.statusCode).json(controllerResponse.body)
      else 
        response.status(controllerResponse.statusCode).json({
          error: controllerResponse.body.message
        })
    }
  }
}