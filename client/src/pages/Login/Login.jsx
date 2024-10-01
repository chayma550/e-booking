import axios from "axios";

import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {loading,error,dispatch}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
  }
  
  const handleClick=async(e)=>{
   e.preventDefault();
   dispatch({type:"LOGIN_START"})
   try{
    const res=await newRequest.post("/auth/login",credentials);
    dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
    navigate("/")
   }catch(err){
    dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
   }
  }
  return (
    <div className="login">
      <div className="lContainer">
        
        <span>e-Booking</span>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
          onChange={handleChange}

        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
          onChange={handleChange}
        />
        <button  className="lButton" onClick={handleClick} disabled={loading}>
          Login
        </button>
        {error && <span>{error.message}</span>}
        <Link to="/register">
        <button style={{background:"none",border:"none",fontWeight:"600",fontSize:"12px"}}>Create Profile</button>
        </Link>
      </div>
      </div>
   
  );
};

export default Login;