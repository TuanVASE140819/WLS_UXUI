import React from "react";
import { Link } from "react-router-dom";
import "./slider.scss";

// import Swiper core and required modules


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Sider = () => {
  return (
    <Swiper
      className="highlightSlider"
      // install Swiper modules
    
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <Link to="/" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-1.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">Trường Tiểu Học</h4>
            <p className="highlightSlider__desc">
              Nơi ươm mầm tri thức đầu đời, chắp cánh ước mơ
            </p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-2.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">Trường Trung Học Cơ Sở</h4>
            <p className="highlightSlider__desc">
              Bước đệm vững chắc, khơi nguồn sáng tạo
            </p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-3.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">
              Trường Trung Học Phổ Thông
            </h4>
            <p className="highlightSlider__desc">
              Ngã rẽ tương lai, chinh phục ước mơ
            </p>
          </div>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link to="/" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-2.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">
              Trường Trung Học Phổ Thông 4
            </h4>
            <p className="highlightSlider__desc">
              Ngã rẽ tương lai, chinh phục ước mơ4
            </p>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sider;
