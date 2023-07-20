import React from "react";
import "./BannerSlider.css";
import Slider from "react-slick";
import slideImg1 from "../../ASSETS/bg1.jpg";
import slideImg2 from "../../ASSETS/bg2.jpg";

function BannerSlider() {
  const data = [
    {
      id: 1,
      img: slideImg1,
      title: "We Provide fresh Fruits and vegtables at you doorsteps",
      discription:
        "We deliver Fresh Fruits and Vegtables with in 20 minutes at you doorstep",
      button: "https://google.com",
    },

    {
      id: 2,
      img: slideImg2,
      title: "We Provide fresh Fruits and vegtables at you doorsteps",
      discription:
        "We deliver Fresh Fruits and Vegtables with in 20 minutes at you doorstep",
      button: "https://google.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bannerSlider">
      <Slider className="bannerSlider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imgContainer" key={item.id}>
              <img src={item.img} alt="slider Item" />
              <div className="content">
                <h1>{item.title}</h1>
                <p>{item.discription}</p>
                <button>Show now</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BannerSlider;
