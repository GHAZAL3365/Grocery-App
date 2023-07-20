import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/or.png";
import img2 from "../../ASSETS/home.png";
import img3 from "../../ASSETS/img1.png";
import img4 from "../../ASSETS/basket.png";

function HomeCategories() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img3} alt="card" />
        <div className="card-content">
          <h2>Deliver at you doorstep</h2>
          <p>Shop vegtable now</p>
        </div>
      </div>
      <div className="card">
        <img src={img1} alt="card" />
        <div className="card-content">
          <h2>Deliver at you doorstep</h2>
          <p>Shop vegtable now</p>
        </div>
      </div>
      <div className="card">
        <img src={img2} alt="card" />
        <div className="card-content">
          <h2>Deliver at you doorstep</h2>
          <p>Shop vegtable now</p>
        </div>
      </div>

      <div className="card">
        <img src={img4} alt="card" />
        <div className="card-content">
          <h2>Deliver at you doorstep</h2>
          <p>Shop vegtable now</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
