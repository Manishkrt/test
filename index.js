
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import BookRoute from './Router/Booking.js'
import HotelRoute from './Router/Hotel.js'
import bodyParser from 'body-parser'
 
mongoose.connect("mongodb+srv://manish:manish@cluster0.l2er0tj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db is connected")
})
const app = express()
app.use(cors())
app.use(bodyParser())
app.use('/booking', BookRoute )
app.use('/hotel', HotelRoute )



app.listen(5500, ()=>{
    console.log("node start")
})