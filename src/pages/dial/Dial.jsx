import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import EventsRight from "../../components/Events/Events";
import "./dial.scss";

export default function Dial() {
  const maxParticipants = 5000;
  const progress = (770 / maxParticipants) * 100;

  const [randomNumbers, setRandomNumbers] = useState(Array(6).fill(1));
  const [spinning, setSpinning] = useState(Array(6).fill(false));
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const generateRandomNumbers = () => {
    const newSpinning = Array(6).fill(false);
    setSpinning(newSpinning.map((_, i) => true));

    newSpinning.forEach((_, i) => {
      setTimeout(() => {
        setSpinning((prev) => {
          const newState = [...prev];
          newState[i] = false;
          return newState;
        });

        setRandomNumbers((prev) => {
          const newState = [...prev];
          newState[i] = Math.floor(Math.random() * 10);
          return newState;
        });

        if (i === newSpinning.length - 1) {
          setShowModal(true); // Show modal after the last number has been generated
        }
      }, i * 500); // Stagger the animation by 500ms per number
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBarEvents />
      <div className="dial">
        <div className="dial__wrapper">
          <div className="dial__header">
            <div className="dial__banner">
              <img
                src={require("../../assets/images/banner-quayso.png")}
                alt=""
              />
            </div>
          </div>
          <div className="dial__content">
            <div className="dial__content__banner">
              <img src={require("../../assets/images/banner-car.png")} alt="" />
              <div
                style={{
                  backgroundColor: "#ddd",
                  borderRadius: "10px",
                  height: "10px",
                  margin: "10px 60px",
                }}
              >
                <div
                  style={{
                    borderRadius: "10px",
                    height: "10px",
                    width: `${progress}%`,
                    backgroundColor: "#ED7D29",
                  }}
                ></div>
                <div className="dial__content__banner__progress">
                  <p>Số lượng người tham gia</p>
                  <span>5000/6000</span>
                </div>
              </div>
            </div>

            <div className="dial__content__text">
              <h2>Chọn số trúng quà</h2>
              <p>
                Thời gian: <span>1:30</span> kết thúc
              </p>
              <p>
                Số lượt chơi của bạn: <span>1</span> lượt
              </p>
              <div className="dial__content__text__input">
                {randomNumbers.map((num, index) => (
                  <div
                    key={index}
                    className={`number-wrapper ${
                      spinning[index] ? "spinning" : ""
                    }`}
                  >
                    <span className="number">{num}</span>
                  </div>
                ))}
              </div>
              <div className="dial__content__text__btn">
                <button onClick={generateRandomNumbers}>
                  <div className="dial__content__text__btn__logo">
                    <img
                      src={require("../../assets/images/quaysongaunhien.png")}
                      alt=""
                    />
                  </div>
                  Quay số ngẫu nhiên
                </button>
              </div>
              <div className="dial__content__text__rate">1 lượt = 10 sao</div>
              <div className="dial__content__text__btn--button">
                <div className="dial__content__text__buy">
                  <button>Mua thêm lượt</button>
                </div>
                <Link
                  to="/exchangeHistory"
                  className="dial__content__text__history"
                >
                  Lịch sử quay số
                </Link>
              </div>
              <div className="dial__content__text__share">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 6.73234C15.8753 6.89331 15.7601 7.07322 15.6066 7.22472C13.7835 9.09955 11.9508 10.9744 10.1277 12.8492C9.93583 13.0481 9.72474 13.1806 9.42729 13.1238C9.09145 13.0575 8.88996 12.7924 8.88996 12.3947C8.88996 11.5614 8.88996 10.7282 8.88996 9.88546C8.88996 9.80971 8.88996 9.73396 8.88996 9.67715C8.86117 9.65821 8.85157 9.64874 8.84198 9.63927C6.58711 9.49724 4.55292 9.99909 2.85457 11.552C2.22129 12.139 1.71274 12.8113 1.30975 13.5783C1.10825 13.9571 0.743628 14.0991 0.388606 13.9287C0.167916 13.8245 0.023988 13.6446 0.0143928 13.3984C-0.0143928 12.1012 -0.0431785 10.8039 0.388606 9.55406C1.50165 6.34412 3.73733 4.35566 7.11484 3.65497C7.62339 3.55081 8.15112 3.55081 8.65967 3.50347C8.72684 3.494 8.794 3.494 8.88036 3.494C8.88036 3.40878 8.88036 3.33303 8.88036 3.26675C8.88036 2.47137 8.88996 1.67598 8.87076 0.880602C8.88036 0.473442 8.9955 0.170439 9.37931 0C9.49445 0 9.6 0 9.71514 0C9.86867 0.113626 10.051 0.217783 10.1853 0.359816C11.9988 2.20624 13.8027 4.06213 15.6066 5.91802C15.7505 6.06952 15.8657 6.24943 16 6.4104C16 6.51456 16 6.62819 16 6.73234Z"
                    fill="#0487D9"
                  />
                </svg>
                Chia sẽ cho bạn bè để nhận thêm lượt
              </div>
            </div>
          </div>
          <div className="dial__footer">
            <div className="dial__footer__name">
              Lamborghini Aventador S Roadster
            </div>
            <div className="dial__footer__item">THÔNG SỐ KĨ THUẬT</div>
            <div className="dial__footer__infor">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </div>
            <div className="dial__footer__parameter">
              <div className="dial__footer__parameter__item">
                <div className="dial__footer__parameter__item__logo">
                  <img src={require("../../assets/images/tocdo.png")} alt="" />
                </div>
                <div className="dial__footer__parameter__item__text">
                  <p>Tốc độ tối đa</p>
                  <h3>350 km/h</h3>
                </div>
              </div>
              <div className="dial__footer__parameter__item">
                <div className="dial__footer__parameter__item__logo">
                  <img src={require("../../assets/images/momen.png")} alt="" />
                </div>
                <div className="dial__footer__parameter__item__text">
                  <p>Mô-men xoắn cực đại</p>
                  <h3>350 km/h</h3>
                </div>
              </div>
              <div className="dial__footer__parameter__item">
                <div className="dial__footer__parameter__item__logo">
                  <img src={require("../../assets/images/Dongco.png")} alt="" />
                </div>
                <div className="dial__footer__parameter__item__text">
                  <p>Động cơ</p>
                  <h3>V12 6.5L</h3>
                </div>
              </div>
              <div className="dial__footer__parameter__item">
                <div className="dial__footer__parameter__item__logo">
                  <img
                    src={require("../../assets/images/tocdotoida.png")}
                    alt=""
                  />
                </div>
                <div className="dial__footer__parameter__item__text">
                  <p>Tốc độ tối đa</p>
                  <h3>350 km/h</h3>
                </div>
              </div>
              <div className="dial__footer__parameter__item">
                <div className="dial__footer__parameter__item__logo">
                  <img
                    src={require("../../assets/images/congsuatcucdai.png")}
                    alt=""
                  />
                </div>
                <div className="dial__footer__parameter__item__text">
                  <p>Công suất cực đại</p>
                  <h3>740 mã lực</h3>
                </div>
              </div>
              <div className="dial__footer__parameter__item">
                <div className="dial__footer__parameter__item__logo">
                  <img
                    src={require("../../assets/images/dungtich.png")}
                    alt=""
                  />
                </div>
                <div className="dial__footer__parameter__item__text">
                  <p>Dung tích công tác</p>
                  <h3>V12 6.5L</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EventsRight />
      {showModal && (
        <div className="overlay">
          <div className="popup">
            {" "}
            <div className="popup__wrapper">
              <div
                className="popup__title"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                Dãy số của bạn
              </div>
              <div className="popup__content">
                <div className="popup__header">
                  <button
                    className="popup__close"
                    style={{
                      // font-size: 20px;
                      position: "absolute",
                      top: "-80px",
                      right: "-30px",
                      cursor: "pointer",
                      color: "#333",
                    }}
                    onClick={closeModal}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM10.28 9.22C10.2113 9.14631 10.1285 9.08721 10.0365 9.04622C9.94454 9.00523 9.84522 8.98318 9.74452 8.98141C9.64382 8.97963 9.54379 8.99816 9.4504 9.03588C9.35701 9.0736 9.27218 9.12974 9.20096 9.20096C9.12974 9.27218 9.0736 9.35701 9.03588 9.4504C8.99816 9.54379 8.97963 9.64382 8.98141 9.74452C8.98318 9.84522 9.00523 9.94454 9.04622 10.0365C9.08721 10.1285 9.14631 10.2113 9.22 10.28L10.94 12L9.22 13.72C9.14631 13.7887 9.08721 13.8715 9.04622 13.9635C9.00523 14.0555 8.98318 14.1548 8.98141 14.2555C8.97963 14.3562 8.99816 14.4562 9.03588 14.5496C9.0736 14.643 9.12974 14.7278 9.20096 14.799C9.27218 14.8703 9.35701 14.9264 9.4504 14.9641C9.54379 15.0018 9.64382 15.0204 9.74452 15.0186C9.84522 15.0168 9.94454 14.9948 10.0365 14.9538C10.1285 14.9128 10.2113 14.8537 10.28 14.78L12 13.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L13.06 12L14.78 10.28C14.8537 10.2113 14.9128 10.1285 14.9538 10.0365C14.9948 9.94454 15.0168 9.84522 15.0186 9.74452C15.0204 9.64382 15.0018 9.54379 14.9641 9.4504C14.9264 9.35701 14.8703 9.27218 14.799 9.20096C14.7278 9.12974 14.643 9.0736 14.5496 9.03588C14.4562 8.99816 14.3562 8.97963 14.2555 8.98141C14.1548 8.98318 14.0555 9.00523 13.9635 9.04622C13.8715 9.08721 13.7887 9.14631 13.72 9.22L12 10.94L10.28 9.22Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </button>

                  {randomNumbers && (
                    <div className="dial__content__text__input">
                      {randomNumbers.map((num, index) => (
                        <div
                          key={index}
                          className={`number-wrapper ${
                            spinning[index] ? "spinning" : ""
                          }`}
                          style={{
                            fontFamily: "Mulish",
                            fontSize: "24px",
                            fontWeight: "800",
                            lineHeight: "30.12px",
                            textAlign: "left",
                            color: "#ED7D29",
                          }}
                        >
                          <span className="number">{num}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* xác nhận */}
                <div className="popup__footer">
                  <button
                    className="popup__footer__btn"
                    onClick={closeModal}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      marginTop: "20px",
                      backgroundColor: "#4ABC96",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}
