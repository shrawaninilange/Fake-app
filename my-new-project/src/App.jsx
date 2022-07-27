 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/cart';
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';
 import CreaditCard  from "./Components/CreditCard"
import Thank from './Components/Thank';
import Products from './Components/Products';
function App() {
  return (
    <div  >
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
                <Route path='/cart/checkout' element={<Checkout/>}/>
                <Route path='/cart/checkout/payment' element={<CreaditCard/>}/>
                <Route path='/cart/checkout/payment/ordered' element={<Thank/>}/>

       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
