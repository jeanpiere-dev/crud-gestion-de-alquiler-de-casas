import { Router } from "express";
import { DepartamentRoute } from "./departament/route";
import { HouseRoute } from "./house/route";

export class AppRoute{
   static get route(): Router{
        const routes = Router();
        routes.use('/api/departament', DepartamentRoute.route)
        routes.use('/api/house', HouseRoute.route)
        return routes;
    }
}