import React, { useState } from "react";

import Friends from "../../components/Friends/Friends";
import Ads from "../../components/ads/Ads";
import SchoolFllow from "../../components/schoolFollow/SchoolFollow";
import PersonalPosts from "../../components/Posts/PersonalPosts";
import { Link } from "react-router-dom";

import { SvgAccount } from "../../components/svgs/Menu/SvgAccount";
import { SvgFriend } from "../../components/svgs/Menu/SvgFriend";
import { SvgGroup } from "../../components/svgs/Menu/SvgGroup";
import { SvgInfomation } from "../../components/svgs/Menu/SvgInfomation";
import { SvgNews } from "../../components/svgs/Menu/SvgNews";

import "./inforUser.scss";
import Information from "../../components/Information/Information";
import Account from "../../components/Account/Account";
const InforUser = () => {
  const [selectedInterface, setSelectedInterface] = useState("posts");
  console.log("selectedInterface", selectedInterface);
  return (
    <>
      <div style={{ display: "flex" }}>
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
                to="/information?filter=account"
                className={`inforNav__linkItem
              ${selectedInterface === "account" ? "active" : ""}`}
                onClick={() => setSelectedInterface("account")}
              >
                <SvgAccount color="#626262" />
                <p>Thông tin tài khoản</p>
              </Link>
            </div>
          </div>
        </div>
        {selectedInterface === "posts" && <PersonalPosts />}
        {selectedInterface === "groups" && <SchoolFllow />}
        {selectedInterface === "friends" && <Friends />}
        {selectedInterface === "information" && <Information />}
        {selectedInterface === "account" && <Account />}
      </div>
    </>
  );
};

export default InforUser;
