
export class CreateHouseDto{
    constructor(
        public name:string,
        public price:string,
        public address:string,
        public services:string,
        public description:string,
        public image?: string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateHouseDto?]{
        const {name, price, address, services, description, image} = object
        if(!name) return['name is required', undefined]
        if(!price) return['price is required', undefined]
        return [undefined, new CreateHouseDto(name, price, address, services, description, image)]
    }
}
