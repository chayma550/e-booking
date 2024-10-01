
import User from "../models/User.js"
//update user
export const updateUser=async(req,res,next)=>{
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,{
           $set:req.body
        },{new:true})
        res.status(200).json(updateUser)
      }catch(err){
        next(err)
      }
}
//delete user
export const deleteUser=async(req,res,next)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)
     }catch(err){
        next(err)
     }
}
//get all users
export const getAll=async(req,res,next)=>{
    try{
        const users=await User.find();
        res.status(200).json(users)
   }catch(err){
      next(err)
   }

}