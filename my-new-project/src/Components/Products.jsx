import React, { useEffect }   from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import "./Home.css"
 
import {  get1} from "../Redux/action"
import Procard from './Procard';
import Filter from './Filter';
import "./Home.css"
const Products = () => {
    const dispatch = useDispatch()
     
    const products = useSelector((state)=>state.reducer.products)
 
    // console.log(products)
    useEffect(()=>{
        if(products?.length === 0)
        {
            dispatch(get1())
        }
    },[])
  return (
     <>
     <Filter/>
     <div className="pro">
    {
        products.map((item)=>{
            return (
                <div key={item.id}>
                <Procard item={item}/>
              </div>    
            )
        })
    }
    </div>
     </>
 
  )
}

export default Products