import logo from './logo.svg';
import Alimento from './Alimento'
import './App.css';
import Login from './Login';
import Contact from './Contact';
import Signup from './Signup';
import Shop from './Shop';
import Donation from "./Donation"
import Cart from './Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Alimento />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Cart/>}/>
        

      </Routes>
    </Router>

    
        </>

  );
}

export default App;
