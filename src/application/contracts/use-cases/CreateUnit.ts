import { CreateUnitInput } from "@/application/dtos/create-unit/CreateUnitInput";
import { UseCase } from "./UseCase";

export interface CreateUnitUseCase extends UseCase<CreateUnitInput, void> {}