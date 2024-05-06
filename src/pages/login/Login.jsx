import React from "react";
import Ads from "../../components/ads/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./login.scss";
import { Link } from "react-router-dom";
import { Comments } from "../../components/comments/Comments";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__wrapper">
          <form className="login__form">
            <div className="login__grid">
              <div className="login__left">
                <h2 className="login__title">Đăng nhập tài khoản của bạn</h2>
                <span className="login__subTitle">
                  Chào mừng bạn trở lại! Chọn cách đăng nhập
                </span>
                <div className="login__login">
                  <button className="login__buttonLogin">
                    <span className="login__span">
                      <img
                        src={require("../../assets/images/facebook.png")}
                        alt="facebook"
                        width={20}
                      />
                    </span>
                    Facebook
                  </button>
                  <button className="login__buttonLogin">
                    <span className="login__span">
                      <img
                        src={require("../../assets/images/google.png")}
                        alt="google"
                        width={20}
                      />
                    </span>
                    Google
                  </button>
                </div>
                <span className="login__subTitle_1">
                  hoặc tiếp tục với email của bạn
                </span>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Tên tài khoản"
                />

                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="login__input"
                />
                <div className="login__forgot">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <label htmlFor="remember" className="login__label">
                    Lưu mật khẩu
                  </label>

                  <Link to="/login">Quên mật khẩu?</Link>
                </div>

                <button className="login__butonLogin">Đăng nhập</button>
                <span className="login__subTitle_2">
                  Bạn chưa có tài khoản?
                  <Link to="/register" className="login__link">
                    Đăng ký
                  </Link>
                </span>
              </div>

              <div className="login__right">
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

export default Login;
