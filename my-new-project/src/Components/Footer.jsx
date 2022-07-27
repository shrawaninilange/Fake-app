import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="fot_con">
      <div className="foot_con">
        <div className="fot_div">
          <p className="foot_p">NEED HELP?</p>
          <p className="foot_p">Chat with an Artist</p>
          <p className="foot_p">Text An Artist</p>
          <p className="foot_p">Call Us (877)-310-922</p>
          <p className="foot_p">Shipping & Returns</p>
          <p className="foot_p">FAQS</p>
          <p className="foot_p">Careers</p>
        </div>
        <div className="fot_div">
          <p className="foot_p">MY BOBBI BROWN</p>
          <p className="foot_p">BB Access</p>
          <p className="foot_p">My Account</p>
          <p className="foot_p">My Orders</p>
          <p className="foot_p">Store Locator</p>
        </div>
        <div id="input" className="fot_div">
          <input type="text" className="in" placeholder="ENTER YOUR EMAIL" />
          <input type="text" className="in" placeholder="ENTER YOUR NUMBER" />
          <input type="button" className="in" value="SUBMIT" />
          <p className="foot_p">FOLLOW US</p>
        </div>
      </div>
      <hr />

      <div>
        <div className="foot_connn">
          <div>
            <p className="foot_pp">
              © Bobbi Brown Professional Cosmetics, Inc. All worldwide rights
              reserved.
            </p>
          </div>
          <div>
            <p className="foot_pp">Term And Conditions</p>
          </div>
          <div>
            <p className="foot_pp">interest based ads </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
