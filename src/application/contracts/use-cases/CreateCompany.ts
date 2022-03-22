import { CreateCompanyInput } from "@/application/dtos/create-company/CreateCompanyInput";
import { UseCase } from "./UseCase";

export interface CreateCompanyUseCase extends UseCase<CreateCompanyInput, void> {}