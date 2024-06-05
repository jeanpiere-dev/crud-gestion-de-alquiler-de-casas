import { Router } from "express";
import { DepartamentService } from "../../services/departament.service";
import { DepartamentController } from "./controller";

export class DepartamentRoute{
    static get route(): Router{
         const routes = Router();
         const departamentServices = new DepartamentService();
         const controller = new DepartamentController(departamentServices);
         routes.get('/:id', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}