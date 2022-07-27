import React from 'react'
import "./Navbar.css"
 import {FaCartPlus} from "react-icons/fa"
 import { useSelector } from 'react-redux'
 import {Link} from "react-router-dom"
import CartCounter from './CountCart'
const Navbar = () => {
    const state = useSelector((state)=>state.reducer.cart)
  return (
    <div className="nav">
        <div  >
             <Link to="/"><h3 className='logo'>FakeApp</h3>   </Link>
    
        </div>

        <div className="left">
            <Link to="/products"> <h4 className='navh'>Products</h4></Link>
            <h4 className='navh'>Login</h4>
            <h4  className='navh'>SignUp</h4>
             <Link to="/cart"><h3 className='navhh'> Cart <  FaCartPlus/><CartCounter/></h3></Link>
 

        </div>
    </div>
  )
}

export default Navbar