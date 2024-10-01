import express from "express";
import { deleteUser, getAll, updateUser } from "../controllers/user.js";
import {verifyToken,verifyUser,verifyTokenAdmin} from "../utils/verifyToken.js"
const router = express.Router();

/*
 router.get("/checkauthentication", verifyToken, (req,res,next)=>{
   res.send("hello user, you are logged in")
 })

 router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
   res.send("hello user, you are logged and you can delete or update your account   ")
 })

 router.get("/checkadmin/:id", verifyTokenAdmin, (req,res,next)=>{
    res.send("hello admin, you are logged and you can delete or update your account   ")
  })
*/


//update hotel
router.put("/:id",updateUser,verifyUser)

//delete user
router.delete("/:id",deleteUser,verifyUser)



//get All hotels:
router.get("/",getAll,verifyTokenAdmin)


export default router