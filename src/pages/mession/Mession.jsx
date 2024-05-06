import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";
import "./mession.scss";
import { SvgGift } from "../../components/svgs/SvgGift";
import CollapseList from "../../components/collapseList/CollapseList";
import MissionList from "../../components/missionList/MissionList";
import { act } from "react";

const Mession = () => {
  const items = [
    {
      header: "Rủ rê nhau tham gia Weloveschool",
      content: [
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: true,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
      ],
    },
    {
      header: "Xem quảng cáo nhận ngay sao",
      content: [
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: true,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
        {
          header: "Khám phá vùng đất mới",
          content: "Mời 5 người bạn đăng kí tài khoản",
          coin: 20,
          active: false,
        },
      ],
    },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          className="steps"
          style={{
            paddingTop: "60px",
            padding: "0 60px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="steps__wrapper">
            <div className="steps__wrapper">
              <div className="steps__heading">
                {/* <h2 className="steps__title">Title</h2> */}
                {/* avatar */}
                <div className="steps__info">
                  <div className="steps__avatar">
                    <img
                      src={require("../../assets/images/ads-2.png")}
                      alt="avatar"
                      className="steps__avatar"
                    />
                  </div>

                  <div className="steps__infoText">
                    <h4 className="steps__name">Hòa Hồ</h4>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.78751 1.20997C9.23551 0.132972 10.7635 0.132972 11.2115 1.20997L13.2935 6.21597L18.6975 6.64997C19.8615 6.74297 20.3335 8.19497 19.4465 8.95497L15.3295 12.482L16.5865 17.755C16.8575 18.891 15.6225 19.788 14.6265 19.18L9.99951 16.354L5.37251 19.18C4.37651 19.788 3.14151 18.89 3.41251 17.755L4.66951 12.482L0.552514 8.95497C-0.334486 8.19497 0.137514 6.74297 1.30151 6.64997L6.70551 6.21597L8.78751 1.20997Z"
                        fill="#FCAA17"
                      />
                    </svg>
                    <span className="steps__coin">1000</span>
                    <p className="steps__created">ngày hết hạn 16/04/2024</p>
                    <p className="steps__address">Địa chỉ nhận quà</p>
                  </div>
                </div>
                <div className=""></div>
                <div className="steps__info__gift">
                  <div className="steps__gift">
                    <SvgGift />
                    <span
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Quà đã đổi
                    </span>
                  </div>
                </div>
              </div>
              <ul className="steps__nav">
                <h5>
                  75{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    fill="none"
                    viewBox="0 0 15 14"
                  >
                    <g clipPath="url(#clip0_299_4542)">
                      <path
                        fill="#F26F21"
                        fillRule="evenodd"
                        d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_299_4542">
                        <path fill="#fff" d="M0 0H15V14H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>{" "}
                </h5>
                <div className="steps__bullets">
                  <div className="steps__completed"></div>
                </div>
                <li className="steps__item steps__item--active">
                  <div className="steps__icon active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="21"
                      fill="none"
                      viewBox="0 0 18 21"
                    >
                      <g fill="#fff" clipPath="url(#clip0_298_4522)">
                        <path d="M18 4.88c0 2.69-4.03 4.88-9 4.88S0 7.57 0 4.88 4.03 0 9 0s9 2.18 9 4.88z"></path>
                        <path d="M9 11.25c2.68 0 5.19-.59 7.08-1.61.69-.37 1.33-.83 1.9-1.38.01.12.02.24.02.36 0 2.69-4.03 4.88-9 4.88s-9-2.18-9-4.88c0-.12.01-.24.03-.36.56.55 1.2 1.02 1.9 1.38 1.88 1.02 4.39 1.61 7.07 1.61z"></path>
                        <path d="M9 15c2.68 0 5.19-.59 7.08-1.61.69-.37 1.33-.83 1.9-1.38.02.12.02.24.02.37 0 2.69-4.03 4.88-9 4.88s-9-2.18-9-4.88c0-.12.01-.25.03-.37.56.55 1.2 1.02 1.9 1.38C3.81 14.41 6.32 15 9 15z"></path>
                        <path d="M9 18.75c2.68 0 5.19-.59 7.08-1.61.69-.37 1.33-.83 1.9-1.38.01.12.02.24.02.36 0 2.7-4.03 4.88-9 4.88s-9-2.18-9-4.88c0-.12.01-.25.03-.37.56.55 1.2 1.02 1.9 1.38 1.88 1.03 4.39 1.62 7.07 1.62z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_298_4522">
                          <path fill="#fff" d="M0 0H18V21H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="steps__popup">
                      <div className="steps__popupWrapper">
                        <figure className="steps__image">
                          <img
                            src={require("../../assets/images/mession-popup.png")}
                            alt=""
                          />
                        </figure>
                        <div className="steps__text">
                          <small>Tặng 1 chai sữa rửa mặt của CKD</small>

                          <div className="steps__btn">Nhận thưởng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    50
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      fill="none"
                      viewBox="0 0 15 14"
                    >
                      <g clipPath="url(#clip0_299_4544)">
                        <path
                          fill="#FFC850"
                          fillRule="evenodd"
                          d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_299_4544">
                          <path fill="#fff" d="M0 0H15V14H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <span>Tặng 5 coin</span>
                </li>
                <li className="steps__item">
                  <div className="steps__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="21"
                      fill="none"
                      viewBox="0 0 20 19"
                    >
                      <path
                        fill="#C6C6C6"
                        fillRule="evenodd"
                        d="M8.7.81c.45-1.08 1.98-1.08 2.42 0l2.08 5.01 5.4.43c1.16.09 1.64 1.55.75 2.3l-4.12 3.53 1.26 5.27c.27 1.14-.96 2.03-1.96 1.42L9.9 15.94l-4.63 2.83c-1 .61-2.23-.29-1.96-1.42l1.26-5.27L.46 8.55c-.89-.76-.41-2.21.75-2.3l5.4-.43L8.7.81z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="steps__popup">
                      <div className="steps__popupWrapper">
                        <figure className="steps__image">
                          <img
                            src={require("../../assets/images/mession-popup.png")}
                            alt=""
                          />
                        </figure>
                        <div className="steps__text">
                          <small>1 mặt nạ CKD</small>

                          <div className="steps__btn">Nhận thưởng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    100
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      fill="none"
                      viewBox="0 0 15 14"
                    >
                      <g clipPath="url(#clip0_299_4544)">
                        <path
                          fill="#FFC850"
                          fillRule="evenodd"
                          d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_299_4544">
                          <path fill="#fff" d="M0 0H15V14H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <span>Tặng 10 sao</span>
                </li>
                <li className="steps__item">
                  <div className="steps__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="21"
                      fill="none"
                      viewBox="0 0 29 30"
                    >
                      <g fill="#C6C6C6" clipPath="url(#clip0_298_4530)">
                        <path d="M25.86 14.47c.08 3.58-.7 6.62-2.5 9.38-1.25 1.9-2.84 3.44-4.94 4.37-2.52 1.13-4.99.93-7.36-.42-2.46-1.4-4.12-3.52-5.27-6.07-1.09-2.43-1.48-4.99-1.33-7.64.13-2.17.5-4.28 1.38-6.28.94-2.14 2.34-3.88 4.43-5 1.25-.67 2.59-1.01 3.99-1.11 2.04-.14 4 .15 5.81 1.14 2.06 1.12 3.43 2.84 4.36 4.94 1 2.23 1.37 4.58 1.43 6.69zm-15.34 2.46c.87-.01 1.67-.25 2.32-.89.81-.81.8-1.95 0-2.76-1.19-1.2-3.52-1.18-4.69.03-.77.8-.78 1.92.01 2.71.63.65 1.44.9 2.36.91zm9.36 0c.79-.01 1.56-.23 2.19-.81.91-.82.92-2.04.04-2.89-1.18-1.13-3.41-1.13-4.58 0-.89.86-.86 2.1.07 2.91.64.56 1.39.79 2.28.79zm-4.73 7.56c.28-.03.56-.04.83-.08.93-.14 1.72-.56 2.38-1.22.26-.26.3-.57.04-.75-.59-.41-1.19-.81-1.82-1.16-.37-.21-.79-.19-1.19.03-.11.06-.3.08-.41.02-.58-.33-1.13-.18-1.64.13-.44.26-.86.57-1.28.87-.4.29-.42.56-.05.91.87.84 1.92 1.24 3.14 1.25zm0-5.54c.51-.03.97-.18 1.38-.49.35-.26.43-.47.26-.68-.15-.19-.34-.17-.7.09-.64.47-1.23.46-1.88-.01-.06-.04-.11-.09-.17-.13-.18-.12-.36-.13-.5.04-.15.18-.12.36.05.52.44.41.97.62 1.56.66zM28.03 27.28c-.18.22-.29.45-.47.53-.49.24-.82.58-1.06 1.06-.24.49-.83.49-1.07 0-.24-.49-.57-.82-1.06-1.06-.49-.24-.49-.83 0-1.07.49-.24.82-.57 1.06-1.06.24-.49.82-.49 1.07 0 .24.49.57.83 1.06 1.06.18.1.28.32.47.54zM1.85 7.62c-.1-.08-.33-.18-.41-.36-.24-.5-.59-.84-1.09-1.08-.47-.23-.47-.82.01-1.05.5-.24.84-.59 1.08-1.08.24-.47.82-.47 1.05.01.24.5.59.84 1.08 1.08.47.22.46.76.03 1.04-.04.02-.07.05-.11.06-.46.17-.76.5-.95.95-.1.24-.29.4-.69.43zM6.31 1.29c-.15.16-.24.3-.37.37-.28.14-.47.34-.62.62-.2.38-.55.38-.75 0a1.31 1.31 0 00-.61-.62c-.39-.2-.39-.55-.01-.75.29-.15.48-.36.63-.64.19-.36.54-.36.73 0 .15.29.35.49.64.64.13.07.21.22.36.38z"></path>
                        <path d="M15.16 22.31c.32 0 .64-.01.96 0 .28.01.47.17.45.4-.02.26-.19.38-.44.38-.65.01-1.3.01-1.94 0-.25 0-.41-.13-.43-.39-.01-.23.17-.39.45-.4.31 0 .63.01.95.01z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_298_4530">
                          <path fill="#fff" d="M0 0H28.03V29.25H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="steps__popup">
                      <div className="steps__popupWrapper">
                        <figure className="steps__image">
                          <img
                            src={require("../../assets/images/mession-popup.png")}
                            alt=""
                          />
                        </figure>
                        <div className="steps__text">
                          <small>1 mặt nạ CKD</small>

                          <div className="steps__btn">Nhận thưởng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    150
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      fill="none"
                      viewBox="0 0 15 14"
                    >
                      <g clipPath="url(#clip0_299_4544)">
                        <path
                          fill="#FFC850"
                          fillRule="evenodd"
                          d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_299_4544">
                          <path fill="#fff" d="M0 0H15V14H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <span>Tặng 1 mặt nạ CKD</span>
                </li>
                <li className="steps__item">
                  <div className="steps__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="21"
                      fill="none"
                      viewBox="0 0 29 30"
                    >
                      <g fill="#C6C6C6" clipPath="url(#clip0_298_4530)">
                        <path d="M25.86 14.47c.08 3.58-.7 6.62-2.5 9.38-1.25 1.9-2.84 3.44-4.94 4.37-2.52 1.13-4.99.93-7.36-.42-2.46-1.4-4.12-3.52-5.27-6.07-1.09-2.43-1.48-4.99-1.33-7.64.13-2.17.5-4.28 1.38-6.28.94-2.14 2.34-3.88 4.43-5 1.25-.67 2.59-1.01 3.99-1.11 2.04-.14 4 .15 5.81 1.14 2.06 1.12 3.43 2.84 4.36 4.94 1 2.23 1.37 4.58 1.43 6.69zm-15.34 2.46c.87-.01 1.67-.25 2.32-.89.81-.81.8-1.95 0-2.76-1.19-1.2-3.52-1.18-4.69.03-.77.8-.78 1.92.01 2.71.63.65 1.44.9 2.36.91zm9.36 0c.79-.01 1.56-.23 2.19-.81.91-.82.92-2.04.04-2.89-1.18-1.13-3.41-1.13-4.58 0-.89.86-.86 2.1.07 2.91.64.56 1.39.79 2.28.79zm-4.73 7.56c.28-.03.56-.04.83-.08.93-.14 1.72-.56 2.38-1.22.26-.26.3-.57.04-.75-.59-.41-1.19-.81-1.82-1.16-.37-.21-.79-.19-1.19.03-.11.06-.3.08-.41.02-.58-.33-1.13-.18-1.64.13-.44.26-.86.57-1.28.87-.4.29-.42.56-.05.91.87.84 1.92 1.24 3.14 1.25zm0-5.54c.51-.03.97-.18 1.38-.49.35-.26.43-.47.26-.68-.15-.19-.34-.17-.7.09-.64.47-1.23.46-1.88-.01-.06-.04-.11-.09-.17-.13-.18-.12-.36-.13-.5.04-.15.18-.12.36.05.52.44.41.97.62 1.56.66zM28.03 27.28c-.18.22-.29.45-.47.53-.49.24-.82.58-1.06 1.06-.24.49-.83.49-1.07 0-.24-.49-.57-.82-1.06-1.06-.49-.24-.49-.83 0-1.07.49-.24.82-.57 1.06-1.06.24-.49.82-.49 1.07 0 .24.49.57.83 1.06 1.06.18.1.28.32.47.54zM1.85 7.62c-.1-.08-.33-.18-.41-.36-.24-.5-.59-.84-1.09-1.08-.47-.23-.47-.82.01-1.05.5-.24.84-.59 1.08-1.08.24-.47.82-.47 1.05.01.24.5.59.84 1.08 1.08.47.22.46.76.03 1.04-.04.02-.07.05-.11.06-.46.17-.76.5-.95.95-.1.24-.29.4-.69.43zM6.31 1.29c-.15.16-.24.3-.37.37-.28.14-.47.34-.62.62-.2.38-.55.38-.75 0a1.31 1.31 0 00-.61-.62c-.39-.2-.39-.55-.01-.75.29-.15.48-.36.63-.64.19-.36.54-.36.73 0 .15.29.35.49.64.64.13.07.21.22.36.38z"></path>
                        <path d="M15.16 22.31c.32 0 .64-.01.96 0 .28.01.47.17.45.4-.02.26-.19.38-.44.38-.65.01-1.3.01-1.94 0-.25 0-.41-.13-.43-.39-.01-.23.17-.39.45-.4.31 0 .63.01.95.01z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_298_4530">
                          <path fill="#fff" d="M0 0H28.03V29.25H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="steps__popup">
                      <div className="steps__popupWrapper">
                        <figure className="steps__image">
                          <img
                            src={require("../../assets/images/mession-popup.png")}
                            alt=""
                          />
                        </figure>
                        <div className="steps__text">
                          <small>Tặng 1 chai sữa rửa mặt của CKD</small>

                          <div className="steps__btn">Nhận thưởng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    200
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      fill="none"
                      viewBox="0 0 15 14"
                    >
                      <g clipPath="url(#clip0_299_4544)">
                        <path
                          fill="#FFC850"
                          fillRule="evenodd"
                          d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_299_4544">
                          <path fill="#fff" d="M0 0H15V14H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <span>Tặng 1 chai sữa rửa mặt của CKD</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mession">
            <div className="mession__wrapper">
              <div className="mession__header">
                <h4>Nhiệm vụ</h4>
                <p>
                  Thể lệ nhiệm vụ: <span>để chọn test mẫu</span>
                </p>
                <div>
                  <p>
                    Set up: <span>nhiệm vụ sau 1 tháng sẽ set up mới</span>
                  </p>
                  <p>3/10</p>
                </div>
              </div>
              <div className="mession__cards">
                <MissionList items={items} />
              </div>
            </div>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default Mession;
