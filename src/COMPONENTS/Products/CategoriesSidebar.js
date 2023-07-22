import React from "react";
import "./CategoriesSidebar.css";
import img1 from "../../ASSETS/or.png";
import img2 from "../../ASSETS/img1.png";
import img3 from "../../ASSETS/home.png";
import img4 from "../../ASSETS/basket.png";

const CategoriesSidebar = () => {
  const productData = [
    {
      id: 1,
      categoryImg: img1,
      categoryName: "Fruits",
    },
    {
      id: 1,
      categoryImg: img2,
      categoryName: "Vegtables",
    },

    {
      id: 1,
      categoryImg: img3,
      categoryName: "Dairy Products",
    },

    {
      id: 1,
      categoryImg: img4,
      categoryName: "Fruits",
    },
    {
      id: 1,
      categoryImg: img2,
      categoryName: "Fruits",
    },

    {
      id: 1,
      categoryImg: img3,
      categoryName: "Fruits",
    },

    {
      id: 1,
      categoryImg: img2,
      categoryName: "Fruits",
    },
    {
      id: 1,
      categoryImg: img1,
      categoryName: "Fruits",
    },
  ];
  return (
    <div className="categorysidebar">
      {productData.map((product) => {
        return (
          <div className="category">
            <img
              src={product.categoryImg}
              alt="categoryImage"
              key={product.id}
            />
            <h3>{product.categoryName}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesSidebar;
