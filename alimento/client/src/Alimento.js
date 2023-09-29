import React, { useEffect,useRef } from 'react'
import logo from './logo_transparent.png'
import Contact from './Contact'
import Cart from './Cart'
import Signup from './Signup'
import Recipes from './Recipes'
import Shop from './Shop';
import { FaHome } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import  { IoIosCall } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import bg from './background.png'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IoLogoFacebook } from 'react-icons/io';
import { IoShareSocial } from 'react-icons/io5';
import { AiFillFacebook,AiOutlineInstagram,AiFillGithub,AiFillRedditCircle,AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp,AiFillTwitterCircle,AiFillYoutube } from 'react-icons/ai';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link, useNavigate } from 'react-router-dom';
import {BsCoin} from "react-icons/bs"
gsap.registerPlugin(ScrollTrigger);



function Alimento() {
 
  const navigate = useNavigate();

  // Define a function to navigate programmatically
  const navigateTo = (route) => {
    navigate(route);
  };
  const mapStyles = {
    height: '300px',
    width: '300px',
  };

  const defaultCenter = {
    lat:23.0570,
    lng:72.5475
  };

  const markerPosition = {
    lat: 23.0362,
    lng: 72.5811
  };
    const timeline = gsap. timeline({
        defaults: { duration: 1, ease: "easeInOut",marker:true},
        repeat:-1,
        
    })
        const e1Ref = useRef()
        const e2Ref = useRef()
        const e3Ref = useRef()
        const lineRef = useRef()
        const DATA = [
        {id: 1, name: 'Fresh', ref: e1Ref},{id: 2, name: 'Fast', ref: e2Ref}, {id: 3, name: 'Convenient', ref: e3Ref},
        ]
    useEffect(() => {
        timeline
        .from(e1Ref.current, {autoAlpha: 0,x: -100, duration: 1})
        .from(e2Ref.current, {autoAlpha: 0, X:-100, duration: 1})
         .from(e3Ref. current, {autoAlpha: 0, x: -100, duration: 1}) 
         .to(e1Ref.current, {autoAlpha: 0, x: -100, duration: 1, delay:1})
        .to (e2Ref. current, {autoAlpha: 0, x: -100, duration: 1})
        .to (e3Ref. current, {autoAlpha: 0, x: -100, duration: 1})
         .to (lineRef.current, {opacity:0,duration:1})

     
        const container = document.querySelector(".slides");
        const slides = Array.from(document.querySelectorAll(".slide"));
        const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
    
        slides.forEach((slide, i) => {
          const bg = slide.querySelector(".background");
          const content = slide.querySelector(".content");
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: slide,
              start: () => i ? "top bottom" : "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
    
          tl.fromTo(
            bg,
            {
              y: () => (i ? -window.innerHeight * getRatio(slide) : 0),
            },
            {
              y: () => window.innerHeight * (1 - getRatio(slide)),
              ease: "none",
            }
          );
    
          tl.fromTo(
            content,
            {
              y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0),
            },
            {
              y: () => window.innerHeight * getRatio(slide) * 2,
              ease: "none",
            },
            0
          );
        });
      }, []);
    
return(
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

    {/* <-------------------------------------------------------------------home----------------------------------------------------------> */}





   <main>
   
      <section className="slides">
        <ul className="list">
          <li className="slide">
            <div
              className="background"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
            ></div>
            <div className="content">
        <span>Alimento</span>

            </div>

          </li>
        
          <li className="slide">
            <div
              className="background"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
            ></div>
            <div className="content">
       Bringing Freshness to Your Door, Forever More
            
            </div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')" }}
            ></div>
            <div className="content2">
            <div className= 'mainBox'> <div className='wrapper'>
            

{DATA. map (el=> {

return (
<div key={el.id} ref={el.ref}>


<h1>{el.year}</h1>
 <p>{el.name}</p>
</div>
)})}

</div>

<br></br>
Transforming Grocery Shopping into a Delightful Experience.

</div>

            </div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80')" }}
            ></div>
            <div className="content">
            Our commitment to quality means you'll always receive fresh and top-notch products. We carefully source our items to ensure you get the best every time.
            </div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')" }}
            ></div>
            <div className="content">
            Browse through our extensive selection of products conveniently categorized for your shopping ease. From fresh produce to pantry essentials<span className='vertical'></span><br></br><br></br>
            </div>
          </li>
        </ul>
      </section>
    </main>

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



export default Alimento
