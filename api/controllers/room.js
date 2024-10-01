import Room from "../models/Room.js";
import Hotel from "../models/Hotels.js";

//add room
export const createRooom=async(req,res,next)=>{
   const hotelId = req.params.hotelid;
   const newRoom = new Room(req.body);
 
   try {
     const savedRoom = await newRoom.save();
     try {
       await Hotel.findByIdAndUpdate(hotelId, {
         $push: { rooms: savedRoom._id },
       });
     } catch (err) {
      console.log(err)
     }
     res.status(200).json(savedRoom);
   } catch (err) {
     res.status(401).json(err)
   }
}

//update room
export const updateRoom=async(req,res,next)=>{
    try{
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{
           $set:req.body
        },{new:true})
        res.status(200).json(updatedRoom)
      }catch(err){
        next(err)
      }
}
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
   res.status(401).json(err)
  }
};
//delete room
export const deleteRoom=async(req,res,next)=>{
    try{
        const deleteRoom=await Room.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteRoom)
     }catch(err){
        next(err)
     }
}
//get all rooms
export const getAll=async(req,res,next)=>{
  try{
      const rooms=await Room.find();
      res.status(200).json(rooms)
 }catch(err){
    next(err)
 }

}

