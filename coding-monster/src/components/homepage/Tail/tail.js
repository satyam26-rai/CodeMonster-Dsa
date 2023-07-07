import React from "react";
import './tail.css';
import Github from "../github.png";
import Instagram from "../instagram.png";
import LinkedIn from "../linkedin.png";
import logo from "../../Background/logo1.png";
const Tail =()=>{
    return (
         <div className="Footer-container">
            <hr/>
            <div className="tail">
            <div className="social-Links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">  
                <img src={logo} alt="" />
            </div>
         </div>
         
         </div>
          
    );
};
export default Tail;