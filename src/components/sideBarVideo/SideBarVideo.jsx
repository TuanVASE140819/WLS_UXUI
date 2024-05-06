import React from "react";
import "./sideBarVideo.scss";
import { Link } from "react-router-dom";

const SideBarVideo = () => {
  return (
    <div className="sideBarVideo">
      <div className="sideBarVideo__wrapper">
        <div className="sideBarVideo__header">Video phổ biến</div>
        <div className="sideBarVideo__lists">
          <div className="sideBarVideo__item">
            <Link to="/">
              <figure className="sideBarVideo__image">
                <img src={require("../../assets/images/video-1.png")} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="17"
                  fill="none"
                  viewBox="0 0 15 17"
                >
                  <path
                    fill="#fff"
                    d="M13.645 6.829L3.285.849C1.854.021.062 1.054.062 2.709v11.96c0 1.655 1.792 2.688 3.223 1.86l10.36-5.98c1.43-.827 1.43-2.893 0-3.72z"
                  ></path>
                </svg>
              </figure>
            </Link>
            <Link to="">
              <h4>
                Dàn sao 5S Online sau 10 năm: Chi Pu thành ca sĩ, 1 nữ diễn viên
                rút lui về hậu trường
              </h4>
            </Link>
          </div>
          <div className="sideBarVideo__item">
            <Link to="/">
              <figure className="sideBarVideo__image">
                <img src={require("../../assets/images/video-2.png")} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="17"
                  fill="none"
                  viewBox="0 0 15 17"
                >
                  <path
                    fill="#fff"
                    d="M13.645 6.829L3.285.849C1.854.021.062 1.054.062 2.709v11.96c0 1.655 1.792 2.688 3.223 1.86l10.36-5.98c1.43-.827 1.43-2.893 0-3.72z"
                  ></path>
                </svg>
              </figure>
            </Link>
            <Link to="">
              <h4>
                Dàn sao Bước nhảy xì tin 10 năm sau giờ ra sao? - 2sao
              </h4>
            </Link>
          </div>
          <div className="sideBarVideo__item">
            <Link to="/">
              <figure className="sideBarVideo__image">
                <img src={require("../../assets/images/video-3.png")} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="17"
                  fill="none"
                  viewBox="0 0 15 17"
                >
                  <path
                    fill="#fff"
                    d="M13.645 6.829L3.285.849C1.854.021.062 1.054.062 2.709v11.96c0 1.655 1.792 2.688 3.223 1.86l10.36-5.98c1.43-.827 1.43-2.893 0-3.72z"
                  ></path>
                </svg>
              </figure>
            </Link>
            <Link to="">
              <h4>
                Bỗng dưng muốn khóc”: Sau nhiều năm vẫn là “ngọn núi” khó vượt?!
              </h4>
            </Link>
          </div>
          <div className="sideBarVideo__item">
            <Link to="/">
              <figure className="sideBarVideo__image">
                <img src={require("../../assets/images/video-4.png")} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="17"
                  fill="none"
                  viewBox="0 0 15 17"
                >
                  <path
                    fill="#fff"
                    d="M13.645 6.829L3.285.849C1.854.021.062 1.054.062 2.709v11.96c0 1.655 1.792 2.688 3.223 1.86l10.36-5.98c1.43-.827 1.43-2.893 0-3.72z"
                  ></path>
                </svg>
              </figure>
            </Link>
            <Link to="">
              <h4>
                Top 25 phim truyền hình Việt Nam gắn liền với tuổi thơ
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarVideo;
