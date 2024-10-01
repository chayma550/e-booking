
import express from "express";
import { countByCity, createHotel,updateHotel,deleteHotel,getHotels,getHotel, countByType, getHotelRooms} from "../controllers/hotel.js";
import {verifyTokenAdmin} from "../utils/verifyToken.js"
const bodyParser=express.urlencoded({extended:true});

const router = express.Router();


//create new hotel

router.post("/",createHotel,bodyParser,verifyTokenAdmin)
//update hotel

router.put("/:id",updateHotel,bodyParser,verifyTokenAdmin)

//delete hotel
router.delete("/:id",deleteHotel,bodyParser,verifyTokenAdmin)
//************************************************************************ */
//get hotel
router.get("/find/:id",bodyParser, getHotel);

//GET ALL
router.get("/", getHotels);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);






export default router