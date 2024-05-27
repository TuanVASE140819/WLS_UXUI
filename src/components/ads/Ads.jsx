import React from "react";
import "./ads.scss";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="ads">
      <div className="ads__wrapper">
        <div className="ads__cards">
          <Link to="/" className="ads__card">
            <figure className="ads__image">
              <img src={require("../../assets/images/ads-1.png")} alt="" />
            </figure>
            <div className="ads__text">
              <p className="ads__subtitle">fpt.edu</p>
              <h4 className="ads__title">Tuyển sinh khóa K25 - 2024</h4>
            </div>
          </Link>
          <Link to="/" className="ads__card">
            <figure className="ads__image">
              <img src={require("../../assets/images/ads-2.png")} alt="" />
            </figure>
            <div className="ads__text">
              <p className="ads__subtitle">fpt.edu</p>
              <h4 className="ads__title">Tuyển sinh khóa K25 - 2024</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ads;
