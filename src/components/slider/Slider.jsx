import React from "react";
import { Link } from "react-router-dom";
import "./slider.scss";

// import Swiper core and required modules


import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Sider = () => {
  const { t, i18n } = useTranslation("common");
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
        <Link to="/search" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-1.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">{t("primary_school")}</h4>
            <p className="highlightSlider__desc">
              {t("primary_school_content")}
            </p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/search" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-2.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">{t("secondary_school")}</h4>
            <p className="highlightSlider__desc">
              {t("secondary_school_content")}
            </p>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/search" className="highlightSlider__card">
          <figure className="highlightSlider__image">
            <img src={require("../../assets/images/slider-3.png")} alt="" />
          </figure>
          <div className="highlightSlider__text">
            <h4 className="highlightSlider__title">{t("high_school")}</h4>
            <p className="highlightSlider__desc">{t("high_school_content")}</p>
          </div>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link to="/search" className="highlightSlider__card">
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
