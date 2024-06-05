import mongoose from "mongoose";


const houseSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'name Is Required']
    },
    price: {
        type:String,
        required:[true, 'price is required']
    },
    address:{
        type:String,
    },

    services:{
        type:String
    },

    description:{
        type:String
    },

    img:{
        type:String,
    }
})

export const HouseModel = mongoose.model('house',houseSchema)