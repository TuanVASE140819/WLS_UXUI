import React from "react";
import Ads from "../../components/ads/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./register.scss";
import { Link } from "react-router-dom";
import { Comments } from "../../components/comments/Comments";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="register__wrapper">
          <form className="register__form">
            <div className="register__grid">
              <div className="register__left">
                <h2 className="register__title">Đăng ký</h2>

                <input
                  type="text"
                  className="register__input"
                  placeholder="Tên đăng nhập"
                />

                <div className="register__radio">
                  {/* radio nam hay nữ */}
                  <input type="radio" id="nam" name="gioitinh" value="nam" />
                  <label htmlFor="nam" className="register__label">
                    Nam
                  </label>
                  <input type="radio" id="nu" name="gioitinh" value="nu" />
                  <label htmlFor="nu" className="register__label">
                    Nữ
                  </label>
                </div>
                <input
                  type="date"
                  placeholder="Ngày sinh"
                  className="register__input"
                />

                <input
                  type="text"
                  placeholder="Email của bạn"
                  className="register__input"
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="register__input"
                />
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  className="register__input"
                />

                <button className="register__butonRegister">Đăng ký</button>
              </div>
              <div className="register__right">
                <img
                  src={require("../../assets/images/banner_login.png")}
                  alt="weloveschool"
                  width={350}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
