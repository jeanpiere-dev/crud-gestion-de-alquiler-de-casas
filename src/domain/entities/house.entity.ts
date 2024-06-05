export class HouseEntity{
    constructor(
       public id: string,
       public name: string,
       public price:string,
       public address:string,
       public services?:string,
       public descriptions?:string,
       public img?: string
    ){};
}