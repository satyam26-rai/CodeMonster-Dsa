import React from "react";
import "./homepage.css";
import Logo from "../Background/logo1.png"
 
import home_pic from "./home_pic.svg"
import {Link} from 'react-router-dom';
import Topic from "./Topic/topic";
import Tail from "./Tail/tail";
 
 

const Homepage =({setLoginUser})=>{
 

    return(
          
        <div className="homepage">

            <div className="header-menu">  
            <img src={Logo} alt="" class ="logo" />  
            <button className="button" onClick={()=>setLoginUser({})}>Logout</button>
            </div>
            <hr/>
            <div className="heading">
                 <p>Master the <br/>data structure</p>
                  <img src={home_pic} className='home_pic'/>
            </div> 
            <div class="clear"></div>
            
            <Topic/>

            <hr/>
             
            <Tail/>
            
          
        </div>
       
    )
}
export default Homepage