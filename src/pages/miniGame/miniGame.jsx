import React from "react";
import "./miniGame.scss";

const Minigame = () => {
  return (
    <section className="minigame">
      <h1>Minigame</h1>
      <div className="rules">
        <h2>Chính sách điểm thưởng</h2>
        <p>Chính sách đổi quà</p>
        <h2>Trắc nghiệm</h2>
        <p>Thời gian: 15:00</p>
        <p>Lượt chơi: 2 lượt</p>
      </div>
      <div className="quiz">
        <h2>Làm bài kiểm tra nhận ngay điểm</h2>
        <ul>
          <li>Kiểm tra 15 phút</li>
          <li>1 tiết</li>
          <li>Học kì</li>
        </ul>
      </div>
    </section>
  );
};

export default Minigame;
