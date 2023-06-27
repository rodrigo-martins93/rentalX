import { Specification } from "../../cars/model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpeciificationRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpeciificationRepository, ICreateSpecificationDTO };
