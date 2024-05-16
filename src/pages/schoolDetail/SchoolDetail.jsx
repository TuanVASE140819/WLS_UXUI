import React from "react";
import Ads from "../../components/ads/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./schoolDetail.scss";
import { Link } from "react-router-dom";
import { Comments } from "../../components/comments/Comments";

const SchoolDetail = () => {
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
                      <Link to="/">Xem thành viên</Link>
                    </div>
                  </div>
                </div>
                <div className="schoolDetail__right">
                  <div className="schoolDetail__btn">Follow</div>
                  <Link className="schoolDetail__btn" to="/">
                    Bình chọn
                  </Link>
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
                <input type="text" placeholder="Nhập tên nhóm bạn muốn tìm" />
                <select name="" id="">
                  <option style={{ display: "none" }}>Niên khoá</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
                <div className="schoolDetail__btnSearch">Tìm kiếm</div>
              </div>
              <div className="schoolDetail__cardsWrapper">
                <Link to="/forum" className="schoolDetail__card">
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
                <Link to="/forum" className="schoolDetail__card">
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
                <Link to="/forum" className="schoolDetail__card">
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
        <Ads />
      </div>
    </>
  );
};

export default SchoolDetail;
