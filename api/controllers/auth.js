import User from "../models/User.js"
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken"
//register
export const register=async(req,res,next)=>{
   
    const newUser=new User({
        ...req.body,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString()
    });

   try{
   const savedUser= await newUser.save()
   const accesstoken=Jwt.sign({
    id:User._id,
    isAdmin:User.isAdmin
},process.env.JWT_SEC,{expiresIn:"3d"})
    res.status(200).json({savedUser,accesstoken})
   
}catch(err){
    next(err)
}
}
//login
export const login=async(req,res,next)=>{
    try{
       const user=await User.findOne(
        {
            username:req.body.username
        }
       )
       !user && res.status(401).send("wrong username")
            const hashedPassword=CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
    );

       const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

       const inputPassword=req.body.password;
    
       originalPassword!=inputPassword &&

       res.status(401).send("wrong password")
       const accessToken=Jwt.sign(
           {
           id:user._id,
           isAdmin:user.isAdmin,
            },
            process.env.JWT_SEC, {expiresIn:"3d"}
            );
       const{password,isAdmin,...others}=user._doc;
       res.
       cookie("access_token",accessToken,{
        htppOnly:true
         })
       .status(200)
       .json({details:{...others},isAdmin})
       

    }catch(err){
        next(err)
    }
}