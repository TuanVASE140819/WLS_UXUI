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
import Exchange from "../../components/Gift/Exchanged";
import ExchangeHistory from "../exchangeHistory/exchangeHistory";
// import HistoryPage from "../../components/HistoryPage/Historypage";
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
              <Link
                to="/information?filter=payment"
                className={`inforNav__linkItem
              ${selectedInterface === "payment" ? "active" : ""}`}
                onClick={() => setSelectedInterface("payment")}
              >
                <SvgWallet color="#626262" />
                <p>Ví liên kết</p>
              </Link>

              <div className="sidebar">
                <div
                  className={`inforNav__linkItem ${
                    selectedInterface === "" ? "active" : ""
                  }`}
                  onClick={toggleSubMenu}
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1656_21979)">
                      <path
                        d="M7.68206 22.9998C7.42767 22.9998 7.17267 22.9998 6.91828 22.9998C6.88408 22.9872 6.85108 22.968 6.81568 22.9626C5.12251 22.6896 3.94773 21.3118 3.94533 19.6058C3.94293 17.8295 4.22372 16.0881 4.61312 14.3634C5.10571 12.1839 5.6457 10.0152 6.12629 7.83333C6.47128 6.26771 6.70348 4.68169 6.64168 3.07047C6.59908 1.97231 6.43348 0.905364 5.6283 0.0580461C5.6223 0.0508451 5.6283 0.0310424 5.6283 0.00103821C5.6847 0.00103821 5.7429 0.00103821 5.8005 0.00103821C9.62603 0.00103821 13.451 -0.00196221 17.2765 0.00223837C19.1869 0.00463871 20.6688 1.50605 20.6652 3.41971C20.6622 4.82391 20.5188 6.2167 20.2272 7.58669C19.8559 9.33354 19.4365 11.0696 19.0225 12.8068C18.6379 14.4222 18.2581 16.0377 18.0835 17.6921C18.0397 18.1074 18.0115 18.525 17.9743 18.9565C17.8741 18.9565 17.7847 18.9565 17.6959 18.9565C15.6073 18.9565 13.5188 18.9559 11.4302 18.9571C10.9526 18.9571 10.6934 19.2019 10.6634 19.6754C10.661 19.7126 10.6604 19.7504 10.6586 19.7876C10.5836 21.2722 9.57143 22.5198 8.13686 22.8936C7.98626 22.9332 7.83386 22.9644 7.68206 22.9998ZM13.4582 6.73878C14.8645 6.73878 16.2703 6.73698 17.6767 6.73998C17.9803 6.74058 18.2197 6.63556 18.3583 6.35892C18.5893 5.89686 18.2491 5.39279 17.7037 5.39219C15.7663 5.38979 13.8296 5.39099 11.8922 5.39099C11.0024 5.39099 10.112 5.39219 9.22224 5.39039C8.91564 5.38979 8.68345 5.5128 8.55385 5.79184C8.34085 6.25031 8.68165 6.73638 9.21804 6.73758C10.631 6.74058 12.0446 6.73878 13.4582 6.73878ZM12.9608 9.43375C13.1702 9.43375 13.3802 9.43375 13.5896 9.43375C14.7949 9.43375 15.9997 9.43555 17.2051 9.43255C17.5897 9.43135 17.8741 9.17992 17.9149 8.81987C17.9509 8.50122 17.7223 8.18378 17.3911 8.10637C17.2981 8.08476 17.1985 8.08656 17.1013 8.08656C14.3467 8.08536 11.5922 8.08596 8.83764 8.08596C8.77044 8.08596 8.70264 8.08236 8.63545 8.08956C8.12725 8.14297 7.85666 8.71485 8.14346 9.13551C8.29585 9.35874 8.51845 9.43555 8.78364 9.43495C10.1762 9.43195 11.5688 9.43375 12.9608 9.43375ZM11.678 14.8243C13.0766 14.8243 14.4757 14.8249 15.8743 14.8237C16.2169 14.8237 16.4617 14.6695 16.5691 14.394C16.7491 13.9314 16.4125 13.4783 15.8809 13.4777C13.3454 13.4759 10.8092 13.4771 8.27365 13.4771C7.98926 13.4771 7.70486 13.4723 7.42107 13.4789C7.12287 13.4861 6.90688 13.6331 6.79468 13.908C6.61048 14.3598 6.94468 14.8219 7.45947 14.8231C8.86524 14.8267 10.2716 14.8243 11.678 14.8243ZM12.3542 10.7815C10.955 10.7815 9.55583 10.7833 8.15665 10.7803C7.85246 10.7797 7.61366 10.8854 7.47507 11.1626C7.24407 11.6253 7.58426 12.1281 8.13205 12.1287C10.13 12.1311 12.128 12.1299 14.1254 12.1299C14.9257 12.1299 15.7267 12.1287 16.5271 12.1305C16.8229 12.1311 17.0521 12.0171 17.1859 11.7489C17.4169 11.2844 17.0779 10.7845 16.5295 10.7833C15.1375 10.7797 13.7462 10.7815 12.3542 10.7815Z"
                        fill="#626262"
                      />
                      <path
                        d="M11.1406 23.0001C11.7478 22.3616 12.2056 21.6367 12.4174 20.772C12.4528 20.6274 12.4828 20.4816 12.5224 20.3051C12.5962 20.3051 12.676 20.3051 12.7552 20.3051C15.9039 20.3051 19.0527 20.3063 22.2014 20.3027C22.5086 20.3021 22.7642 20.3783 22.9184 20.6634C23.0738 20.9502 22.991 21.2089 22.8206 21.4603C22.259 22.2896 21.4922 22.7985 20.4999 22.9593C20.4489 22.9677 20.4003 22.9863 20.3499 23.0001C17.2803 23.0001 14.2102 23.0001 11.1406 23.0001Z"
                        fill="#626262"
                      />
                      <path
                        d="M0 1.84305C0.172797 1.54961 0.313795 1.23097 0.523791 0.967532C1.20118 0.118414 2.37536 -0.205631 3.42054 0.135817C4.44712 0.471263 5.20011 1.429 5.26191 2.47794C5.26551 2.54275 5.26251 2.60816 5.26251 2.69637C5.16831 2.69637 5.08791 2.69637 5.00751 2.69637C3.63234 2.69637 2.25656 2.68617 0.881385 2.70237C0.469192 2.70777 0.173997 2.58056 0 2.2025C0 2.08249 0 1.96247 0 1.84305Z"
                        fill="#626262"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1656_21979">
                        <rect width="23" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>Lịch sử</p>
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
                      to="/information?filter=history-page"
                      className={`inforNav__linkItem ${
                        selectedInterface === "history-page" ? "active" : ""
                      }`}
                      style={{ marginLeft: "50px" }}
                      onClick={() => setSelectedInterface("history-page")}
                    >
                      <p>Lịch sử trang</p>
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
        {/* {selectedInterface === "payment" && <Bank />} */}
        {selectedInterface === "history-page" && <ExchangeHistory />}
        {selectedInterface === "history" && <HistoryTransaction />}
        {selectedInterface !== "chat" && <Policy />}
      </div>
    </>
  );
};

export default InforUser;
