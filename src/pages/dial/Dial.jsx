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
