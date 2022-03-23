import { Handler } from 'express'

import { Controller } from "@/presentation/contracts/Controller";

export interface RouterAdapter {
  adapt: (controller: Controller) => Handler
}
