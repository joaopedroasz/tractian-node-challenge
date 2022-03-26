import { CreateAssetInput } from "@/application/dtos/create-asset/CreateAssetInput";
import { UseCase } from "./UseCase";

export interface CreateAssetUseCase extends UseCase<CreateAssetInput, void> {}