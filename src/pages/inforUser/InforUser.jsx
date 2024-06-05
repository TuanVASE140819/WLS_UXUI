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
import Chat from "../../components/chat/Chat";
import { SvgChat } from "../../components/svgs/Menu/SvgChat";
import { SvgWallet } from "../../components/svgs/Menu/SvgWallet";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HistoryTransaction from "../../components/HistoryTransaction/Transaction";
import Payments from "../../components/Payment/payment";
const InforUser = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("dataUser");
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload(); // refresh trang
  };
  const [selectedInterface, setSelectedInterface] = useState("chat");
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

                <div className="sideBarUser__textItems">
                  <div className="sideBarUser__textItem--1">
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
                  </div>

                  <div className="sideBarUser__textItem--2">
                    {" "}
                    <svg
                      width="28"
                      height="25"
                      viewBox="0 0 28 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1007_11091)">
                        <path
                          d="M17.3375 17.7385H10.6373C8.07191 17.7385 5.99219 15.6364 5.99219 13.0435V7.63696C5.99219 5.04405 8.07191 2.94202 10.6373 2.94202H17.3375C19.9029 2.94202 21.9826 5.04405 21.9826 7.63696V13.0435C21.9831 15.6364 19.9029 17.7385 17.3375 17.7385Z"
                          fill="#FCAA17"
                        />
                        <path
                          d="M24.3786 6.44649C24.2758 9.72884 23.6755 12.8944 22.1774 15.8401C20.5056 19.127 17.9695 21.43 14.5095 22.6722C14.1664 22.7954 13.8484 22.7936 13.5039 22.6698C9.49524 21.23 6.81883 18.4117 5.21609 14.4884C4.31329 12.2797 3.83859 9.96897 3.69467 7.58755C3.66086 7.02834 3.66269 6.46681 3.63162 5.90713C3.60009 5.34052 3.84361 4.9794 4.34436 4.72681C7.30084 3.2371 10.2555 1.74462 13.196 0.223041C13.7685 -0.0734233 14.2454 -0.0743468 14.817 0.221194C17.7113 1.71783 20.6171 3.19277 23.5316 4.64877C24.1324 4.94893 24.4554 5.3456 24.3809 6.03458C24.3663 6.17034 24.3786 6.30888 24.3786 6.44649ZM10.9897 14.5956C10.981 15.1285 11.4356 15.4208 11.8843 15.195C12.4645 14.9027 13.0374 14.5956 13.6053 14.2802C13.8804 14.1273 14.1321 14.1259 14.4063 14.2774C14.9477 14.5762 15.4982 14.8579 16.041 15.1543C16.2895 15.2901 16.5317 15.34 16.7766 15.1613C17.0347 14.9733 17.0521 14.711 17.0009 14.4219C16.8917 13.8082 16.8003 13.1908 16.6824 12.579C16.6263 12.2867 16.7048 12.0645 16.9104 11.865C17.3632 11.425 17.8091 10.9775 18.2601 10.5356C18.4597 10.3398 18.5908 10.1255 18.4944 9.83043C18.3994 9.53951 18.1746 9.43053 17.8982 9.39082C17.2874 9.30262 16.6774 9.20656 16.0657 9.1276C15.7691 9.08927 15.5645 8.95582 15.4333 8.67921C15.1624 8.10752 14.8741 7.54415 14.6018 6.97292C14.4784 6.71432 14.3053 6.53007 14.0088 6.53007C13.7123 6.53007 13.5396 6.7134 13.4167 6.97338C13.1553 7.5266 12.8748 8.07012 12.6162 8.62472C12.4732 8.93088 12.2603 9.09435 11.9217 9.13407C11.3196 9.20472 10.7206 9.304 10.1198 9.39082C9.8443 9.43053 9.61768 9.53582 9.52128 9.82766C9.42397 10.1223 9.55144 10.3352 9.75338 10.5314C10.1984 10.9646 10.6342 11.4074 11.0811 11.8383C11.3045 12.0539 11.3895 12.289 11.3278 12.6067C11.1967 13.2804 11.0957 13.9602 10.9897 14.5956Z"
                          fill="#0487D9"
                        />
                        <path
                          d="M23.3842 25C22.2375 23.8382 21.1222 22.7086 19.9805 21.5523C21.6796 20.0668 23.0014 18.2617 23.9754 16.24C25.3182 17.5972 26.6573 18.9506 27.9983 20.306C27.0238 20.6759 26.0118 21.0702 24.9911 21.4397C24.7394 21.5306 24.605 21.6692 24.5159 21.9199C24.1527 22.9414 23.7698 23.9559 23.3842 25Z"
                          fill="#0487D9"
                        />
                        <path
                          d="M8.03244 21.5528C6.88658 22.71 5.7695 23.8386 4.63278 24.9866C4.59623 24.8993 4.55374 24.8074 4.51856 24.7132C4.16996 23.774 3.81496 22.8365 3.48007 21.8922C3.39874 21.6622 3.2795 21.5325 3.05014 21.4489C2.11628 21.1104 1.18926 20.7521 0.259966 20.3997C0.164021 20.3632 0.0708167 20.3203 0 20.2907C1.33866 18.9382 2.67641 17.5865 4.02376 16.2257C5.00057 18.2404 6.31228 20.0534 8.03244 21.5528Z"
                          fill="#0487D9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1007_11091">
                          <rect width="28" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    9015
                  </div>
                </div>
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
              <Link
                to="/information?filter=transaction"
                onClick={() => setSelectedInterface("payment")}
              >
                <button className="sideBarUser__recharge">Nạp</button>
              </Link>
            </div>

            <div className="inforNav__links">
              <Link
                to="/information?filter=chat"
                className={`inforNav__linkItem ${
                  selectedInterface === "chat" ? "active" : ""
                }`}
                onClick={() => setSelectedInterface("chat")}
              >
                <SvgChat color="#626262" />

                <p>Trò chuyện</p>
              </Link>
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
              <div className="sidebar">
                <div
                  className={`inforNav__linkItem ${
                    selectedInterface === "account" ? "active" : ""
                  }`}
                  onClick={toggleSubMenu}
                >
                  <SvgWallet color="#626262" />
                  <p>Ví liên kết</p>
                  <div
                    style={{
                      marginLeft: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      itemAlign: "center",
                    }}
                  >
                    {isSubMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {isSubMenuOpen && (
                  <div className="submenu">
                    <Link
                      to="/information?filter=transaction"
                      className={`inforNav__linkItem ${
                        selectedInterface === "transaction" ? "active" : ""
                      }`}
                      style={{ marginLeft: "50px" }}
                      onClick={() => setSelectedInterface("payment")}
                    >
                      <p>Tài khoản ví</p>
                    </Link>
                    <Link
                      to="/information?filter=history"
                      className={`inforNav__linkItem ${
                        selectedInterface === "history" ? "active" : ""
                      }`}
                      style={{ marginLeft: "50px" }}
                      onClick={() => setSelectedInterface("history")}
                    >
                      <p>Lịch sử giao dịch</p>
                    </Link>
                  </div>
                )}
              </div>
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
            Quản lí bài viết
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
        {selectedInterface === "chat" && <Chat />}
        {selectedInterface === "posts" && <PersonalPosts />}
        {selectedInterface === "groups" && <SchoolFllow />}
        {selectedInterface === "friends" && <Friends />}
        {selectedInterface === "information" && <Information />}
        {selectedInterface === "account" && <Account />}
        {selectedInterface === "bankCard" && <Bank />}
        {selectedInterface === "payment" && <Payments />}
        {selectedInterface === "transaction" && <Bank />}
        {selectedInterface === "history" && <HistoryTransaction />}

        {selectedInterface !== "chat" && <Policy />}
      </div>
    </>
  );
};

export default InforUser;
