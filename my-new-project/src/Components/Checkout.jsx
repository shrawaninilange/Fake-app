import React from "react";
import { useSelector } from "react-redux";
import "./checkout.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Checkout = () => {
  const nav = useNavigate();
  const [username, setusername] = useState("");
  const [add, setadd] = useState("");
  const [number, setnumber] = useState("");
  const [pincode, setpin] = useState("");
  const [city, setcity] = useState("");
  const [newd, setnewd] = useState([]);

  const on = (e) => {
    e.preventDefault();
    if(add && username && pincode && number && city)
    {
      const newff = {
        username: username,
        city: city,
        number: number,
        pincode: pincode,
        add: add,
      };
      setnewd([...newd, newff]);
      console.log(newd);
      nav("/cart/checkout/payment")
    }
    else{
      alert("Please Fill Data")
    }
  };
  //   var total=0
  //   const cartt = (e) => {
  //     total = total + e.price;
  //     return (
  //       <div className="right">
  //         <h3>Price Details</h3>

  //         <div className="chechtt">
  //           <h4>Total Product price</h4>
  //           <p className="chpp">{e.price  +0}</p>
  //         </div>
  //         <div className="chechtt">
  //           <h4> Meesho Discount</h4>
  //           <p className="chpp"> -0</p>
  //         </div>
  //         <hr />
  //         <div className="chechtt">
  //           <h4> Order Total</h4>

  //           <p className="chppp"> {e.price  }</p>
  //         </div>
  //       </div>
  //     );
  //   };
  return (
    <div className="check1">
      <form action="" onSubmit={on}>
        <div className="checkleft">
          <h1 className="contactd">Contact Details</h1>
          <input
            type="text"
            onChange={(e) => setusername(e.target.value)}
            className="inch"
            name=""
            required="true"
            id=""
            placeholder="Enter Your Name"
          />
          <div>
            <input
              className="inch"
              onChange={(e) => setnumber(e.target.value)}
              value={number}
              type="number"
              name=""
              id=""
              required={true}
              placeholder="Enter Your Number"
            />
          </div>
          <div>
            <input
              className="inch"
              onChange={(e) => setadd(e.target.value)}
              value={add}
              type="text"
              name=""
              id=""
              placeholder="Enter Your Address"
              required="true"
            />
          </div>
          <div>
            <input
              className="inch"
              onChange={(e) => setpin(e.target.value)}
              value={pincode}
              type="number"
              name=""
              required="true"
              id=""
              placeholder="Enter Your Pin-Code"
            />
          </div>
          <div>
            <input
              className="inch"
              onChange={(e) => setcity(e.target.value)}
              value={city}
              type="text"
              name=""
              id=""
              required="true"
              placeholder="Enter Your city"
            />
          </div>
           
            {" "}
            <button className="checktbn">Continue</button>
          
        </div>
      </form>
      {/* <div>{state.length !== 0 && state.map(cartt)} */}
      {/* <h2>Total Cart Price : {  total}</h2>  */}
      {/* </div> */}

      <div>
        <img
          className="go"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Checkout;
