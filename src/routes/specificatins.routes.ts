import { Router } from "express";
import { createSpecificatonController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificatonController.handle(request, response);
});

export { specificationsRoutes };
