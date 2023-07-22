import React from "react";
import "./AllProducts.css";
import ProductCard from "./ProductCard";

import img1 from "../../ASSETS/or.png";
import img2 from "../../ASSETS/img1.png";
import img3 from "../../ASSETS/home.png";
import img4 from "../../ASSETS/basket.png";

const AllProducts = () => {
  const productsArray = [
    {
      id: 1,
      productImage: img1,
      ProductName: "Product 1",
      ProductPrice: 23.0,
      Count: 10,
      DiscountPercentage: 20,
    },
    {
      id: 2,
      productImage: img2,
      ProductName: "Product 2",
      Count: 5,
      ProductPrice: 50.0,
      DiscountPercentage: 15,
    },
    {
      id: 3,
      productImage: img3,
      ProductName: "Product 3",
      Count: 8,
      ProductPrice: 50.0,
      DiscountPercentage: 10,
    },
    {
      id: 4,
      productImage: img3,
      ProductPrice: 50.0,
      ProductName: "Product 4",
      Count: 15,
      DiscountPercentage: 25,
    },
    {
      id: 5,
      productImage: img4,
      ProductName: "Product 5",
      ProductPrice: 35.5,
      Count: 3,
      DiscountPercentage: 5,
    },
    {
      id: 6,
      productImage: img1,
      ProductName: "Product 6",
      ProductPrice: 25.0,
      Count: 20,
      DiscountPercentage: 30,
    },
    {
      id: 7,
      productImage: img2,
      ProductName: "Product 7",
      ProductPrice: 100.0,
      Count: 12,
      DiscountPercentage: 18,
    },
    {
      id: 8,
      productImage: img1,
      ProductName: "Product 8",
      Count: 7,
      ProductPrice: 17.0,
      DiscountPercentage: 12,
    },
    {
      id: 9,
      productImage: img3,
      ProductName: "Product 9",
      Count: 25,
      ProductPrice: 24.0,
      DiscountPercentage: 40,
    },
    {
      id: 10,
      productImage: img2,
      ProductName: "Product 10",
      Count: 2,
      DiscountPercentage: 8,
    },
    {
      id: 11,
      productImage: img1,
      ProductName: "Product 11",
      Count: 18,
      ProductPrice: 50.0,
      DiscountPercentage: 22,
    },
    {
      id: 12,
      productImage: img2,
      ProductName: "Product 12",
      ProductPrice: 50.0,
      Count: 9,
      DiscountPercentage: 16,
    },
  ];

  return (
    <div className="allproducts">
      <h2>All Products</h2>
      <div className="products">
        {productsArray.map((product) => {
          return <ProductCard props={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
