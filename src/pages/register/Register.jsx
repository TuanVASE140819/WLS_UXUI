import React from "react";
import Ads from "../../components/ads/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./register.scss";
import { Link } from "react-router-dom";
import { Comments } from "../../components/comments/Comments";
import Swal from "sweetalert2";
import { registerUser } from "../../api/apiServices";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const handleSumbit = (values, { setSubmitting }) => {
    const data = {
      username: values.username,
      password: values.confirmPassword,
      name: values.name,
      role: "user",
      dob: values.birthdate,
      email: values.email,
      note: values.note,
      status: values.status,
      obdata: values.obdata,
    };

    // neus Status Code = 200 => dang ky thanh cong => chuyen huong ve trang login
    // neu Status Code = 400 => dang ky that bai => thong bao loi

    registerUser(data)
      .then((response) => {
        console.log(response);
        if (response.statusCode === 200) {
          // in ra message do api tra ve
          Swal.fire(
            "Đăng ký thành công",
            "Chúc mừng bạn đã đăng ký thành công",
            "success"
          );
          navigate("/login");
        }
        if (response.statusCode === 409) {
          Swal.fire("Đăng ký thất bại", response.message, "error");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className="register">
        <div className="register__wrapper">
          <Formik
            initialValues={{
              username: "",
              gender: "",
              birthdate: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            className="register__form"
            validate={(values) => {
              const errors = {};
              // Add your validation logic here
              if (!values.username) {
                errors.username = "Bạn chưa nhập tên đăng nhập";
              }

              if (!values.email) {
                errors.email = "Bạn chưa nhập email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Bạn nhập email không đúng";
              }

              if (!values.birthdate) {
                errors.birthdate = "Bạn chưa nhập ngày sinh";
              } else if (
                new Date().getFullYear() -
                  new Date(values.birthdate).getFullYear() <
                18
              ) {
                errors.birthdate = "Bạn chưa đủ 18 tuổi";
              }

              if (!values.password) {
                errors.password = "Bạn chưa nhập mật khẩu";
              }

              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Mật khẩu không khớp";
              }

              return errors;
            }}
            onSubmit={handleSumbit}
          >
            <Form className="register__form">
              <div className="register__grid">
                <div className="register__left">
                  <h2 className="register__title">{t("register")}</h2>

                  <Field
                    type="text"
                    name="username"
                    className="register__input"
                    placeholder="Tên đăng nhập"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error-message"
                  />
                  <div className="register__radio">
                    {/* radio nam hay nữ */}
                    <label>
                      <Field type="radio" name="gender" value="nam" />
                      Nam
                    </label>
                    <label>
                      <Field type="radio" name="gender" value="nu" />
                      Nữ
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="error-message"
                  />
                  <Field
                    type="date"
                    name="birthdate"
                    className="register__input"
                  />
                  <ErrorMessage
                    name="birthdate"
                    component="div"
                    className="error-message"
                  />

                  <Field
                    type="text"
                    name="email"
                    className="register__input"
                    placeholder="Email của bạn"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />

                  <Field
                    type="password"
                    name="password"
                    className="register__input"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />

                  <Field
                    type="password"
                    name="confirmPassword"
                    className="register__input"
                    placeholder="Nhập lại mật khẩu"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error-message"
                  />

                  <button
                    type="submit"
                    className="register__butonRegister"
                  ></button>
                </div>
                <div className="register__right">
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

export default Register;
