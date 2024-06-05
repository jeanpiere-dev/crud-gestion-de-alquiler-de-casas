import { Response, Request } from "express";
import { CreateHouseDto } from "../../domain/dtos/house/create-house.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { HouseService } from "../../services/house.service";
import { Validators } from "../../config/validator";
import { UpdateHouseDto } from "../../domain/dtos/house/update-house.dto";


export class HouseController{
    constructor(private readonly houseServices:HouseService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createHouseDto] = CreateHouseDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.houseServices.create(createHouseDto!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateHouseDto] = UpdateHouseDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.houseServices.update(updateHouseDto!, id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.houseServices.delete(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))
    }

    findAll = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.houseServices.findOne(id!)
        .then(house => res.json(house))
        .catch(error => HandleError.error(error, res))  
    }

}
