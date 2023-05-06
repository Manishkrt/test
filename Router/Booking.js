import express from "express";
import Booking from '../Schema/Booking.js'

const route = express.Router()

route.post('/', (req, res)=>{
    console.log(req.body)
    console.log("request")
})

export default route