import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/hotels" element={<List/>} />
       <Route path="/hotels/:id" element={<Hotel/>} />
       <Route path="/login" element={<Login/>}/>

       
   
         </Routes>
      
       </div>
  );
}

export default App;
