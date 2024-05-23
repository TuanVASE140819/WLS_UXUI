import React from "react";
import Ads from "../ads/Ads";
import SideBar from "../sideBar/SideBar";
import "./Connects.scss"
import { Link } from "react-router-dom";


const ConnectFriends = () => {
  return (
    <>
    <div className="comments">
      <div className="comments__wrapper">
        <div className="comments__write">
          <img src={require("../../assets/images/user.png")} alt="" />
          <textarea type="text" placeholder="Bạn viết gì đi..." />
          <div className="comments__btn">Post</div>
        </div>
        <div className="comments__posts">
          <div className="comments__top">
            <div>
              <img src={require("../../assets/images/user.png")} alt="" />
              <div className="comments__text">
                <h4>Hồ Lê Bảo Hân</h4>
                <p>2PM | 12/02/2022</p>
              </div>
            </div>
            <div className="comments__iconDot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="7"
                fill="none"
                viewBox="0 0 34 7"
              >
                <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                  <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_277_1070">
                    <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="comments__content">
            <h4>"Điểm Dừng Kỷ Niệm: Gặp Lại Bạn Học Cũ Trên Đường Đời"</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam laoreet dolore magna aliquam and bneem ándnd erat
              volutpat...
            </p>
            <span>... xem thêm</span>
          </div>
          
        </div>
    
      </div>
    </div>
    </>
  );
};

export default ConnectFriends;
