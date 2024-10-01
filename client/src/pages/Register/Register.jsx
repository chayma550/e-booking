import axios from "axios";
import "./register.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
    country:undefined
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" }); // Dispatch start action
    try {
      const res = await newRequest.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details }); // Dispatch success action
      navigate("/login"); 
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data }); // Dispatch failure action
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <span>e-Booking</span>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Country"
          id="country"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          className="rInput"
          onChange={handleChange}
        />
        <button
          className="rButton"
          onClick={handleClick}
          disabled={loading}
        >
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
