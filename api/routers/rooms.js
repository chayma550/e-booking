import express from "express";
const router = express.Router();
import { createRooom, deleteRoom, getAll, updateRoom, updateRoomAvailability} from "../controllers/room.js"
import {verifyTokenAdmin} from "../utils/verifyToken.js"
const bodyParser=express.urlencoded({extended:true});

//create new hotel

router.post("/:hotelid",bodyParser,createRooom)
//update hotel
router.put("/availability/:id",bodyParser, updateRoomAvailability);

router.put("/:id",bodyParser,updateRoom,verifyTokenAdmin)



//delete hotel
router.delete("/:id",bodyParser,deleteRoom,verifyTokenAdmin)

//get All hotels:
router.get("/",getAll,bodyParser,verifyTokenAdmin)

export default router