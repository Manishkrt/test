import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
    name : {
        type : "string",
        required : true
    },
    email : {
        type : "string",
        required : true
    },
    phone : {
        type : "string",
        required : true
    },
    check_in : {
        type : "string",
        required : true
    },
    check_out : {
        type : "string",
        required : true
    },
    roomcode : {
        type : "string",
        required : true
    },
})

const Booking = mongoose.model("booking", BookingSchema)
export default Booking