import React, { useEffect }   from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import "./Home.css"
import img1 from "../image/img1.jpg"
 
import img3 from "../image/img3.jpg"
import img4 from "../image/img4.jpg"
import {  get1} from "../Redux/action"
import Procard from './Procard';
import Filter from './Filter';
const Home = () => {
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
    <div className="hom">
        <>
        <Carousel>
            <div>
                <img className='img' height="750px"  width="100px" src={img1} alt="" />
            </div>
            <div>
                <img height="750px" className='img' width="100%" src={img3} alt="" />
            </div>
            <div>
                <img height="750px" className='img' width="100%" src={img4} alt="" />
            </div>

        </Carousel>

      <Filter></Filter>

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
    </div>
  )
}

export default Home










