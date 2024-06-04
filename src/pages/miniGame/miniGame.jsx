import React from "react";
import "./miniGame.scss";

const Minigame = () => {
  return (
    <>
      <div className="MinigamePage">
        <div className="SidbarGame"></div>
        <section className="Minigame">
          <img src={require("../../assets/images/quiz.png")} alt="minigame" />
          <h3 className="Minigame__title">Làm bài kiểm tra nhận ngay điểm</h3>
          <div className="Minigame__rule">
            <div className="Minigame__time">
              <div className="Minigame__time--content">
                <div className="Minigame__title--content">Thời gian </div>
              </div>
              <div className="Minigame__time--content">
                <h4>10 phút</h4>
              </div>
            </div>
            <div className="Minigame__point">
              <div className="Minigame__title--content">Lượt chơi</div>
              <div className="Minigame__point--content">2 Lượt</div>
            </div>
          </div>
          <div className="Minigame__btn">
            <button className="Minigame__btn--choose">Kiểm tra 15 phút</button>
            <button className="Minigame__btn--choose">1 tiết</button>
            <button className="Minigame__btn--choose">Học kì</button>
          </div>
        </section>
        <div className="SidbarRole"></div>
      </div>
    </>
  );
};

export default Minigame;
