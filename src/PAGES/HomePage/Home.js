import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import Footer from "../../COMPONENTS/Footer/Footer";
import HomeCategories from "../../COMPONENTS/Categories/HomeCategories";
import ProductSidebar from "../../COMPONENTS/Products/ProductSidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      <Footer />
      Home
    </div>
  );
}

export default Home;
