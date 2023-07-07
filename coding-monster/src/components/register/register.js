import React,{useState} from "react";
import "./register.css";
import axios from "axios";
import backpic from "../Background/4571142.jpg";
import {useNavigate} from "react-router-dom";
import logo from "../homepage/main-logo.png";
import Footer from "../Footer/footer.js";

const Register =()=>{
    const navigate = useNavigate()

    const[user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange = e =>{

        const{name,value}= e.target
        setUser({
            ...user,
            [name]:value
        })
    }
        const register =() => {
            const {name ,email,password ,reEnterPassword} = user

            if(name && email && password && (password === reEnterPassword)){

            axios.post("http://localhost:9002/register",user)
            .then(res =>{
                alert(res.data.message)
                navigate("/login")
            })
            }else{
                alert("invalid input")
            }

        }
    
    return(
        <div className="App"
        style={ {backgroundImage: `url(${backpic})`}}> 
         <img src={logo}/>
        <div className="register">
             
        <h1>Register</h1>
        <input type="text" name ='name' value={user.name} placeholder="Your Name" onChange={handleChange} ></input>
        <input type="text" name='email' value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name ='password' value={user.password} placeholder="Your Pasword" onChange={handleChange}></input>
        <input type="password" name ='reEnterPassword' value={user.reEnterPassword} placeholder="Re-enter Pasword" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register </div>
        <div>or</div>
        <div className="button" onClick={()=>navigate('/login')}>Login </div>
    </div>
     <Footer/>
    </div>
    )
}
export default Register