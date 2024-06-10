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
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t, i18n } = useTranslation("common");
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
                errors.username = t("username_required");
              }
              if (!values.password) {
                errors.password = t("password_required");
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            <Form className="login__form">
              <div className="login__grid">
                <div className="login__left">
                  <h2 className="login__title">{t("login_content1")}</h2>
                  <span className="login__subTitle">{t("login_content2")}</span>
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
                    {t("login_content3")}
                  </span>
                  <Field
                    type="text"
                    name="username"
                    className="login__input"
                    placeholder={t("username")}
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
                    placeholder={t("password")}
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
                      {t("remember_password")}
                    </label>

                    <Link to="/forgot-password">{t("forgot_password")}</Link>
                  </div>

                  <button type="submit" className="login__butonLogin">
                    {t("login")}
                  </button>
                  <span className="login__subTitle_2">
                    {t("login_content4")}
                    <Link to="/register" className="login__link">
                      {t("register")}
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
