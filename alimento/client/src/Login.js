import React ,{Component, useState}from 'react'
import { FaHome ,FaMapMarkerAlt} from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import  { IoIosCall } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import logo from './logo_transparent.png'
import { AiFillFacebook,AiOutlineInstagram,AiFillGithub,AiFillRedditCircle,AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp,AiFillTwitterCircle,AiFillYoutube } from 'react-icons/ai';
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2';
import {BsFillPersonFill} from 'react-icons/bs'
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {BsCoin} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';



function Login() {
  const mapStyles = {
    height: '300px',
    width: '300px',
  };

  const defaultCenter = {
    lat: 23.03621,
    lng: 72.5811
  };

  const markerPosition = {
    lat: 23.0362,
    lng: 72.5811
  };
  const [name,setName]=useState("")
  const [email,setemail]=useState("")
  const [number,setnumber]=useState("")
  const [add,setadd]=useState("")
  const [pass,setpass]=useState("")



  const handlesubmit= async (e)=>{
    e.preventDefault();
  const val={
  name:name,
  email:email,
  ph:number,
  address:add,
  pass:pass
  }
  const data= await axios.post("http://localhost:5000/db",val)
  alert("User sign up successfully");
  setName("");
  setemail("");
  setnumber("");
  setadd("");
  setpass("");



  }
  return (
    <div>
 <>
 <div>
        <div>
        <div className='container'>
<div className='container-nav'>
    <div className='logo1'>
    <img src={logo} width="100px" height="50px"></img>
        </div></div>
        {/* <span className='button'>Home  */}
<Link to="/">
<div className='container-nav'><div className='nav-center'>
    
   
    <div class="btn-53">
  <div class="original">Home</div>
  <div class="letters">
    
    <span>H</span>
    <span>o</span>
    <span>m</span>
    <span>e</span>

    <span><FaHome /></span>
   
 
  </div> 
  </div>
 

</div></div></Link>

<Link to="/shop">
<div className='container-nav'><div className='nav-center'>
<div class="btn-53">
  <div class="original">Shop</div>
  <div class="letters">
    
    <span>S</span>
    <span>h</span>
    <span>o</span>
    <span>p</span>

    <span><FaShopify /></span>
   
 
  </div> 
  </div>
    
    </div></div>
    </Link>
<Link to="/donate">
<div className='container-nav'><div className='nav-center'>
<div class="btn-533">
  <div class="original">Donate</div>
  <div class="letters">
    
    <span>D</span>
    <span>o</span>
    <span>n</span>
    <span>a</span>
    <span>t</span>
    <span>e</span>
  


    <span>
    <BsCoin/>

    </span>
   
 
  </div> 
  </div>
</div></div>
</Link>
<Link to="/contact">
<div className='container-nav'><div className='nav-center'>
<div class="btn-532">
  <div class="original2">Contact</div>
  <div class="letters2">
    
    <span>C</span>
    <span>o</span>
    <span>n</span>
    <span>t</span>
    <span>a</span>
    <span>c</span>
    <span>t</span>
    <span><IoIosCall /></span>
   
 
  </div> 
  </div>
  
    
    </div></div></Link>
  <Link to="/login">
<div className='container-nav'><div className='nav-center'>
<div class="btn-531">
  <div class="original1">Signup</div>
  <div class="letters1">
    
    <span>S</span>
    <span>i</span>
    <span>g</span>
    <span>n</span>
    <span>u</span>
    <span>p</span>

    <span><GoPersonFill/></span>
 
   
 
  </div> 
  </div>
 
    </div>
   
    </div> </Link>
<div className='container-nav'>
<div>  <div className="InputContainer">
      <input type="text" name="text" className="input" id="input" placeholder="Search" />
      
      <label htmlFor="input" className="labelforsearch">
        <svg viewBox="0 0 512 512" className="searchIcon">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
      </label>
      <div className="border"></div>
  
      <button className="micButton">
        <svg viewBox="0 0 384 512" className="micIcon">
          <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
        </svg>
      </button>
    </div></div>

       </div>
     </div>
      </div>

    </div>
      <div className='form-center'>
      <form className="form_main" onSubmit={handlesubmit}>
      <p className="heading">Signup</p>
      <div className="inputContainer">
      <BsFillPersonFill className="inputIcon"/>
     
        <input
          placeholder="Username"
          id="username"
          className="inputField"
          type="text"
          name='uname'
          value={name}
         onChange={(e)=>{setName(e.target.value)}}
         
        />
      </div>
      <div  className="inputContainer">
      <svg
          viewBox="0 0 16 16"
          fill="#2e2e2e"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="inputIcon"
        >
          <path
            d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
          ></path>
        </svg>
        <input
          placeholder="email"
          id="email"
          className="inputField"
          type="email"
          name='ename'
          value={email}

         onChange={(e)=>{setemail(e.target.value)}}

          

          
          
          
        />
      </div>
      <div  className="inputContainer">
        <IoIosCall className='inputIcon'/>
        <input
          placeholder="Mobile Number"
          id="number"
          className="inputField"
          type="text"
          name='phname'
          value={number}
         onChange={(e)=>{setnumber(e.target.value)}}
          
          
        />
      </div>
      <div  className="inputContainer">
        <FaMapMarkerAlt className='inputIcon'/>
        <input
          placeholder="Address"
          id="address"
          className="inputField"
          type="text"
          name='aname'
          value={add}
          
         onChange={(e)=>{setadd(e.target.value)}}
          
          
         
         
        />
      </div>
      <div className="inputContainer">
      <svg
          viewBox="0 0 16 16"
          fill="#2e2e2e"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="inputIcon"
        >
          <path
            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
          ></path>
      </svg>
        <input
          placeholder="Password"
          id="password"
          className="inputField"
          type="password"
          name='pname'
          value={pass}
         onChange={(e)=>{setpass(e.target.value)}}
          
          
        
        />
       
        
      </div>
      
      <div className='signupContainer'>
      <Link to="/signup">Login</Link> 

      </div>
    
      <button id="button" type='submit'>Submit</button>
      
    </form>
      </div>
      <div className='footer-small'>
      <div className='maps-alimento'>
      <div className="footer">
        <div className="row">
          <ul>
          
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Signup</a></li>
           
          </ul>
          <br></br>
          <ul>
            <li className="social-icon"><AiFillFacebook className="social-icon1"/></li>
            <li className="social-icon"><AiOutlineInstagram className="social-icon1"/></li>
            <li className="social-icon"><AiFillGithub className="social-icon1"/></li>
            <li className="social-icon"><iFillRedditCircle className="social-icon1"/></li>
            <li className="social-icon"><AiOutlineMail className="social-icon1"/></li>
            <li className="social-icon"><AiFillLinkedin className="social-icon1"/></li>
            <li className="social-icon"><AiFillTwitterCircle className="social-icon1"/></li>
          </ul>
        </div>
        
        <div className="row">
        <span className="social-icon1">Founder:prit.s.patel03@gmail.com</span><br></br>
    
     <br></br>
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:Prit
        </div>
        </div>
        <div className='row'>
        <div className='maps'>
<LoadScript
      googleMapsApiKey="AIzaSyBB01pvsegvW-QzLdsrl-r6SDFRB0v9LAY" >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
      </GoogleMap>
    </LoadScript>
</div>
        </div>
      
      </div>
    </div>
      
    </>
    </div>
  )

}



export default Login
