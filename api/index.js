import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routers/hotel.js";
import authRoute from "./routers/auth.js";
import userRoute from "./routers/users.js"
import roomRoute from "./routers/rooms.js"
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();

//connect to mongodb
mongoose.connect(process.env.MONGO_URL).then(()=>
console.log("DB connecting ")).catch((err)=>{
  console.log(err)  
})



//middlewares:
// Configure CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allow requests from your frontend
  credentials: true,
};
app.use(cors(corsOptions)); // This line was missing
app.use(bodyParser.json());

app.use(cookieParser());

//routers:
app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/users",userRoute)
app.use("/api/rooms",roomRoute)







//connect to server
app.listen(process.env.PORT||8000,()=>{
  console.log("Server running on port " + (process.env.PORT || 8000));
})