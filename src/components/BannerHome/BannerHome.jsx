import React from "react";

import "./bannerHome.scss";

const BannerHome = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__wrapper">
          <h1>Chuyện Trường Xưa</h1>
          <h2>HÌNH ẢNH NỮ HỌC SINH CÙNG CHIẾC ÁO DÀI QUA NHIỀU THẬP KỶ</h2>
          <p>
            Thời sinh viên có cây đàn ghi-ta
            <br />
            Đàn ngân lên chúng ta cùng hòa ca
            <br />
            Có anh bạn xa nhà, có cô bạn nhớ cha
            <br />
            Cất vang cùng lời ca...
          </p>
          <img src={require("../../assets/images/bg_fim.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default BannerHome;
