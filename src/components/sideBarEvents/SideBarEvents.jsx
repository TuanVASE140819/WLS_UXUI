import React from "react";
import "./sideBarEvents.scss";
import { Link } from "react-router-dom";

const SideBarEvents = () => {
  return (
    <div className="sideBarEvents">
      <div className="sideBarEvents__wrapper">
        <h4 className="sideBarEvents__header">Sự kiện gần đây</h4>
        <div className="sideBarEvents__cards">
          <Link to="/" className="sideBarEvents__card">
            <figure className="sideBarEvents__image">
              <img src={require("../../assets/images/events-1.png")} alt="" />
            </figure>
            <h4 className="sideBarEvents__title">
              Cảm xúc vào tận cùng: Sự kiện âm nhạc đang phát sóng
            </h4>
          </Link>
          <Link to="/" className="sideBarEvents__card">
            <figure className="sideBarEvents__image">
              <img src={require("../../assets/images/events-2.png")} alt="" />
            </figure>
            <h4 className="sideBarEvents__title">
              "Dẫn Đầu Bằng Sự Kiện Âm Nhạc: Kỳ Vọng và Bất Ngờ!"
            </h4>
          </Link>
          <Link to="/" className="sideBarEvents__card">
            <figure className="sideBarEvents__image">
              <img src={require("../../assets/images/events-3.png")} alt="" />
            </figure>
            <h4 className="sideBarEvents__title">
              "Thảo luận về Sự Kiện Âm Nhạc Lớn Đang Được Chờ Đợi"
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarEvents;
