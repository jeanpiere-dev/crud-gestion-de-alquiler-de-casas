
export class UpdateDepartamentDto{
    constructor(
        public id: string,
        public name:string,
        public price:string,
        public address:string,
        public services:string,
        public description:string,
        public image?: string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateDepartamentDto?]{
        const {id, name, price, address, services, description, image} = object
        if(!name) return['name is required', undefined]
        if(!price) return['price is required', undefined]
        return [undefined, new UpdateDepartamentDto(id, name, price, address, services, description, image)]
    }
}    