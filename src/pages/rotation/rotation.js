import React, { useState } from "react";
import "./rotation.scss";
import Ads from "../../components/ads/Ads";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const WheelOfFortune = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const [currentRotate, setCurrentRotate] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [msg, setMsg] = useState("");

  const timeRotate = 7000; // 7 seconds
  const listGift = [
    {
      text: "Quà 1",
      percent: 16 / 100,
    },
    { text: "Quà 2", percent: 16 / 100 },
    { text: "Quà 3", percent: 16 / 100 },
    { text: "Quà 4", percent: 16 / 100 },
    { text: "Quà 5", percent: 16 / 100 },
    { text: "Quà 6", percent: 16 / 100 },
    // { text: "Khóa học js free", percent: 10 / 100 },
    // { text: "Áo khoác Gucci", percent: 20 / 100 },
  ];

  const size = listGift.length;
  const rotate = 360 / size;
  const skewY = 90 - rotate;

  const closePopup = () => {
    setMsg("");
  };
  const start = () => {
    setMsg("");
    setIsRotating(true);
    const random = Math.random();
    const gift = getGift(random);
    setCurrentRotate((prevRotate) => prevRotate + 360 * 10);
    rotateWheel(currentRotate, gift.index);
    showGift(gift);
  };

  const rotateWheel = (currentRotate, index) => {
    document.querySelector(".wheel__lucky").style.transform = `rotate(${
      currentRotate - index * rotate - rotate / 2
    }deg)`;
  };

  const getGift = (randomNumber) => {
    let currentPercent = 0;
    let list = [];
    listGift.forEach((item, index) => {
      currentPercent += item.percent;
      if (randomNumber <= currentPercent) {
        list.push({ ...item, index });
      }
    });
    return list[0] || { index: 0 }; // return a default object if list is empty
  };

  const showGift = (gift) => {
    setTimeout(() => {
      setIsRotating(false);
      setMsg(`Chúc mừng bạn đã nhận được "${gift.text}"`);
    }, timeRotate);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="SidbarGame">
          <div className="SidbarGame__wrapper">
            <div>
              <div
                className="SidbarGame__item"
                onClick={toggleDropdown}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1609_6879)">
                    <path
                      d="M0.597306 9.59961C0.806842 9.68275 0.997213 9.75706 1.18695 9.83453C3.28805 10.6942 5.38789 11.5565 7.49091 12.4099C7.66148 12.4792 7.70748 12.551 7.68767 12.7361C7.65765 13.0145 7.67426 13.2998 7.69214 13.5807C7.69981 13.706 7.69087 13.7797 7.55799 13.8339C5.27929 14.7623 3.0025 15.695 0.724433 16.6259C0.688659 16.6404 0.64969 16.6461 0.592834 16.6605C-0.198036 14.3075 -0.198675 11.9671 0.597306 9.59961Z"
                      fill="#626262"
                    />
                    <path
                      d="M7.41797 23.4091C7.67478 22.7982 7.92073 22.2118 8.16668 21.6248C8.86939 19.9489 9.57593 18.2742 10.2703 16.5945C10.3432 16.4175 10.4256 16.3923 10.6051 16.4087C10.8881 16.4339 11.1756 16.4162 11.4605 16.4024C11.5736 16.3967 11.6483 16.3948 11.7013 16.5214C12.6461 18.7869 13.5961 21.0504 14.5447 23.3147C14.5537 23.3361 14.5562 23.3594 14.569 23.4135C12.1951 24.1964 9.82891 24.1939 7.41797 23.4091Z"
                      fill="#626262"
                    />
                    <path
                      d="M15.8184 3.38281C17.894 4.33069 19.8482 6.21953 20.8741 8.36596C20.8 8.4006 20.7259 8.43839 20.6499 8.46926C18.4236 9.38061 16.1966 10.2894 13.9729 11.2058C13.8157 11.2707 13.7442 11.238 13.6413 11.1139C13.4707 10.9079 13.2836 10.7083 13.0715 10.5464C12.9137 10.4261 12.8926 10.3379 12.9673 10.1616C13.7933 8.21229 14.6104 6.25921 15.4294 4.30739C15.5572 4.00445 15.6843 3.7015 15.8184 3.38281Z"
                      fill="#626262"
                    />
                    <path
                      d="M21.3885 9.61523C22.1851 11.6603 22.2221 14.4737 21.3891 16.6636C21.0371 16.5219 20.6851 16.382 20.3344 16.2384C18.3955 15.4442 16.458 14.6463 14.5153 13.8602C14.3262 13.784 14.3 13.6984 14.3185 13.5132C14.346 13.2418 14.3281 12.9646 14.3109 12.6913C14.3032 12.5685 14.3077 12.4929 14.4425 12.4381C16.7218 11.511 18.9986 10.5782 21.276 9.64735C21.3131 9.63287 21.352 9.62594 21.3885 9.61523Z"
                      fill="#626262"
                    />
                    <path
                      d="M20.892 17.8968C19.7485 20.1276 18.0767 21.7765 15.8267 22.902C15.7711 22.7704 15.7264 22.6639 15.6817 22.5575C14.7835 20.4167 13.8879 18.2747 12.982 16.1371C12.9015 15.9475 12.9053 15.8442 13.0836 15.712C13.2912 15.5576 13.4733 15.3624 13.6362 15.1615C13.7441 15.0286 13.8227 14.9984 13.9875 15.0664C15.8657 15.8423 17.7477 16.6101 19.6284 17.3797C20.0379 17.5479 20.4486 17.7154 20.892 17.8968Z"
                      fill="#626262"
                    />
                    <path
                      d="M1.11328 8.36867C2.25679 6.13973 3.92732 4.48959 6.17792 3.36914C6.32549 3.71806 6.46348 4.04116 6.59955 4.36552C7.40958 6.29592 8.2177 8.22696 9.03221 10.1555C9.10248 10.3224 9.10951 10.42 8.93894 10.5434C8.7294 10.694 8.54031 10.8854 8.38316 11.0901C8.26242 11.2463 8.17171 11.2659 7.99347 11.1922C6.13767 10.4244 4.27804 9.66547 2.41905 8.90465C1.99423 8.73019 1.56941 8.55636 1.11328 8.36867Z"
                      fill="#626262"
                    />
                    <path
                      d="M1.11133 17.8984C2.25675 17.4304 3.36639 16.9776 4.47476 16.5235C5.65788 16.0398 6.84163 15.5573 8.02154 15.0673C8.16847 15.0062 8.24577 15.0163 8.35629 15.1473C8.54858 15.3753 8.78558 15.5655 8.99129 15.7834C9.04175 15.8363 9.08711 15.9503 9.06347 16.0077C8.1129 18.2882 7.15465 20.5657 6.19641 22.8437C6.19385 22.8507 6.18555 22.8551 6.15425 22.8878C3.92857 21.7825 2.25611 20.1292 1.11133 17.8984Z"
                      fill="#626262"
                    />
                    <path
                      d="M7.43359 2.85329C7.74854 2.76134 8.05709 2.6719 8.38609 2.57617C8.58987 3.05547 8.786 3.51713 8.98212 3.97879C9.04664 4.13057 9.10413 4.28677 9.17824 4.43415C9.55195 5.1786 10.1588 5.58546 11.0021 5.58546C11.8453 5.58546 12.465 5.18427 12.8221 4.43226C13.0821 3.88494 13.3038 3.31999 13.5344 2.75945C13.5881 2.62845 13.643 2.57176 13.7963 2.62467C14.0429 2.70969 14.2972 2.77268 14.5731 2.85203C14.5393 2.94777 14.5163 3.02712 14.4844 3.10333C13.5651 5.29511 12.6426 7.48627 11.7284 9.68057C11.6614 9.84117 11.5892 9.87896 11.4148 9.86447C11.1235 9.83991 10.8277 9.85377 10.5351 9.86951C10.4163 9.87581 10.3486 9.86384 10.2981 9.74355C9.35519 7.48438 8.40781 5.22709 7.46234 2.96918C7.45148 2.94021 7.44765 2.90872 7.43359 2.85329Z"
                      fill="#626262"
                    />
                    <path
                      d="M8.9922 13.1243C8.99603 12.0334 9.90573 11.1435 11.0103 11.1504C12.1174 11.1574 13.0104 12.0479 13.0092 13.1444C13.0079 14.2328 12.0969 15.1233 10.9905 15.1177C9.88337 15.1126 8.98837 14.2202 8.9922 13.1243ZM11.6689 13.1262C11.6663 12.7666 11.3584 12.4705 10.993 12.4743C10.6282 12.4781 10.328 12.7817 10.3325 13.1426C10.3369 13.5034 10.6449 13.8007 11.0083 13.7951C11.3744 13.7888 11.6721 13.4877 11.6689 13.1262Z"
                      fill="#626262"
                    />
                    <path
                      d="M11.0039 0.00123012C11.3942 0.00123012 11.7845 -0.000659345 12.1749 0.00185994C12.7447 0.00563888 13.0565 0.445884 12.8431 0.960449C12.4483 1.91274 12.042 2.85999 11.6421 3.80976C11.5245 4.09003 11.3271 4.26135 11.0103 4.2645C10.6832 4.26827 10.4794 4.09381 10.3574 3.80473C9.95813 2.85432 9.55184 1.90707 9.15704 0.955411C8.94879 0.454072 9.25862 0.00752834 9.80865 0.00185994C10.2073 -0.00191899 10.6053 0.00123012 11.0039 0.00123012Z"
                      fill="#626262"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1609_6879">
                      <rect width="22" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Vòng quay may mắn
              </div>
              {isOpen && (
                <div className="dropdown-menu">
                  {/* Dropdown menu items as Links or buttons */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "0 auto",
                      marginLeft: "40px",
                      // alignItems: "center",
                    }}
                  >
                    <Link
                      to="https://bluepink.gitbook.io/weloveschool/chinh-sach-minigame"
                      className="dropdown-item"
                      style={{ textDecoration: "none" }}
                    >
                      Giới thiệu
                    </Link>
                    <Link
                      to="/quiz/sublink2"
                      className="dropdown-item"
                      style={{ textDecoration: "none" }}
                    >
                      Chia sẽ
                    </Link>
                  </div>
                  {/* Add more dropdown items here */}
                </div>
              )}
            </div>
            <div>
              <div
                className="SidbarGame__item"
                onClick={toggleDropdown2}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1609_6912)">
                    <path
                      d="M4.78013 23.9992C4.37432 23.8123 4.25596 23.4905 4.25783 23.0548C4.27036 20.2273 4.26598 17.3998 4.26034 14.5723C4.25971 14.388 4.31107 14.2842 4.47577 14.1898C6.09464 13.2636 7.70537 12.3248 9.32487 11.4005C9.47642 11.3142 9.67056 11.3036 9.88913 11.2461C9.88913 11.3973 9.88913 11.488 9.88913 11.5786C9.88913 14.0236 9.89038 16.468 9.88725 18.913C9.88662 19.1586 9.93359 19.3786 10.1215 19.5492C10.4077 19.8092 10.8047 19.7923 11.1122 19.5036C11.26 19.3648 11.4028 19.2192 11.5437 19.0736C11.6846 18.928 11.8218 18.7786 11.9896 18.5998C12.2332 18.8473 12.4555 19.073 12.6778 19.2986C12.7492 19.3711 12.8194 19.4442 12.8939 19.5136C13.1194 19.7223 13.3805 19.7992 13.6698 19.6767C13.9661 19.5517 14.1076 19.313 14.1076 18.9917C14.1082 17.703 14.1076 16.4142 14.1076 15.1255C14.1076 13.8605 14.1076 12.5961 14.1076 11.2955C14.199 11.2955 14.2811 11.2955 14.3631 11.2955C15.8705 11.2955 17.3785 11.2955 18.8859 11.2955C19.4683 11.2955 19.7326 11.5567 19.7326 12.1348C19.7326 15.7748 19.7276 19.4142 19.7395 23.0542C19.7408 23.4898 19.6224 23.8111 19.2172 23.9986C14.4057 23.9992 9.59291 23.9992 4.78013 23.9992Z"
                      fill="#626262"
                    />
                    <path
                      d="M10.4065 0.000625C10.6439 0.07125 10.8912 0.118125 11.1161 0.216875C12.1782 0.683125 12.7475 1.50625 12.8427 2.65938C12.847 2.71375 12.8489 2.76813 12.8539 2.85563C13.0443 2.74875 13.219 2.65313 13.3913 2.55375C13.9054 2.25813 14.4171 1.95813 14.9318 1.66438C15.3802 1.40875 15.761 1.51 16.0209 1.95688C16.4524 2.69875 16.8789 3.44313 17.3072 4.1875C17.5997 4.69563 17.5064 5.04813 17.0022 5.33938C12.2928 8.05875 7.57961 10.7706 2.87768 13.5038C2.07356 13.9713 1.74415 13.8563 1.32519 13.0925C0.957577 12.4225 0.546127 11.7769 0.155343 11.1194C-0.124593 10.6481 -0.0256445 10.2681 0.447805 10C1.07218 9.64625 1.69781 9.29438 2.32281 8.94125C2.38857 8.90375 2.4512 8.86125 2.542 8.80438C2.09548 8.53 1.74791 8.19 1.50618 7.7525C0.881174 6.62125 1.08471 5.24188 2.0053 4.35188C2.91901 3.46813 4.29364 3.30625 5.40024 3.965C5.96324 4.3 6.51434 4.65625 7.07109 5.00188C7.13622 5.0425 7.20323 5.07875 7.29654 5.1325C7.30092 5.05188 7.30781 4.99438 7.30593 4.93688C7.28464 4.30438 7.26961 3.67188 7.23704 3.04063C7.16001 1.53375 8.10754 0.32375 9.5949 0.040625C9.63184 0.03375 9.66691 0.01375 9.70324 0C9.93746 0.000625 10.1717 0.000625 10.4065 0.000625ZM8.71751 5.22375C8.76949 5.2075 8.8008 5.20375 8.82523 5.18938C9.48655 4.80688 10.1554 4.43563 10.8061 4.03563C11.3904 3.67625 11.602 2.96188 11.3534 2.3075C11.1242 1.70438 10.4929 1.32688 9.86356 1.41625C9.19534 1.51188 8.66616 2.04188 8.65301 2.73188C8.63735 3.55625 8.69246 4.38125 8.71751 5.22375ZM6.70097 6.42125C5.95635 5.96438 5.27185 5.51438 4.55855 5.11625C3.99241 4.8 3.28349 4.98375 2.86891 5.48938C2.45996 5.98813 2.44744 6.71375 2.83885 7.22563C3.24028 7.75063 3.95171 7.95125 4.53725 7.64563C5.25494 7.27188 5.94758 6.85063 6.70097 6.42125Z"
                      fill="#626262"
                    />
                    <path
                      d="M23.9998 9.37578C23.7236 10.0295 23.1337 9.8739 22.5932 9.89453C22.5932 10.1277 22.5964 10.3433 22.5926 10.5595C22.5857 10.9895 22.2814 11.3027 21.8799 11.2964C21.4879 11.2908 21.1948 10.982 21.1873 10.5627C21.1835 10.3464 21.1867 10.1295 21.1867 9.89078C20.9487 9.89078 20.732 9.8939 20.516 9.89015C20.0876 9.88265 19.7745 9.5764 19.7814 9.17578C19.7883 8.78453 20.0982 8.49203 20.5166 8.48578C20.727 8.48265 20.9374 8.48515 21.1867 8.48515C21.1867 8.27265 21.1854 8.0664 21.1867 7.85953C21.1892 7.4014 21.471 7.08515 21.8799 7.08015C22.2983 7.07453 22.5895 7.39453 22.5926 7.8639C22.5939 8.0589 22.5926 8.25328 22.5926 8.4764C23.1149 8.51265 23.723 8.33578 23.9992 9.0014C23.9998 9.12578 23.9998 9.25078 23.9998 9.37578Z"
                      fill="#626262"
                    />
                    <path
                      d="M11.3151 11.3066C11.7791 11.3066 12.2294 11.3066 12.691 11.3066C12.691 13.2979 12.691 15.2779 12.691 17.2241C12.4762 17.1285 12.2469 16.9466 12.0159 16.9448C11.781 16.9423 11.5449 17.1166 11.3145 17.2116C11.3151 15.2923 11.3151 13.3091 11.3151 11.3066Z"
                      fill="#626262"
                    />
                    <path
                      d="M21.1391 4.96696C21.1404 5.34634 20.8247 5.66696 20.4452 5.67196C20.057 5.67696 19.7294 5.34884 19.7344 4.96071C19.7394 4.58071 20.0601 4.26571 20.4396 4.26759C20.8204 4.26884 21.1372 4.58696 21.1391 4.96696Z"
                      fill="#626262"
                    />
                    <path
                      d="M17.6239 8.48438C18.0034 8.48438 18.3235 8.80062 18.3266 9.18062C18.3303 9.56937 18.0022 9.89563 17.6133 9.88938C17.2338 9.88313 16.9194 9.56063 16.9219 9.18188C16.925 8.80188 17.2444 8.48438 17.6239 8.48438Z"
                      fill="#626262"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1609_6912">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Hộp quà bí mật
              </div>
              {isOpen2 && (
                <div className="dropdown-menu">
                  {/* Dropdown menu items as Links or buttons */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "0 auto",
                      marginLeft: "40px",
                      // alignItems: "center",
                    }}
                  >
                    <Link
                      to="https://bluepink.gitbook.io/weloveschool/the-le-minigame"
                      className="dropdown-item"
                      style={{ textDecoration: "none" }}
                    >
                      Giới thiệu
                    </Link>
                    <Link
                      to="/quiz/sublink2"
                      className="dropdown-item"
                      style={{ textDecoration: "none" }}
                    >
                      Chia sẽ
                    </Link>
                  </div>
                  {/* Add more dropdown items here */}
                </div>
              )}
            </div>
          </div>
        </div>
        <main className="wheel-page">
          <h3>Vòng Quay May Mắn</h3>
          <section className="wheel">
            <span className="wheel__arrow">
              <ul className="wheel__lucky">
                {listGift.map((item, index) => (
                  <li
                    key={index}
                    className="wheel__segment"
                    style={{
                      transform: `rotate(${
                        rotate * index
                      }deg) skewY(-${skewY}deg)`,
                    }}
                  >
                    <p
                      className={`wheel__text ${
                        index % 2 === 0 ? "wheel__text-1" : "wheel__text-2"
                      }`}
                      style={{
                        transform: `skewY(${skewY}deg) rotate(${
                          rotate / 2
                        }deg)`,
                      }}
                    >
                      <b>{item.text}</b>
                    </p>
                  </li>
                ))}
              </ul>
            </span>
          </section>
          <section className="wheel__info">
            <div className="wheel__desc">
              <div>1 lượt quay bằng 30 điểm</div>
              <p>Bạn có 12 lượt quay</p>
            </div>
            <div className="wheel__btn-wrapper">
              <button
                className="wheel__btn"
                onClick={() => !isRotating && start()}
              >
                QUAY
              </button>
            </div>
            <div className="wheel__mission">
              <p>
                Nhận thêm điểm <br /> bằng cách làm nhiệm vụ
              </p>
              <Link to="/mission">
                <button className="wheel__btn--mission">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.21 5.056C8.13 2.58867 11.13 1 14.5 1C14.6326 1 14.7598 1.05268 14.8536 1.14645C14.9473 1.24021 15 1.36739 15 1.5C15 4.87067 13.4113 7.87 10.944 9.79067C11.0466 10.4335 11.0085 11.0909 10.8324 11.7176C10.6563 12.3443 10.3463 12.9253 9.92377 13.4205C9.50129 13.9158 8.97639 14.3135 8.38529 14.5862C7.79419 14.8588 7.15097 15 6.5 15C6.36739 15 6.24022 14.9473 6.14645 14.8536C6.05268 14.7598 6 14.6326 6 14.5V11.746C5.35195 11.2342 4.76617 10.6482 4.25467 10H1.5C1.36739 10 1.24021 9.94732 1.14645 9.85355C1.05268 9.75979 1 9.63261 1 9.5C0.999947 8.84897 1.14116 8.20568 1.41388 7.61453C1.68661 7.02337 2.08435 6.49843 2.57967 6.07594C3.07499 5.65345 3.65608 5.34346 4.28285 5.16737C4.90961 4.99128 5.56712 4.95328 6.21 5.056ZM10 4.5C9.60218 4.5 9.22064 4.65804 8.93934 4.93934C8.65804 5.22064 8.5 5.60218 8.5 6C8.5 6.39782 8.65804 6.77936 8.93934 7.06066C9.22064 7.34196 9.60218 7.5 10 7.5C10.3978 7.5 10.7794 7.34196 11.0607 7.06066C11.342 6.77936 11.5 6.39782 11.5 6C11.5 5.60218 11.342 5.22064 11.0607 4.93934C10.7794 4.65804 10.3978 4.5 10 4.5Z"
                      fill="white"
                    />
                    <path
                      d="M3.50718 11.495C3.55984 11.4557 3.60425 11.4064 3.63788 11.35C3.6715 11.2936 3.69368 11.2311 3.70315 11.1661C3.71263 11.1011 3.7092 11.0348 3.69308 10.9712C3.67695 10.9075 3.64844 10.8476 3.60918 10.795C3.56991 10.7423 3.52066 10.6979 3.46423 10.6643C3.4078 10.6306 3.3453 10.6084 3.2803 10.599C3.2153 10.5895 3.14907 10.5929 3.0854 10.6091C3.02172 10.6252 2.96184 10.6537 2.90918 10.693C2.39777 11.0734 2.00012 11.5864 1.75923 12.1765C1.51835 12.7666 1.44341 13.4113 1.54251 14.041C1.55863 14.1458 1.60769 14.2428 1.68259 14.318C1.7575 14.3931 1.85436 14.4425 1.95918 14.459C2.58887 14.558 3.23365 14.4829 3.82376 14.2419C4.41387 14.0009 4.92685 13.6031 5.30718 13.0916C5.34771 13.0391 5.37738 12.979 5.39447 12.9149C5.41156 12.8508 5.41572 12.784 5.40671 12.7182C5.3977 12.6525 5.3757 12.5892 5.342 12.5321C5.30829 12.475 5.26355 12.4251 5.21038 12.3854C5.15721 12.3458 5.09668 12.3171 5.03231 12.301C4.96794 12.285 4.90102 12.2819 4.83545 12.2919C4.76988 12.302 4.70697 12.325 4.65038 12.3597C4.59379 12.3943 4.54466 12.4398 4.50585 12.4936C4.27336 12.8063 3.9709 13.0602 3.62267 13.235C3.27445 13.4098 2.89015 13.5007 2.50051 13.5003C2.50051 12.6803 2.89518 11.9516 3.50718 11.495Z"
                      fill="white"
                    />
                  </svg>
                  Nhiệm vụ
                </button>
              </Link>
            </div>
          </section>
          <div className="wheel__gift">
            <h4>Quà bạn nhận được</h4>
            <ul>
              {listGift.map((item, index) => (
                <li key={index}>
                  <div className="wheel__gift-item">
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1609_6923)">
                        <path
                          d="M12.5507 -0.000621289C12.6838 -0.000621289 12.8169 -0.000621289 12.9486 -0.000621289C13.0098 0.0220199 13.071 0.0593113 13.1336 0.0633068C14.8355 0.171186 16.238 0.913018 17.4582 2.06772C18.2779 2.84285 19.1242 3.58868 19.9598 4.34649C20.5706 4.90054 21.184 5.45058 21.8134 6.01928C22.85 4.95115 24.0755 4.39444 25.522 4.3971C26.9657 4.39977 28.1779 4.98577 29.1906 6.00995C30.7155 4.62751 32.2058 3.28369 33.6855 1.92921C34.5571 1.13144 35.5325 0.526786 36.6875 0.2471C37.1346 0.139222 37.595 0.0792889 38.0487 -0.00195312C38.1818 -0.00195312 38.3149 -0.00195312 38.4466 -0.00195312C38.6249 0.0286791 38.8032 0.0726297 38.9829 0.0886117C42.5277 0.400261 45.2848 3.73118 44.8497 7.26721C44.7393 8.16753 44.392 9.03722 44.1458 9.95086C45.2396 9.95086 46.4119 9.94287 47.5842 9.95219C49.5868 9.9695 50.9867 11.3773 50.996 13.3843C51.0027 14.88 50.9973 16.3743 50.9973 17.87C50.9973 19.3336 50.4052 19.9303 48.9521 19.9303C33.3342 19.9303 17.7177 19.925 2.09977 19.9423C1.08049 19.9436 0.371253 19.6093 0 18.6424C0 16.6487 0 14.6549 0 12.6611C0.0319357 12.6065 0.0758473 12.5559 0.0931458 12.496C0.581496 10.8525 1.75114 9.96285 3.45438 9.95219C4.46435 9.94553 5.47564 9.95219 6.48561 9.94953C6.63864 9.94953 6.79166 9.93355 6.98461 9.92156C6.92073 9.78571 6.8888 9.71113 6.85154 9.63921C5.12169 6.31628 6.43505 2.30878 9.84152 0.734552C10.6798 0.34832 11.6446 0.237777 12.5507 -0.000621289ZM20.4482 9.95086C20.5027 9.90158 20.5573 9.85363 20.6132 9.80436C20.4641 9.54598 20.3377 9.27029 20.1607 9.03322C20.025 8.85076 19.8254 8.71491 19.6538 8.55909C18.0304 7.09007 16.4349 5.5891 14.7769 4.16137C12.9286 2.56849 10.0571 3.5394 9.49954 5.89941C9.00454 7.99572 10.5587 9.91889 12.7956 9.94553C14.6518 9.96684 16.5094 9.95086 18.367 9.95086C19.0603 9.95086 19.7549 9.95086 20.4482 9.95086ZM30.3842 9.80303C30.4374 9.84564 30.4906 9.88959 30.5438 9.93221C30.641 9.93754 30.7395 9.94953 30.8366 9.94953C33.2411 9.95086 35.6456 9.95219 38.0501 9.94686C38.3135 9.94553 38.5797 9.91224 38.8405 9.86562C40.1485 9.63255 41.2303 8.6057 41.5058 7.34845C41.7919 6.04458 41.2503 4.6941 40.1445 3.95493C38.7952 3.05195 37.245 3.2091 35.9117 4.40776C34.2098 5.93804 32.5132 7.47497 30.8326 9.03056C30.6237 9.22368 30.5305 9.54198 30.3842 9.80303Z"
                          fill="#E1E1E1"
                        />
                        <path
                          d="M3.34708 23.2715C9.62378 23.2715 15.8592 23.2715 22.1373 23.2715C22.1373 32.4891 22.1373 41.6988 22.1373 50.971C21.9749 50.9803 21.7993 50.9977 21.6236 50.9977C16.7268 50.999 11.8313 51.0016 6.93453 50.9977C4.70834 50.9963 3.32047 49.6165 3.32047 47.399C3.31648 39.5252 3.31914 31.6501 3.32047 23.7763C3.32047 23.6164 3.33777 23.4553 3.34708 23.2715Z"
                          fill="#E1E1E1"
                        />
                        <path
                          d="M28.8457 50.9741C28.8457 41.7099 28.8457 32.5122 28.8457 23.2812C35.1184 23.2812 41.3645 23.2812 47.6785 23.2812C47.6785 23.4757 47.6785 23.6528 47.6785 23.83C47.6785 31.6705 47.6798 39.5123 47.6771 47.3529C47.6758 49.6196 46.3105 50.9968 44.0591 50.9981C39.1623 51.0021 34.2668 50.9994 29.37 50.9981C29.209 50.9994 29.0466 50.9834 28.8457 50.9741Z"
                          fill="#E1E1E1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1609_6923">
                          <rect width="51" height="51" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="wheel__msg">{msg}</h1>
        </main>
        <div className="SidbarRule"></div>
      </div>
      <div>{msg && <Popup message={msg} onClose={closePopup} />}</div>
    </>
  );
};

export default WheelOfFortune;
