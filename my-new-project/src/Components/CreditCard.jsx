 import React from 'react'
 import "./card.css"
 import {Link } from "react-router-dom"
 import {FaRupeeSign} from "react-icons/fa"
 import "./cart.css"    
 import { useEffect ,useState} from 'react'
 import {FaCheck} from "react-icons/fa"
 import { useSelector } from 'react-redux/es/hooks/useSelector'
 const CreditCard = () => {
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
      }, [cart.length])
   return (
 
         <div className="car">
             <div>
             <div className='card'>
                <h3 className='ch3'>Cash On Delivery <FaCheck/></h3>
            </div>
            <div className='card'>
                <h3 className='ch3'>Your Order Sammary <FaCheck/></h3>
            </div>
            <div className='card'>
                <h3 className='ch3'>Discount <FaCheck/></h3>
            </div>
            <div className='card'>
                <h3 className='ch3' >Best Deals <FaCheck/></h3>
            </div>
             </div>
         

            <div> 
        {
            cart.map((e)=>{
                return (
                    <>
                     <div className='cart'>
                     <img width="210px" height="200px" src={e.image} alt="" />
                     <div className="carth4">
                        <p className='cartt'>{e.title}</p>
                         <p className='cartp'> <FaRupeeSign/>{e.price}</p> 
                         {/* <div className='div'>  <p className='cartr'> Rating : {e.rate}</p>
                         <button className='cartrr'>Remove</button> */}
                         {/* </div> */}
                         
                          
                     </div>
                      
                     </div>

                      
                     

                    </>
                )
            })
        }

         

        <div className='total'>
       <h2>  Cart-Total:₹{amount}</h2>
       <Link to="/cart/checkout/payment/ordered"> <button className='chechbtn'>Place Order</button></Link>
       
        </div>

       
    </div>
         </div>
 
   )
 }
 
 export default CreditCard