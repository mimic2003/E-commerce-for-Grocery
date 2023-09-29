import React, { useContext,useState ,useRef} from 'react'
import logo from './logo_transparent.png'
// import bg from './background.png'
import { FaHome } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import  { IoIosCall } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
// import { FaSearch } from 'react-icons/fa';
import { AiFillFacebook,AiOutlineInstagram,AiFillGithub,AiFillRedditCircle,AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp,AiFillTwitterCircle,AiFillYoutube } from 'react-icons/ai';
import './App.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { SlEnvolopeLetter } from 'react-icons/sl';
import {BsFillPenFill} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';
import {BsCoin} from "react-icons/bs"


function Contact() {
    const form=useRef()
const sendEmail=(e)=>{
  e.preventDefault();

  emailjs.sendForm('service_4gkrtlj', 'template_biklqtb', form.current, '1IJzPyj9fAoZznOZF')
    .then((result) => {
        console.log(result.text);
        alert("email succesful")
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
        const mapStyles = {
          height: '300px',
          width: '300px'
        };
      
        const defaultCenter = {
          lat: 37.7749,
          lng: -122.4194
        };
      
        const markerPosition = {
          lat: 37.7749,
          lng: -122.4194
        };
  return (
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
<div className='mail'>

<form className="form_main1" ref={form} onSubmit={sendEmail} >
<p className="heading1">Customer Service</p>
      <div className="inputContainer">
      <AiOutlineMail  className="inputIcon"/>
        <input
          placeholder="Email"
          id="username"
          className="inputField"
          type="email"
          name="user_name"
        />
      </div>
      <div className="inputContainer">
      <SlEnvolopeLetter  className="inputIcon"/>
        <input
          placeholder="subject"
          
          className="inputField"
          type="text"
          name='subject'
        
        />
        
      </div>
      <div className="inputContainer">
      <BsFillPenFill  className="inputIcon"/>
      
        <input
         type='text'
          placeholder='How Can We Help??'
          className="inputField"
          
          name='message'
        
        />
        
      </div>
      
     

        <button id="button" type="submit">Submit</button>
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
        <span className="social-icon1">Founder: prit.s.patel03@gmail.com</span><br></br>
    
     <br></br>
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:Prit
        </div>
        </div>
        <div className='row'>
        <div className='maps'>
<LoadScript
      googleMapsApiKey="AIzaSyBB01pvsegvW-QzLdsrl-r6SDFRB0v9LAY"
    >
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
   
  )
}

export default Contact