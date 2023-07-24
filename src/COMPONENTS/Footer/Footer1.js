import React from "react";
import "./Footer1.css";
import img from "../../ASSETS/veges.png";

function Footer2() {
  return (
    <div className="footer1">
      <div className="left">
        <img src={img} alt="veges" />
      </div>

      <div className="right">
        <h2>Fresh Vegetables & Fruits at your doorstep</h2>
        <p>
          We deliver fresh vegetables & fruits at your doorstep. We deliver
          fresh vegetables & fruits at your doorstep.
        </p>
      </div>
    </div>
  );
}

export default Footer2;
