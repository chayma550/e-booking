import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express.Router();
const bodyParser=express.urlencoded({extended:true});

//register
router.post("/register",register,bodyParser)
router.post("/login",login,bodyParser)








export default router