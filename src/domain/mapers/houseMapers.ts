import { HouseEntity } from "../entities/house.entity"



export class HouseMaper{
    static fromEntity(Object:{[key:string]:any}):HouseEntity{
        const {id, name, price, address, services, descriptions, img} = Object
        if(!name) throw Error('name is required')
        if(!price) throw Error('price is required')
        return new HouseEntity(id, name, price, address, services, descriptions, img)
    }
}