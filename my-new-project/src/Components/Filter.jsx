import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch   } from "react-redux/es/exports";
 import { get1 } from "../Redux/action";
import "./Home.css"
const Filter = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const urlSort =searchParams.get("sortBy")
   const [sortBy, setSortBy] = useState( urlSort || "");
    const urlCategory =searchParams.getAll("category")
   const [category, setcategory] = useState( urlCategory || []);
    
  
   const handleCheckbox = (e) => {
     const option = e.target.value;
     console.log(option)
     let newCategory = [...category];
     if (category.includes(option)) {
       newCategory.splice(newCategory.indexOf(option), 1);
     } else {
       newCategory.push(option);
     }
     setcategory(newCategory);
   };
   console.log(category);
   console.log(searchParams);
  
   useEffect(() => {
     if (category) {
       setSearchParams({  category });
      dispatch(get1({params: {category}}))
   
      
      }
   }, [category, dispatch,setSearchParams]);


   const handlesort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (sortBy) {
      const params = {
        category: searchParams.getAll("category"),
        sortBy,
      };
      const getBooksparams={
        params:{
          category:searchParams.getAll("category"),
          _sort :"price",
          _order:sortBy,

        }
      }
      setSearchParams(params);
      dispatch(get1(getBooksparams))
    }
  }, [setSearchParams, sortBy, dispatch,searchParams]);

  console.log(sortBy);
  return (
    <div className="prosort">
         {/* <div className="label">
       <label   htmlFor="">All</label>
    <input type="checkbox" 
  
    onChange={handleCheckbox}
    value="All"
    defaultChecked={category.includes("All")}
    />
    </div> */}
    <div className="label">
       <label   htmlFor="">men</label>
    <input type="checkbox" 
  
    onChange={handleCheckbox}
    value="men"
    defaultChecked={category.includes("men")}
    />
    </div>
    <div  className="label">
       <label htmlFor="">Bag</label>
    <input type="checkbox"
    onChange={handleCheckbox}
    value="bag"
    defaultChecked={category.includes("bag")}
     />
    </div>
    <div  className="label">
       <label htmlFor="">women</label>
    <input type="checkbox" 
    onChange={handleCheckbox}
    value="women"
    defaultChecked={category.includes("women")}
    />
    </div>  
    <div  className="label">
       <label htmlFor="">Bracelet</label>
    <input type="checkbox" 
    onChange={handleCheckbox}
    value="brac"
    defaultChecked={category.includes("brac")}
    />
    </div>  
    <div onChange={handlesort} className="sort">
        <input
        className="ss"
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        Ascending
        <input
          className="ss"
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        Descending
      </div>
    
</div>
  )
}

export default Filter