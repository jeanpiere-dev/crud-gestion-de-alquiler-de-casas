import { DepartamentEntity } from "../entities/departament.entity"



export class DepartamentMaper{
    static fromEntity(Object:{[key:string]:any}):DepartamentEntity{
        const {id, name, price, address, services, descriptions, img} = Object
        if(!name) throw Error('name is required')
        if(!price) throw Error('price is required')
        return new DepartamentEntity(id, name, price, address, services, descriptions, img)
    }
}