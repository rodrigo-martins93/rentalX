import { SpecificationsRepository } from "../../../cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificatonController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

const createSpecificatonController = new CreateSpecificatonController(
  createSpecificationUseCase
);

export { createSpecificatonController };
