import React, { useState } from "react";
import AdsGroup from "../../components/adsGroup/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./schoolDetail.scss";
import { Link } from "react-router-dom";
import { Comments } from "../../components/comments/Comments";
import PopupSuggest from "../../components/Popup/popup-suggest";
import PopupDonate from "../../components/Popup/popup-donate";

const SchoolDetail = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDonate, setShowPopupDonate] = useState(false);

  const handleJoinClick = () => {
    setShowPopup(!showPopup);
  };

  const handleDonateClick = () => {
    setShowPopupDonate(!showPopupDonate);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="schoolDetail">
          <div className="schoolDetail__wrapper">
            <div className="schoolDetail__header">
              <div className="schoolDetail__headerTop"></div>
              <div className="schoolDetail__headerBottom">
                <div className="schoolDetail__left">
                  <img
                    src={require("../../assets/images/logo-fpt2.png")}
                    alt=""
                  />
                  <div className="schoolDetail__text">
                    <h4>Trường đại học FPT Thành phố Hồ Chí Minh</h4>
                    <div>
                      <div className="schoolDetail__icon">
                        8815
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          fill="none"
                          viewBox="0 0 17 15"
                        >
                          <g fill="#A3A3A3" clipPath="url(#clip0_93_278)">
                            <path d="M5.56 14.68c-1.54 0-3.09-.02-4.63.01-.68.01-1.02-.59-.91-1.11.45-2.27 2.23-4.07 4.49-4.5A5.62 5.62 0 0110.93 13c.06.2.11.41.15.62.11.59-.26 1.05-.86 1.05-1.55.01-3.1.01-4.66.01zM5.551 7.7c-2.13 0-3.85-1.72-3.85-3.85A3.867 3.867 0 015.561 0c2.12 0 3.85 1.73 3.85 3.85a3.86 3.86 0 01-3.86 3.85zM12.39 8.98a2.985 2.985 0 01-2.98-3A2.983 2.983 0 0112.43 3c1.65.01 2.97 1.37 2.96 3.03-.01 1.63-1.36 2.96-3 2.95zM12.06 14.54c-.08-1.6-.6-3.01-1.66-4.22.51-.26 1.03-.41 1.58-.46 2.31-.2 4.3 1.29 4.8 3.56.16.71-.38 1.14-.91 1.13-1.19-.03-2.38-.01-3.57-.01h-.24z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_93_278">
                              <path fill="#fff" d="M0 0H16.81V14.69H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="schoolDetail__icon">
                        8815
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="15"
                          fill="none"
                          viewBox="0 0 16 15"
                        >
                          <g clipPath="url(#clip0_93_285)">
                            <path
                              fill="#A3A3A3"
                              d="M7.89 0l2.44 4.94 5.46.79-3.95 3.85.93 5.43-4.88-2.56-4.87 2.56.93-5.43L0 5.73l5.45-.79L7.89 0z"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_93_285">
                              <path fill="#fff" d="M0 0H15.79V15.01H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <Link className="schoolDetail__link" to="/menber">
                        Xem thành viên
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="schoolDetail__right">
                  <div className="schoolDetail__btn">Follow</div>
                  <Link className="schoolDetail__btn2" to="/">
                    Bình chọn
                  </Link>
                </div> */}
              </div>
              <div className="schoolDetail__bottom">
                <div className="schoolDetail__bottomLeft">
                  <div>
                    <button className="schoolDetail__btn">Follow</button>
                    <button
                      className="schoolDetail__btn_2"
                      onClick={handleDonateClick}
                    >
                      Tặng sao
                    </button>
                    <button className="schoolDetail__btn_3">Bình chọn</button>
                    <Link className="schoolDetail__link" to="/inviteFriends">
                      <button className="schoolDetail__btn_4">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.15625 5.04688C4.15625 4.18078 4.50031 3.35015 5.11273 2.73773C5.72515 2.12531 6.55578 1.78125 7.42188 1.78125C8.28797 1.78125 9.1186 2.12531 9.73102 2.73773C10.3434 3.35015 10.6875 4.18078 10.6875 5.04688C10.6875 5.91297 10.3434 6.7436 9.73102 7.35602C9.1186 7.96844 8.28797 8.3125 7.42188 8.3125C6.55578 8.3125 5.72515 7.96844 5.11273 7.35602C4.50031 6.7436 4.15625 5.91297 4.15625 5.04688ZM1.78125 15.1406C1.78125 13.6446 2.37553 12.2099 3.43335 11.1521C4.49117 10.0943 5.92589 9.5 7.42188 9.5C8.91786 9.5 10.3526 10.0943 11.4104 11.1521C12.4682 12.2099 13.0625 13.6446 13.0625 15.1406V15.143L13.0617 15.2372C13.06 15.3379 13.0328 15.4365 12.9825 15.5237C12.9322 15.611 12.8606 15.684 12.7743 15.736C11.1587 16.7089 9.30784 17.2216 7.42188 17.2188C5.46488 17.2188 3.63296 16.6773 2.07021 15.736C1.9838 15.6841 1.91201 15.6111 1.86159 15.5239C1.81118 15.4366 1.7838 15.338 1.78204 15.2372L1.78125 15.1406ZM14.8438 5.9375C14.8438 5.78003 14.7812 5.62901 14.6698 5.51766C14.5585 5.40631 14.4075 5.34375 14.25 5.34375C14.0925 5.34375 13.9415 5.40631 13.8302 5.51766C13.7188 5.62901 13.6562 5.78003 13.6562 5.9375V7.71875H11.875C11.7175 7.71875 11.5665 7.78131 11.4552 7.89266C11.3438 8.00401 11.2812 8.15503 11.2812 8.3125C11.2812 8.46997 11.3438 8.62099 11.4552 8.73234C11.5665 8.84369 11.7175 8.90625 11.875 8.90625H13.6562V10.6875C13.6562 10.845 13.7188 10.996 13.8302 11.1073C13.9415 11.2187 14.0925 11.2812 14.25 11.2812C14.4075 11.2812 14.5585 11.2187 14.6698 11.1073C14.7812 10.996 14.8438 10.845 14.8438 10.6875V8.90625H16.625C16.7825 8.90625 16.9335 8.84369 17.0448 8.73234C17.1562 8.62099 17.2188 8.46997 17.2188 8.3125C17.2188 8.15503 17.1562 8.00401 17.0448 7.89266C16.9335 7.78131 16.7825 7.71875 16.625 7.71875H14.8438V5.9375Z"
                            fill="white"
                          />
                        </svg>
                        Mời bạn bè
                      </button>
                    </Link>
                  </div>

                  <button className="schoolDetail__btn_share">
                    Chia sẽ:
                    <span>httpt//hoahoweloves...</span>
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3125 4.51902C10.3125 4.04593 10.115 3.Đ 9.76333 3.25769C9.41169 2.92316 8.93478 2.73523 8.4375 2.73523H3.75C3.25272 2.73523 2.77581 2.92316 2.42417 3.25769C2.07254 3.59222 1.875 4.04593 1.875 4.51902V8.97851C1.875 9.4516 2.07254 9.90532 2.42417 10.2398C2.77581 10.5744 3.25272 10.7623 3.75 10.7623V7.19472C3.75 6.48508 4.04632 5.80451 4.57376 5.30272C5.10121 4.80093 5.81658 4.51902 6.5625 4.51902H10.3125Z"
                        fill="#8F8F8F"
                      />
                      <path
                        d="M11.25 5.41089C11.7473 5.41089 12.2242 5.59882 12.5758 5.93335C12.9275 6.26788 13.125 6.72159 13.125 7.19468V11.6542C13.125 12.1273 12.9275 12.581 12.5758 12.9155C12.2242 13.25 11.7473 13.438 11.25 13.438H6.5625C6.06522 13.438 5.58831 13.25 5.23667 12.9155C4.88504 12.581 4.6875 12.1273 4.6875 11.6542V7.19468C4.6875 6.72159 4.88504 6.26788 5.23667 5.93335C5.58831 5.59882 6.06522 5.41089 6.5625 5.41089H11.25Z"
                        fill="#8F8F8F"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p>
              Trường Đại học FPT là một trong những cơ sở giáo dục hàng đầu tại
              Việt Nam, với sứ mệnh cung cấp môi trường học tập và nền tảng công
              nghệ tiên tiến cho sinh viên. Với hơn 20 năm hoạt động, trường đã
              xây dựng được uy tín vững chắc trong lĩnh vực đào tạo Công nghệ
              thông tin và các ngành liên quan
            </p>
            <blockquote>
              Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ
              Đức, TP. Hồ Chí Minh <br />
              028 7300 1866 <br />
              daihocfpt@fpt.edu.vn
            </blockquote>
            <div className="schoolDetail__cards">
              <div className="schoolDetail__btnWrapper">
                <div
                  className="schoolDetail__btnSuggest"
                  onClick={handleJoinClick}
                >
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
                      d="M10 0.25C4.615 0.25 0.25 4.615 0.25 10C0.25 15.385 4.615 19.75 10 19.75C15.385 19.75 19.75 15.385 19.75 10C19.75 4.615 15.385 0.25 10 0.25ZM10.75 7C10.75 6.80109 10.671 6.61032 10.5303 6.46967C10.3897 6.32902 10.1989 6.25 10 6.25C9.80109 6.25 9.61032 6.32902 9.46967 6.46967C9.32902 6.61032 9.25 6.80109 9.25 7V9.25H7C6.80109 9.25 6.61032 9.32902 6.46967 9.46967C6.32902 9.61032 6.25 9.80109 6.25 10C6.25 10.1989 6.32902 10.3897 6.46967 10.5303C6.61032 10.671 6.80109 10.75 7 10.75H9.25V13C9.25 13.1989 9.32902 13.3897 9.46967 13.5303C9.61032 13.671 9.80109 13.75 10 13.75C10.1989 13.75 10.3897 13.671 10.5303 13.5303C10.671 13.3897 10.75 13.1989 10.75 13V10.75H13C13.1989 10.75 13.3897 10.671 13.5303 10.5303C13.671 10.3897 13.75 10.1989 13.75 10C13.75 9.80109 13.671 9.61032 13.5303 9.46967C13.3897 9.32902 13.1989 9.25 13 9.25H10.75V7Z"
                      fill="#05AFF2"
                    />
                  </svg>
                  Đề xuất tạo nhóm
                </div>
                <Link to="/forum" className="schoolDetail__btnJoin">
                  <div>Xem tất cả nhóm</div>
                </Link>
              </div>

              <div className="schoolDetail__searchBar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="#646464"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.75 15.75l-3.897-3.898m0 0a5.625 5.625 0 10-7.955-7.955 5.625 5.625 0 007.955 7.955z"
                  ></path>
                </svg>
                <input
                  className="schoolDetail__searchBar__input"
                  type="text"
                  placeholder="Nhập tên nhóm bạn muốn tìm"
                />
                <select name="" id="">
                  <option style={{ display: "none" }}>Niên khoá</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>

                <div className="schoolDetail__btnSearch">Tìm kiếm</div>
                {showPopup && (
                  <PopupSuggest
                    onClose={() => setShowPopup(false)}
                    isOpen={showPopup}
                    info={{
                      title: "Trường đại học FPT",
                      subTitle: "Đề xuất tên group",
                    }}
                  />
                )}

                {showPopupDonate && (
                  <PopupDonate
                    onClose={() => setShowPopupDonate(false)}
                    isOpen={showPopupDonate}
                    info={{
                      title: "Chọn số sao tặng",
                      subTitle: "Số khác",
                    }}
                  />
                )}
              </div>
              <div className="schoolDetail__cardsWrapper">
                <Link to="/forum-detail" className="schoolDetail__card">
                  <figure className="schoolDetail__image">
                    <img
                      src={require("../../assets/images/card-1.png")}
                      alt=""
                    />
                  </figure>
                  <h4>
                    Khoa Công nghệ thông tin - AI có gì vui với thế giới chúng
                    ta
                  </h4>
                  <div className="schoolDetail__cardBottom">
                    <div>
                      <img
                        src={require("../../assets/logos/logo-fpt.png")}
                        alt=""
                      />
                      <div className="schoolDetail__cardText">
                        <h5>FPT</h5>
                        <p>Niên khóa K23</p>
                      </div>
                    </div>
                    <div>
                      <img
                        className="schoolDetail__iconArrow"
                        src={require("../../assets/images/arrow-right.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/forum-detail" className="schoolDetail__card">
                  <figure className="schoolDetail__image">
                    <img
                      src={require("../../assets/images/card-2.png")}
                      alt=""
                    />
                  </figure>
                  <h4>
                    Khoa Quan hệ công chúng - Hướng dẫn PR đẳng cấp như Thái
                    Công
                  </h4>
                  <div className="schoolDetail__cardBottom">
                    <div>
                      <img
                        src={require("../../assets/logos/logo-fpt.png")}
                        alt=""
                      />
                      <div className="schoolDetail__cardText">
                        <h5>FPT</h5>
                        <p>Niên khóa K23</p>
                      </div>
                    </div>
                    <div>
                      <img
                        className="schoolDetail__iconArrow"
                        src={require("../../assets/images/arrow-right.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/forum-detail" className="schoolDetail__card">
                  <figure className="schoolDetail__image">
                    <img
                      src={require("../../assets/images/card-3.png")}
                      alt=""
                    />
                  </figure>
                  <h4>
                    Khoa Quản trị kinh doanh - Một năm bán được bao nhiêu gói mè
                  </h4>
                  <div className="schoolDetail__cardBottom">
                    <div>
                      <img
                        src={require("../../assets/logos/logo-fpt.png")}
                        alt=""
                      />
                      <div className="schoolDetail__cardText">
                        <h5>FPT</h5>
                        <p>Niên khóa K23</p>
                      </div>
                    </div>
                    <div>
                      <img
                        className="schoolDetail__iconArrow"
                        src={require("../../assets/images/arrow-right.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Comments />
          </div>
        </div>
        <AdsGroup />
      </div>
    </>
  );
};

export default SchoolDetail;
