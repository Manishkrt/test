import mongoose from "mongoose";

const HotelSchema = mongoose.Schema({
    hotel : {
        type : "string",
        required : true
    },
    rooms : {
        type : Array, 
    }
})

const Hotel = mongoose.model("hotel", HotelSchema)
export default Hotel