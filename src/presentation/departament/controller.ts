import { Request, Response } from "express";
import { DepartamentService } from "../../services/departament.service";
import { CreateDepartamentDto } from "../../domain/dtos/departament/create-departament.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { Validators } from "../../config/validator";
import { UpdateDepartamentDto } from "../../domain/dtos/departament/update-departament.dto";


export class DepartamentController{
    constructor(private readonly departamentServices:DepartamentService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createDepartamentDto] = CreateDepartamentDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.departamentServices.create(createDepartamentDto!)
        .then(Departament => res.json(Departament))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateDepartamentDto] = UpdateDepartamentDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.departamentServices.update(updateDepartamentDto!, id!)
        .then(Departament => res.json(Departament))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.departamentServices.delete(id!)
        .then(Departament => res.json(Departament))
        .catch(error => HandleError.error(error, res))
    }

    findAll = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.departamentServices.findOne(id!)
        .then(Departament => res.json(Departament))
        .catch(error => HandleError.error(error, res))  
    }

}