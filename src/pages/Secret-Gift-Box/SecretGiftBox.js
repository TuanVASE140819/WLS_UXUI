import React, { useState } from "react";
import "./secretgiftbox.scss";
import Ads from "../../components/ads/Ads";

const WheelOfFortune = () => {
  const [openedBoxes, setOpenedBoxes] = useState([]);
  const [msg, setMsg] = useState("");

  const listGift = [
    { text: "Quà 1", percent: 10 / 100 },
    { text: "Quà 2", percent: 10 / 100 },
    { text: "Quà 3", percent: 5 / 100 },
    { text: "Quà 4", percent: 5 / 100 },
    { text: "Quà 5", percent: 5 / 100 },
    { text: "Quà 6", percent: 5 / 100 },
    { text: "Quà 7", percent: 5 / 100 },
    { text: "Quà 8", percent: 5 / 100 },
  ];

  const handleBoxClick = (index) => {
    if (!openedBoxes.includes(index)) {
      setOpenedBoxes([...openedBoxes, index]);
      setTimeout(() => {
        document.getElementById(`box-${index}`).classList.add("opening");
      }, 50); // Small delay to ensure CSS transition triggers properly
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
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
            {listGift.map((gift, index) => (
              <div
                id={`box-${index}`}
                key={index}
                className={`SecretGiftBox__lucky__box ${
                  openedBoxes.includes(index) ? "opening" : ""
                }`}
                onClick={() => handleBoxClick(index)}
              >
                <img
                  className="box-gift"
                  src={require("../../assets/images/box_gift.png")}
                  alt=""
                />
                <div className="gift-content">{gift.text}</div>
              </div>
            ))}
          </div>
          {msg && <div className="SecretGiftBox__message">{msg}</div>}
        </main>
        <div className="SidbarRule"></div>
      </div>
    </>
  );
};

export default WheelOfFortune;
