import { DepartamentModel } from "../data/mongodb/models/departament.model";
import { CreateDepartamentDto } from "../domain/dtos/departament/create-departament.dto";
import { UpdateDepartamentDto } from "../domain/dtos/departament/update-departament.dto";
import { DepartamentEntity } from "../domain/entities/departament.entity";
import { CustomError } from "../domain/errors/custom.error";
import { DepartamentMaper } from "../domain/mapers/departamentMapers";


export class DepartamentService{
    async create (createDepartamentDto:CreateDepartamentDto):Promise<DepartamentEntity>{
        try {

            const departament = await DepartamentModel.create(createDepartamentDto);
            if(!departament) throw CustomError.badRequest("add departament failed")
            await departament.save();
            return DepartamentMaper.fromEntity(departament);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateDepartamentDto:UpdateDepartamentDto, id:string):Promise<DepartamentEntity>{
        try {
            const departament = await DepartamentModel.findByIdAndUpdate(id,{...updateDepartamentDto});
            if(!departament) throw CustomError.badRequest("update departament  failed")
            await departament.save();
            return DepartamentMaper.fromEntity(departament);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(_id:string):Promise<DepartamentEntity>{
        try {
            const departament = await DepartamentModel.findOneAndDelete({_id});
            if(!departament) throw CustomError.badRequest("departament don't exist")
            return DepartamentMaper.fromEntity(departament);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(_id:string):Promise<DepartamentEntity>{
        try {
            const departament = await DepartamentModel.findOne({_id});
            if(!departament) throw CustomError.badRequest("departament don't exist")
            return DepartamentMaper.fromEntity(departament);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}