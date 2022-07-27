import React from 'react'
import "./Home.css"
import  {useDispatch } from 'react-redux'
import { FaStar} from "react-icons/fa"
import { addcart } from '../Redux/action'
const Procard = ({item}) => {
    const dispatch = useDispatch()
    const { id, image,title ,price,rate   } = item;
    const  handlecart = () => {        
        item && dispatch(addcart(item));
      };
  return (
     
          
                        <div className="sinpro" key={id}>
                    <img className='img1' src={image} alt="" />
                    <p className='til'>{title}</p>
                    {/* <p className='des'>{e.description}</p> */}
                     <div className="rate">
                     <p className='pri'> MRP $: {price}  </p>
                     <p className='rating'><FaStar/>{rate}</p> 
                     <button className='add' onClick={handlecart} >Add To Cart</button>
                     </div>
                      
                </div>
                 
    
  )
}

export default Procard