import React from "react";
import AllProducts from "./AllProducts";
import CategoriesSidebar from "./CategoriesSidebar";
import "./ProductSidebar.css";

const ProductSidebar = () => {
  return (
    <div className="product_sidebar">
      <CategoriesSidebar />
      <AllProducts />
    </div>
  );
};

export default ProductSidebar;
