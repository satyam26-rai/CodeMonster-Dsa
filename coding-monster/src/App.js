 import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
  
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';


 
  
  

function App() {

  const[user,setLoginUser] = useState({});
  return ( 
     <div>
      
       
 
    <div>
     
      <BrowserRouter >
      <Routes>
       

        <Route exact path="/" element =
           {
           user && user._id ? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser} />
           } />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/register" element={<Register/>} />
         
         
         
      </Routes>

       
      </BrowserRouter>

        
    </div>
    
    </div>
     
    
  );
}

export default App;
