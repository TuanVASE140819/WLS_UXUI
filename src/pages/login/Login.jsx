import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Ads from "../../components/ads/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./login.scss";
import { Link } from "react-router-dom";
import { Comments } from "../../components/comments/Comments";
import { loginUser } from "../../api/apiServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("values", values);
      Swal.fire({
        title: "Đang xử lý...",
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },

        onAfterClose: () => {
          Swal.hideLoading();
        },
      });

      const response = await loginUser(values);
      if (response.statusCode === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("dataUser", JSON.stringify(response.data));

        // hiện thị local storage token
        console.log("l4444", localStorage.getItem("token"));

        console.log("dataUser", localStorage.getItem("dataUser"));
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error logging in user:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login__wrapper">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Vui lòng nhập tên tài khoản";
              }
              if (!values.password) {
                errors.password = "Vui lòng nhập mật khẩu";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            <Form className="login__form">
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
                  <Field
                    type="text"
                    name="username"
                    className="login__input"
                    placeholder="Tên tài khoản"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error-message"
                  />
                  <Field
                    type="password"
                    name="password"
                    className="login__input"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
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

                  <button type="submit" className="login__butonLogin">
                    Đăng nhập
                  </button>
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
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
