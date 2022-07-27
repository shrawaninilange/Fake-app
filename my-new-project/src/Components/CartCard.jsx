import React from 'react'
import "./cart.css"
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {FaRupeeSign} from "react-icons/fa"
 
 import "./cart.css"
 import { deleteProductCart } from '../Redux/action'
const CartCard = ({item,removeProduct}) => {
    const dispatch = useDispatch()
    const { id, image,title ,price ,rate} = item;
    // const removeProduct = (id) => {
    //     console.log("going ", id);
    //     dispatch(deleteProductCart(id));
    //   }; 
  return (
     (
         <>
         <div className='cart' key={id}>
        <img width="210px" height="200px" src={image} alt="" />
        <div className="carth4">
           <p className='cartt'>{title}</p>
            <p className='cartp'> <FaRupeeSign/>{price}</p> 
            <div className='div'>  <p className='cartr'> Rating : {rate}</p>  
            

             </div>
            
             
        </div>
        <button type='submit' onClick={()=>removeProduct(id)} className='cartrr'>Remove</button> 
        </div>
         </>

     )

      
  )
}

export default CartCard