import React, { useState } from "react";
import "./secretgiftbox.scss";
import Ads from "../../components/ads/Ads";

const WheelOfFortune = () => {
  const [currentRotate, setCurrentRotate] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [msg, setMsg] = useState("");

  const timeRotate = 7000; // 7 seconds
  const listGift = [
    {
      text: "Quà 1",
      percent: 10 / 100,
    },
    { text: "Quà 2", percent: 10 / 100 },
    { text: "Quà 3", percent: 5 / 100 },
    { text: "Quà 4", percent: 5 / 100 },
    { text: "Quà 5", percent: 5 / 100 },
    { text: "Quà 6", percent: 40 / 100 },
    // { text: "Khóa học js free", percent: 10 / 100 },
    // { text: "Áo khoác Gucci", percent: 20 / 100 },
  ];

  const size = listGift.length;
  const rotate = 360 / size;
  const skewY = 90 - rotate;

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
    document.querySelector(".SecretGiftBox__lucky").style.transform = `rotate(${
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
        <div className="SidbarGame"></div>

        <main className="SecretGiftBox">
          <div className="SecretGiftBox__header">
            <img src={require("../../assets/images/Box.png")} alt="" />
            <div>
              <div className="SecretGiftBox__header__title">
                <h1>Hộp Quà Bí Mật</h1>
                <ul>
                  <li>Dùng điểm thưởng để mua quyền mở hộp quà</li>
                  <li>Mỗi hộp quà là những phần quà khác nhau</li>
                  <li>Cần 100 điểm để mở hộp quà bí mật</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="SecretGiftBox__lucky">
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
            <div className="SecretGiftBox__lucky__box">
              <img src={require("../../assets/images/box_gift.png")} alt="" />
            </div>
          </div>
        </main>

        <div className="SidbarRule"></div>
      </div>
    </>
  );
};

export default WheelOfFortune;
