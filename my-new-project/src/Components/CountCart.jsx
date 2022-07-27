import React, { useEffect } from "react";
 
import { useDispatch, useSelector } from "react-redux";
 import {fetchCart} from "../Redux/action"


const CartCounter = () => {
  const cart = useSelector((store) => store.reducer.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCart());
    }
  }, [cart?.length, dispatch]);

  return (
    
       <>
       {cart?.length ? cart.length : 0}
       </>
 
  );
};

export default CartCounter;