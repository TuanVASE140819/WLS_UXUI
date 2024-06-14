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
      }, i * 500); // Stagger the animation by 500ms per number
    });
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
    </div>
  );
}
