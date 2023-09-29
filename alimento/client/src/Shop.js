import React, { useState, useEffect, useRef  } from 'react'

import { FaHome } from 'react-icons/fa';
import { FaShopify,FaRupeeSign } from 'react-icons/fa';
import  { IoIosCall } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import logo from './logo_transparent.png'
import { AiFillFacebook,AiOutlineInstagram,AiFillGithub,AiFillRedditCircle,AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp,AiFillTwitterCircle,AiFillYoutube } from 'react-icons/ai';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Cart from './Cart';
import { Link } from 'react-router-dom'; 
import {BsCoin} from "react-icons/bs"
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';


function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quant,setquant]=useState(0)
  const cartRef = useRef(null);
  const [filteredProduct1, setFilteredProduct1] = useState([]);
  const [email,setemail]=useState("")
  const payment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/create-checkout-session', {
        cart, 
        itemQuantity: quant, // Send the total quantity of items in the cart
        totalPrice: getTotalPrice(),// Send the simplified cart data to the server
        email:email,
        orderDetails: cart,
      });
  
      const session = response.data;
  
      const stripe = await loadStripe('pk_test_51NkQrDSCQwihxT84TvGsWoX8KPDnMsTmtQGxafsnh3uYr9ecelJ7dK1HE0vy21cJE5g8SQOC69cog0cGhoF6n54d00BpbwSnT5');
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const scrollToCart = () => {
    if (cartRef.current) {
      // Scroll to the cart section
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    // Fetch data from the API
    fetch('https://mimic2003.github.io/api1234.json/api1234.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  const addToCart = (product) => {
    const existingCartItem = cart.find(item => item.id === product.id);

    if (existingCartItem) {
      // If the product is already in the cart, increase its quantity
      existingCartItem.quantity += 1;
      setCart([...cart]);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
      
    }
   
    setquant(quant+1)
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);

  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  const filteredProducts = products.filter((product) =>
  categoryFilter === 'All' ? true : product.category === categoryFilter
);

const categories = ['All', ...new Set(products.map((product) => product.category))];

const incrementCartItem = (product) => {
  const updatedCart = cart.map((item) => {
    if (item.id === product.id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
  setquant(quant+1)

  setCart(updatedCart);
};

const decrementCartItem = (product) => {
  const updatedCart = cart.map((item) => {
    if (item.id === product.id && item.quantity > 1) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
  setquant(quant-1)

  setCart(updatedCart);
};

  const mapStyles = {
    height: '300px',
    width: '300px',
  };

  const defaultCenter = {
    lat: 23.0362,
    lng: 72.5811
  };

  const markerPosition = {
    lat: 23.0362,
    lng: 72.5811
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
      <input type="text" name="text" className="input" id="input" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch} className="micButton">
      <label htmlFor="input" className="labelforsearch">
        <svg viewBox="0 0 512 512" className="searchIcon">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
      </label></button>
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


  <div className="product123">

    <div className="product12">
      <div className='product1234'>Categorys</div>
    {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            class="Btn"
          >
            {category}
          </button>
        ))}
        <br></br>
        
      
       

  <button onClick={scrollToCart} class="Btn" >Cart <FaShoppingCart/> <span className='red-dot'>{quant}</span></button>

    </div>

    <div className="product-container">
   
 
    {filteredProducts.map(product => (

 <div className='shop'>
 <div className="product-card">
    <div className="product-content">
      <div className="product-back">
        <div className="product-back-content">
          <img src={product.url} alt="Tomato" className='img1'/>
          <strong>{product.name}</strong>
        </div>
      </div>
      <div className="product-front">
        <div className="product-img">
          <div className="product-circle"></div>
          <div className="product-circle" id="right"></div>
          <div className="product-circle" id="bottom"></div>
        </div>
        <div className="product-front-content">
          <small className="product-badge">{product.category}</small>
          <div className="product-description">
            <div className="product-title">
              <p className="product-title">
                <strong>{product.price}kg</strong>
              </p>
            </div>
            <p className="product-card-footer">
              {product.description}
       
             </p>
             <div className='shopcart-center'>
             <button tabindex="0" class="plusButton" onClick={() => addToCart(product)}>
             <svg
      class="plusIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <g mask="url(#mask0_21_345)">
        <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
      </g>
    </svg>
</button>

</div> 
          </div>
        </div>
      </div>
    </div>
  </div>

</div>))}

</div>
</div>
<div>
 
<div className='Cart-style' ref={cartRef}>Cart</div>

<div className='cart-main' >
 

      <div className='cart-main-items'>
        {
        cart.length > 0 ? (
        cart.map((cartItem,index) => (
          <div className='cart-center' key={cartItem.id}>
            <div className='index-style'>
              {index+1}.
              </div>
            <div>
              <img src={cartItem.url} className='cart-image' alt={cartItem.name} />
            </div>
            <div className='cartname-width'>
              <h3>
                {cartItem.name} :- 
              </h3>
            </div>
            
            <div className='cartprice-width'>
              <h3 className="cart-price">
                <FaRupeeSign /> {cartItem.price * cartItem.quantity}
              </h3>
            </div>
            <div>
              <div className="prodcut-quantity-main">
                <div >
                <button className="tooltip" onClick={() => decrementCartItem(cartItem) }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
  <path fill="#6361D9" d="M2.5 10C2.03906 10 1.66663 10.3724 1.66663 10.8333C1.66663 11.2933 2.03906 11.6657 2.5 11.6657H17.5C17.9609 11.6657 18.3333 11.2933 18.3333 10.8333C18.3333 10.3724 17.9609 10 17.5 10H2.5Z"/>
</svg>
  
                </button>
                </div>
                <div className='quantity-number'>
                {cartItem.quantity} kg 
                </div>
                <div>
                <button onClick={() => incrementCartItem(cartItem)} className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
  <path fill="#6361D9" d="M10 1.66663C10.4609 1.66663 10.8333 2.03906 10.8333 2.49996V17.5C10.8333 17.9609 10.4609 18.3333 10 18.3333C9.53906 18.3333 9.16663 17.9609 9.16663 17.5V2.49996C9.16663 2.03906 9.53906 1.66663 10 1.66663ZM2.5 10C2.03906 10 1.66663 10.3724 1.66663 10.8333C1.66663 11.2933 2.03906 11.6657 2.5 11.6657H17.5C17.9609 11.6657 18.3333 11.2933 18.3333 10.8333C18.3333 10.3724 17.9609 10 17.5 10H2.5Z"/>
</svg>
  
                </button>
                </div>
<div>

<button className="tooltip" onClick={() => removeFromCart(cartItem)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  
</button>
  </div>
           
    </div>
            
    
              </div>
            </div>
        
        ))
        ): (
          <div className="empty-cart-message">
<div className="empty-cart-message1">

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  width="100"
  height="100"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="8" y1="15" x2="16" y2="15" />
  <line x1="9" y1="9" x2="9.01" y2="9" />
  <line x1="15" y1="9" x2="15.01" y2="9" />
</svg>
</div>


          </div>
        )
      }
        
        <div >
          <div className="cart-total">
          <div>
             <p className="total-price">Total: <FaRupeeSign /> {getTotalPrice()}
         
         </p>
            </div>
        
<div className="pay">
  
  <div>
  <input
  type="email" placeholder="Confirmation email" className="inputField" value={email} onChange={(e) => setemail(e.target.value)}/>
  </div>
<div>
<button className="btn12345" onClick={payment} >
      Pay
      <svg className="svgIcon" viewBox="0 0 576 512">
        <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0-24-10.7-24-24s10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0-24-10.7-24-24s10.7-24-24-24H248z"></path>
      </svg>
    </button>
</div>


</div>
          </div>
         
        </div>
      </div>
    </div>
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
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By Prit
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


export default Shop
