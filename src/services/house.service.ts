import { HouseModel } from "../data/mongodb/models/house.model";
import { CreateHouseDto } from "../domain/dtos/house/create-house.dto";
import { UpdateHouseDto } from "../domain/dtos/house/update-house.dto";
import { HouseEntity } from "../domain/entities/house.entity";
import { CustomError } from "../domain/errors/custom.error";
import { HouseMaper } from "../domain/mapers/houseMapers";


export class HouseService{
    async create (createHouseDto:CreateHouseDto):Promise<HouseEntity>{
        try {

            const house = await HouseModel.create(createHouseDto);
            if(!house) throw CustomError.badRequest("add House failed")
            await house.save();
            return HouseMaper.fromEntity(house);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateHouseDto:UpdateHouseDto, id:string):Promise<HouseEntity>{
        try {
            const house = await HouseModel.findByIdAndUpdate(id,{...updateHouseDto});
            if(!house) throw CustomError.badRequest("update House failed")
            await house.save();
            return HouseMaper.fromEntity(house);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(_id:string):Promise<HouseEntity>{
        try {
            const house = await HouseModel.findOneAndDelete({_id});
            if(!house) throw CustomError.badRequest("House don't exist")
            return HouseMaper.fromEntity(house);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(_id:string):Promise<HouseEntity>{
        try {
            const house = await HouseModel.findOne({_id});
            if(!house) throw CustomError.badRequest("departament don't exist")
            return HouseMaper.fromEntity(house);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}