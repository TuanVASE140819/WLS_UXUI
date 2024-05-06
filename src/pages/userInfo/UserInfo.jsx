import React from "react";
import Ads from "../../components/ads/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./userInfo.scss";

const UserInfo = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="userInfo">
          <div className="userInfo__wrapper">
            <h2>Thông tin ban</h2>
            <form className="userInfo__form">
              <div className="userInfo__inputWrapper">
                <div className="userInfo__input">
                  <label htmlFor="">Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    defaultValue="Nguyen Van A"
                  />
                </div>
                <div className="userInfo__input">
                  <label htmlFor="">Biệt danh </label>
                  <input
                    type="text"
                    placeholder="Biệt danh"
                    defaultValue="Nhập biệt danh"
                  />
                </div>
              </div>
              <div className="userInfo__input">
                <label htmlFor="">Trường học</label>
                <input
                  type="text"
                  placeholder="Nhập tên trường"
                  defaultValue="Nhập tên trường"
                />
              </div>
              <div className="userInfo__input">
                <label htmlFor="">Năm học</label>
                <input type="date" name="" id="" />
              </div>
              <div className="userInfo__input">
                <label htmlFor="">Mô tả</label>
                <textarea placeholder="Hãy mô tả thêm bạn của bạn" cols="30" rows="8"></textarea>
              </div>
              <div className="userInfo__btnContainer">
                <div className="userInfo__btn cancel">Huỷ</div>
                <div className="userInfo__btn">Xác nhận</div>
              </div>
            </form>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default UserInfo;
