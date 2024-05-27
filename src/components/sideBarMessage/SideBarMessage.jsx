import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./sideBarMessage.scss";
const SideBarMessage = () => {
  return (
    <div className="sideBarMessage">
      <div className="sideBarMessage__wrapper">
        <h4 className="sideBarMessage__header">Cuộc trò chuyện nhóm</h4>
        <div className="sideBarMessage__lists">
          <div className="sideBarMessage__listItem">
            <figure className="sideBarMessage__image">
              <img
                src={require("../../assets/images/sideBarMessage-1.png")}
                alt=""
              />
            </figure>
            <div className="sideBarMessage__text">
              <Link to="/">
                <h4>Hội họa</h4>
              </Link>

              <p>Niên khóa K23</p>
            </div>
          </div>
          <div className="sideBarMessage__listItem">
            <figure className="sideBarMessage__image">
              <img
                src={require("../../assets/images/sideBarMessage-2.png")}
                alt=""
              />
            </figure>
            <div className="sideBarMessage__text">
              <Link to="/">
                <h4>Thanh lí bàn ghế nhà trường</h4>
              </Link>
              <p>Niên khóa K23</p>
            </div>
          </div>
          <div className="sideBarMessage__listItem">
            <figure className="sideBarMessage__image">
              <img
                src={require("../../assets/images/sideBarMessage-3.png")}
                alt=""
              />
            </figure>
            <div className="sideBarMessage__text">
              <Link to="/">
                <h4>Tiếng Trung easy</h4>
              </Link>
              <p>Niên khóa K23</p>
            </div>
          </div>
          <div className="sideBarMessage__listItem">
            <figure className="sideBarMessage__image">
              <img
                src={require("../../assets/images/sideBarMessage-4.png")}
                alt=""
              />
            </figure>
            <div className="sideBarMessage__text">
              <Link to="/">
                <h4>Yêu Trường Mến Bạn</h4>
              </Link>
              <p>Niên khóa K23</p>
            </div>
          </div>
          {/* <div className="sideBarMessage__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 22 22"
            >
              <g clipPath="url(#clip0_98_650)">
                <path
                  fill="#3D92D1"
                  d="M10.58 21.16c5.843 0 10.58-4.737 10.58-10.58S16.423 0 10.58 0 0 4.737 0 10.58s4.737 10.58 10.58 10.58z"
                ></path>
                <path
                  fill="#fff"
                  d="M10.58 15.32c-.55 0-1-.45-1-1V6.83c0-.55.45-1 1-1s1 .45 1 1v7.49c-.01.55-.45 1-1 1z"
                ></path>
                <path
                  fill="#fff"
                  d="M5.84 10.58c0-.55.45-1 1-1h7.49c.55 0 1 .45 1 1s-.45 1-1 1h-7.5a1 1 0 01-.99-1z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_98_650">
                  <path fill="#fff" d="M0 0H21.15V21.15H0z"></path>
                </clipPath>
              </defs>
            </svg>
            Tạo nhóm chat
          </div> */}
          {/* <Link to="/">
            <h4 className="sideBarMessage__settings">Cài đặt quyền riêng tư</h4>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SideBarMessage;
