import React from 'react'
import { useState,useEffect } from 'react'
 import { useSelector ,useDispatch } from 'react-redux/es/exports'
 import {FaRupeeSign} from "react-icons/fa"
 
 import "./cart.css"
 import { deleteProductCart } from '../Redux/action'
import { Link } from 'react-router-dom'
import CartCard from './CartCard'
const Cart = () => {
 
 
  const dispatch = useDispatch()
    const cart = useSelector((state)=> state.reducer.cart)
   
    const [amount, setAmount] = useState(0);

    console.log(cart)

    useEffect(() => {
        if(cart.length){
          const total = cart.reduce((acc, elem) => {
            return acc + (+elem.price)
            
          },0)
          setAmount(total)   
        }     
      }, [cart.length,cart]) 

      const removeProduct = (id) => {
        // console.log("going ", id);
        dispatch(deleteProductCart(id));
      }; 
  return (
    <div> 
        {
          cart?.length &&  cart.map((item)=>{
                return (
                    <>
                      <div key={item.id}>
                        <CartCard removeProduct={removeProduct}   item={item}/>
                      </div> 

                      
                     

                    </>
                )
            })
        }

 

        <div className='total'>
       <h2>  Cart-Total:₹{amount}</h2>
       <Link to="/cart/checkout"> <button className='chechbtn'>Proceed To Checkout</button></Link>
       
        </div>

       
    </div>
  )
}

export default Cart