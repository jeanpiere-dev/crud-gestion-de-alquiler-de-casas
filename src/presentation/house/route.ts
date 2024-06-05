import { Router } from "express";
import { HouseService } from "../../services/house.service";
import { HouseController } from "./controller";


export class HouseRoute{
    static get route(): Router{
         const routes = Router();
         const houseServices = new HouseService();
         const controller = new HouseController(houseServices);
         routes.get('/:id', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}