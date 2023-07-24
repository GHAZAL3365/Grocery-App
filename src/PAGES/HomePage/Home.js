import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import HomeCategories from "../../COMPONENTS/Categories/HomeCategories";
import ProductSidebar from "../../COMPONENTS/Products/ProductSidebar";
import Footer2 from "../../COMPONENTS/Footer/Footer2";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default Home;
