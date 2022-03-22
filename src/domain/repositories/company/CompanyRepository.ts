import { Company } from "@/domain/entities/Company";

export interface CompanyRepository {
  save: (company: Company) => Promise<void>;
}
