import React, { useState } from "react";

import Friends from "../../components/Friends/Friends";
import Ads from "../../components/ads/Ads";
import SchoolFllow from "../../components/schoolFollow/SchoolFollow";
import PersonalPosts from "../../components/Posts/PersonalPosts";
import { Link, NavLink } from "react-router-dom";

import { SvgAccount } from "../../components/svgs/Menu/SvgAccount";
import { SvgFriend } from "../../components/svgs/Menu/SvgFriend";
import { SvgGroup } from "../../components/svgs/Menu/SvgGroup";
import { SvgInfomation } from "../../components/svgs/Menu/SvgInfomation";
import { SvgNews } from "../../components/svgs/Menu/SvgNews";

import "./inforUser.scss";
import Information from "../../components/Information/Information";
import Account from "../../components/Account/Account";

import { useNavigate } from "react-router-dom";
import Policy from "../../components/policy/policy";
import Bank from "../../components/Bank/Bank";
const InforUser = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("dataUser");
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload(); // refresh trang
  };
  const [selectedInterface, setSelectedInterface] = useState("posts");
  console.log("selectedInterface", selectedInterface);
  return (
    <>
      <div
        className="body__wrapper"
        // style={{ display: "flex" }}
      >
        <div className="sideBarUser">
          <div className="sideBarUser__wrapper">
            <div className="sideBarUser__listItem">
              <figure className="sideBarUser__image">
                <img
                  src={require("../../assets/images/sideBarMessage-1.png")}
                  alt=""
                />
              </figure>
              <div className="sideBarUser__text">
                <h4>Hòa Hồ</h4>

                <span>
                  {" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.78751 1.21009C9.23551 0.133094 10.7635 0.133094 11.2115 1.21009L13.2935 6.21609L18.6975 6.65009C19.8615 6.74309 20.3335 8.19509 19.4465 8.95509L15.3295 12.4821L16.5865 17.7551C16.8575 18.8911 15.6225 19.7881 14.6265 19.1801L9.99951 16.3541L5.37251 19.1801C4.37651 19.7881 3.14151 18.8901 3.41251 17.7551L4.66951 12.4821L0.552514 8.95509C-0.334486 8.19509 0.137514 6.74309 1.30151 6.65009L6.70551 6.21609L8.78751 1.21009Z"
                      fill="#FCAA17"
                    />
                  </svg>
                  9015
                </span>
              </div>
            </div>
            <div className="siderBarUser__ComboCode">
              <div className="sideBarUser__code">
                <div className="sideBarUser__codeItem">
                  Mã giới thiệu: <span>123456</span>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3125 3.75C10.3125 3.25272 10.115 2.77581 9.76333 2.42417C9.41169 2.07254 8.93478 1.875 8.4375 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V8.4375C1.875 8.93478 2.07254 9.41169 2.42417 9.76333C2.77581 10.115 3.25272 10.3125 3.75 10.3125V6.5625C3.75 5.81658 4.04632 5.10121 4.57376 4.57376C5.10121 4.04632 5.81658 3.75 6.5625 3.75H10.3125Z"
                    fill="#8F8F8F"
                  />
                  <path
                    d="M11.25 4.6875C11.7473 4.6875 12.2242 4.88504 12.5758 5.23667C12.9275 5.58831 13.125 6.06522 13.125 6.5625V11.25C13.125 11.7473 12.9275 12.2242 12.5758 12.5758C12.2242 12.9275 11.7473 13.125 11.25 13.125H6.5625C6.06522 13.125 5.58831 12.9275 5.23667 12.5758C4.88504 12.2242 4.6875 11.7473 4.6875 11.25V6.5625C4.6875 6.06522 4.88504 5.58831 5.23667 5.23667C5.58831 4.88504 6.06522 4.6875 6.5625 4.6875H11.25Z"
                    fill="#8F8F8F"
                  />
                </svg>
              </div>

              <div className="sideBarUser__code">
                <div className="sideBarUser__codeItem">
                  Link tài khoản: <span>httpt//hoahoweloves...</span>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3125 3.75C10.3125 3.25272 10.115 2.77581 9.76333 2.42417C9.41169 2.07254 8.93478 1.875 8.4375 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V8.4375C1.875 8.93478 2.07254 9.41169 2.42417 9.76333C2.77581 10.115 3.25272 10.3125 3.75 10.3125V6.5625C3.75 5.81658 4.04632 5.10121 4.57376 4.57376C5.10121 4.04632 5.81658 3.75 6.5625 3.75H10.3125Z"
                    fill="#8F8F8F"
                  />
                  <path
                    d="M11.25 4.6875C11.7473 4.6875 12.2242 4.88504 12.5758 5.23667C12.9275 5.58831 13.125 6.06522 13.125 6.5625V11.25C13.125 11.7473 12.9275 12.2242 12.5758 12.5758C12.2242 12.9275 11.7473 13.125 11.25 13.125H6.5625C6.06522 13.125 5.58831 12.9275 5.23667 12.5758C4.88504 12.2242 4.6875 11.7473 4.6875 11.25V6.5625C4.6875 6.06522 4.88504 5.58831 5.23667 5.23667C5.58831 4.88504 6.06522 4.6875 6.5625 4.6875H11.25Z"
                    fill="#8F8F8F"
                  />
                </svg>
              </div>
              <button className="sideBarUser__recharge">Nạp</button>
            </div>

            <div className="inforNav__links">
              <Link
                to="/information?filter=posts"
                className={`inforNav__linkItem ${
                  selectedInterface === "posts" ? "active" : ""
                }`}
                onClick={() => setSelectedInterface("posts")}
              >
                <SvgNews color="#626262" />
                <p>Quản lí bài viết</p>
              </Link>
              <Link
                to="/information?filter=friends"
                className={`inforNav__linkItem ${
                  selectedInterface === "friends" ? "active" : ""
                }`}
                onClick={() => setSelectedInterface("friends")}
              >
                <SvgFriend color="#626262" />
                <p>Bạn bè</p>
              </Link>
              <Link
                to="/information?filter=groups"
                className={`inforNav__linkItem
              ${selectedInterface === "groups" ? "active" : ""}`}
                onClick={() => setSelectedInterface("groups")}
              >
                <SvgGroup color="#626262" />
                <p>Hội nhóm</p>
              </Link>

              <Link
                to="/information?filter=information"
                className={`inforNav__linkItem
              ${selectedInterface === "information" ? "active" : ""}`}
                onClick={() => setSelectedInterface("information")}
              >
                <SvgInfomation color="#626262" />
                <p>Thông tin cá nhân</p>
              </Link>

              <Link
                to="/information?filter=bankCard"
                className={`inforNav__linkItem
              ${selectedInterface === "bankCard" ? "active" : ""}`}
                onClick={() => setSelectedInterface("bankCard")}
              >
                <SvgInfomation color="#626262" />
                <p>Quản lý thẻ</p>
              </Link>
              <Link
                to="/information?filter=account"
                className={`inforNav__linkItem
              ${selectedInterface === "account" ? "active" : ""}`}
                onClick={() => setSelectedInterface("account")}
              >
                <SvgAccount color="#626262" />
                <p>Thông tin tài khoản</p>
              </Link>
              <div className="inforNav__linkItem" onClick={handleSignOut}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 12.5C0 5.59615 5.59615 0 12.5 0C19.4038 0 25 5.59615 25 12.5C25 19.4038 19.4038 25 12.5 25C5.59615 25 0 19.4038 0 12.5ZM11.1615 10.6513C12.6308 9.91667 14.2859 11.2449 13.8872 12.8385L12.9782 16.4744L13.0321 16.4487C13.258 16.3494 13.5134 16.3407 13.7455 16.4246C13.9777 16.5084 14.1687 16.6782 14.279 16.8989C14.3894 17.1197 14.4107 17.3744 14.3385 17.6104C14.2662 17.8463 14.106 18.0455 13.891 18.1667L13.8397 18.1949C12.3692 18.9295 10.7141 17.6013 11.1128 16.0077L12.0231 12.3718L11.9692 12.3974C11.8558 12.4605 11.7308 12.4999 11.6018 12.5133C11.4727 12.5268 11.3423 12.514 11.2183 12.4757C11.0943 12.4374 10.9794 12.3744 10.8804 12.2905C10.7814 12.2066 10.7005 12.1035 10.6424 11.9875C10.5843 11.8715 10.5503 11.7449 10.5424 11.6154C10.5345 11.4859 10.5529 11.3561 10.596"
                    fill="#626262"
                  />
                </svg>
                <p>Đăng xuất</p>
              </div>
            </div>
          </div>
        </div>
        <div className="information">
          <div className="information__wrapper">
            <div>
              <div className="information__listItem">
                <figure className="information__image">
                  <img
                    src={require("../../assets/images/sideBarMessage-1.png")}
                    alt=""
                  />
                </figure>
                <div className="information__text">
                  <h4>Hòa Hồ</h4>

                  <span>
                    {" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.78751 1.21009C9.23551 0.133094 10.7635 0.133094 11.2115 1.21009L13.2935 6.21609L18.6975 6.65009C19.8615 6.74309 20.3335 8.19509 19.4465 8.95509L15.3295 12.4821L16.5865 17.7551C16.8575 18.8911 15.6225 19.7881 14.6265 19.1801L9.99951 16.3541L5.37251 19.1801C4.37651 19.7881 3.14151 18.8901 3.41251 17.7551L4.66951 12.4821L0.552514 8.95509C-0.334486 8.19509 0.137514 6.74309 1.30151 6.65009L6.70551 6.21609L8.78751 1.21009Z"
                        fill="#FCAA17"
                      />
                    </svg>
                    9015
                  </span>
                </div>
                <div className="information__logout" onClick={handleSignOut}>
                  <p>Đăng xuất</p>
                </div>
                <div className="information__lang">
                  <NavLink to="/?lang=vi" className="information__langLink">
                    VI
                  </NavLink>
                  <span>|</span>
                  <NavLink to="/?lang=en" className="information__langLink">
                    EN
                  </NavLink>
                </div>
              </div>
              <div className="information__links">
                <Link
                  to="/information?filter=posts"
                  className={`information__linkItem ${
                    selectedInterface === "posts" ? "active" : ""
                  }`}
                  onClick={() => setSelectedInterface("posts")}
                ></Link>
              </div>
            </div>
          </div>
          <div className="information__links">
            <Link
              to="/information?filter=posts"
              className={`information__linkItem ${
                selectedInterface === "posts" ? "active" : ""
              }`}
              onClick={() => setSelectedInterface("posts")}
            >
              <p>Bài viết</p>
            </Link>
            <Link
              to="/information?filter=friends"
              className={`information__linkItem ${
                selectedInterface === "friends" ? "active" : ""
              }`}
              onClick={() => setSelectedInterface("friends")}
            >
              <p>Bạn bè</p>
            </Link>
            <Link
              to="/information?filter=groups"
              className={`information__linkItem
              ${selectedInterface === "groups" ? "active" : ""}`}
              onClick={() => setSelectedInterface("groups")}
            >
              <p>Hội nhóm</p>
            </Link>

            <Link
              to="/information?filter=information"
              className={`information__linkItem
              ${selectedInterface === "information" ? "active" : ""}`}
              onClick={() => setSelectedInterface("information")}
            >
              <p>Cá nhân</p>
            </Link>

            <Link
              to="/information?filter=account"
              className={`information__linkItem
              ${selectedInterface === "account" ? "active" : ""}`}
              onClick={() => setSelectedInterface("account")}
            >
              <p>Tài khoản</p>
            </Link>
          </div>
        </div>
        {selectedInterface === "posts" && <PersonalPosts />}
        {selectedInterface === "groups" && <SchoolFllow />}
        {selectedInterface === "friends" && <Friends />}
        {selectedInterface === "information" && <Information />}
        {selectedInterface === "account" && <Account />}
        {selectedInterface === "bankCard" && <Bank />}
        <Policy />
      </div>
    </>
  );
};

export default InforUser;
