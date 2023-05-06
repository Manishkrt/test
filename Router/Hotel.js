import express from "express";
import Hotel from '../Schema/Booking.js'

const route = express.Router()

route.post('/', (req, res)=>{ 
    console.log(req.body)
    // console.log(data)
    res.status(200)
})
route.get('/', (req, res)=>{
    const data = Hotel.find({})
    console.log(data)
    res.status(200)
})

export default route