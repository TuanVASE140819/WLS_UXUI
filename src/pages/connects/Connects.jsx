import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./connects.scss";
import { Helmet } from "react-helmet";
import ConnectFriends from "../../components/Connects/ConnectFriends";
import { SvgIconHeart } from "../../components/svgs/Post/SvgIconHeart";
import { SvgComment } from "../../components/svgs/Post/SvgComment";
import { SvgShare } from "../../components/svgs/Post/SvgShare";

const Connects = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
       

        <SideBarEvents />
    
        <div className="connects">
            
      <div className="connects__wrapper">
        <div className="connects__write">
          <img src={require("../../assets/images/user.png")} alt="" />
          <textarea type="text" placeholder="Bạn viết gì đi..." />
          <div className="connects__btn">Post</div>
        </div>
        <div className="searchBar2__inputSearch">
     
      <div className="searchBar2__inputWrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="20"
          fill="none"
          viewBox="0 0 14 20"
        >
          <path
            fill="#6B7280"
            d="M7.376 0c.187.029.383.048.57.077 2.586.425 4.434 1.892 5.489 4.354.681 1.573.719 3.214.261 4.864-.392 1.439-1.017 2.77-1.727 4.054-1.25 2.26-2.763 4.334-4.406 6.303-.383.464-.765.464-1.148 0-1.858-2.239-3.557-4.604-4.892-7.23C.916 11.227.375 9.99.142 8.65-.334 6.023.394 3.764 2.27 1.92 3.372.83 4.716.24 6.228.039c.13-.01.261-.02.392-.039h.756zm-.401 10.888c1.904.039 3.51-1.593 3.538-3.6C10.55 5.28 8.99 3.629 7.022 3.59c-1.914-.039-3.51 1.583-3.548 3.59-.037 2.018 1.522 3.678 3.5 3.707z"
          ></path>
        </svg>
        <input type="text" placeholder="Tỉnh bạn muốn tìm kiếm..." />
      </div>
      <select>
        <option style={{ display: "none" }}>Chọn cấp</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div className="searchBar2__searchBtnContainer">
        <div className="searchBar2__searchBtn">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="none"
              viewBox="0 0 17 17"
            >
              <path
                fill="#fff"
                d="M17 15.771c-.067.33-.191.63-.45.854-.602.534-1.377.495-1.96-.097a1323.59 1323.59 0 01-3.645-3.705c-.048-.049-.076-.107-.095-.136-.46.243-.852.495-1.273.67-1.865.785-3.72.775-5.567-.078-1.377-.63-2.42-1.64-3.147-2.968a6.732 6.732 0 01-.841-3.87c.124-1.698.794-3.162 1.97-4.375C3.112.912 4.48.233 6.067.05a6.645 6.645 0 014.037.776 6.923 6.923 0 012.553 2.395 6.761 6.761 0 011.072 3.473 6.85 6.85 0 01-.947 3.792c-.077.136-.077.204.038.32 1.186 1.193 2.353 2.386 3.54 3.58.296.3.564.62.64 1.057v.33zm-5.49-8.807c.01-2.59-2.095-4.713-4.65-4.704-2.553 0-4.62 2.095-4.638 4.695-.01 2.59 2.066 4.704 4.639 4.714 2.554.01 4.648-2.105 4.648-4.705z"
              ></path>
            </svg>
          </span>
          <p>Tìm kiếm</p>
        </div>
      </div>
    </div>
        <div className="connects__posts">
          <div className="connects__top">
            <div>
              <img src={require("../../assets/images/user.png")} alt="" />
              <div className="connects__text">
                <h4>Hồ Lê Bảo Hân</h4>
                <p>2PM | 12/02/2022</p>
              </div>
            </div>
            <div className="connects__iconDot">
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
          <div className="connects__content">
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
          <div className="connects__bottom">
            <div>
              <div className="connects__icon">
                <SvgIconHeart color="#D13D3D" />
                177
              </div>
              <div className="connects__icon">
                {/* #3D92D1 */}
                <SvgComment color="#3D92D1" />
                64
              </div>
              <div className="connects__icon">
                <SvgShare color="#4ABC96" />
                12
              </div>
            </div>
            <div className="connects__aside">
              3 bình luận
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#3D92D1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0111.186 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="connects__posts">
          <div className="connects__top">
            <div>
              <img src={require("../../assets/images/user.png")} alt="" />
              <div className="connects__text">
                <h4>Hồ Lê Bảo Hân</h4>
                <p>2PM | 12/02/2022</p>
              </div>
            </div>
            <div className="connects__iconDot">
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
          <div className="connects__content">
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
          <div className="connects__bottom">
            <div>
              <div className="connects__icon">
                <SvgIconHeart color="#D13D3D" />
                177
              </div>
              <div className="connects__icon">
                {/* #3D92D1 */}
                <SvgComment color="#3D92D1" />
                64
              </div>
              <div className="connects__icon">
                <SvgShare color="#4ABC96" />
                12
              </div>
            </div>
            <div className="connects__aside">
              3 bình luận
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#3D92D1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0111.186 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Ads />
      </div>
    </>
  );
};

export default Connects;
