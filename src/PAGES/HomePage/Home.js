import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import Footer from "../../COMPONENTS/Footer/Footer";
import HomeCategories from "../../COMPONENTS/Categories/HomeCategories";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Footer />
      Home
    </div>
  );
}

export default Home;
