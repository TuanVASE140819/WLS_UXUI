import React, { useEffect, useState } from "react";
import "./searchResults.scss";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";

import { useLocation } from "react-router-dom";
import { getListSchool } from "../../api/apiServices";
import Paginate from "react-paginate";

import { Link } from "react-router-dom";
// import "./cardItemAlt.scss";
import { date } from "yup";
import { Helmet } from "react-helmet";
const SearchResults = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 20; // Số lượng sản phẩm trên mỗi trang
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const location = useLocation();
  const { province, district, ward, level, name } = location.state || {};
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải mới
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getListSchool(
          province || "",
          district || "",
          ward || "",
          level || "",
          name || "",
          currentPage + 1,
          productsPerPage
        );
        const responseData = response.data;
        const responsePaging = response.paging.totalItems;
        setData(responseData);
        const calculatedPageCount = Math.ceil(responsePaging / productsPerPage);
        setPageCount(calculatedPageCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage, province, district, ward]);

  console.log("data", data.data);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Helmet>
          <title>Search Results</title>
          <meta name="description" content="Search Results" />
          <meta name="keywords" content="Search Results" />
        </Helmet>
        <SideBar />
        <div className="cardItem">
          <div className="cardItem__wrapper">
            {/* nếu data rỗng thì hiển thị thông báo không tìm thấy trường */}
            {data === undefined || data.length === 0 ? (
              <>
                <div className="searchResults">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="71"
                    height="71"
                    fill="none"
                    viewBox="0 0 71 71"
                  >
                    <g clipPath="url(#clip0_321_1666)">
                      <path
                        fill="#F97821"
                        fillRule="evenodd"
                        d="M0 35.4C0 15.85 15.85 0 35.4 0c19.55 0 35.4 15.85 35.4 35.4 0 19.55-15.85 35.4-35.4 35.4C15.85 70.8 0 54.95 0 35.4zm35.4-13.62c1.5 0 2.72 1.22 2.72 2.72v13.62c0 1.5-1.22 2.72-2.72 2.72-1.5 0-2.72-1.22-2.72-2.72V24.51c0-1.51 1.22-2.73 2.72-2.73zm0 29.96c1.5 0 2.72-1.22 2.72-2.72 0-1.5-1.22-2.72-2.72-2.72-1.5 0-2.72 1.22-2.72 2.72 0 1.5 1.22 2.72 2.72 2.72z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_321_1666">
                        <path fill="#fff" d="M0 0H70.8V70.8H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <h2>Không tìm thấy trường</h2>
                  <p>
                    Thông tin có thể chưa đầy đủ , bạn có thể cập nhật thông tin
                    trường của mình <Link to="/">tại đây</Link>
                  </p>
                </div>
                {/*  đề xuất */}
                <div className="cardItem__suggestion">
                  {/* đề xuất trường */}
                  <div className="cardItem__suggestion--form">
                    <h3 className="cardItem__title">Đề xuất trường</h3>
                    <div className="cardItem__form">
                      <div className="cardItem__formItem__left">
                        <input
                          type="text"
                          placeholder="Tên trường"
                          className="cardItem__input"
                        />
                        <input
                          type="text"
                          placeholder="Địa chỉ"
                          className="cardItem__input"
                        />
                      </div>
                      <div className="cardItem__formItem__right">
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                          placeholder="Ghi chú chi tiết"
                          className="cardItem__input"
                        ></textarea>
                      </div>
                      <button className="cardItem__btn--suggestion">
                        Đề xuất
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cardItem__items">
                  <div className="cardItem__item">
                    <figure className="cardItem__image">
                      <img
                        src={require("../../assets/images/cards-1.png")}
                        alt=""
                      />
                    </figure>
                    <div className="cardItem__itemContent">
                      <div className="cardItem__title">ĐẠI HỌC RMIT</div>
                      <div className="cardItem__ratingsViews">
                        <div className="cardItem__ratingsUsers">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="none"
                            viewBox="0 0 22 22"
                          >
                            <path
                              stroke="#9E9E9E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                            ></path>
                          </svg>
                          <span>8815</span>
                        </div>
                        <div className="cardItem__ratingsStars">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="none"
                            viewBox="0 0 22 22"
                          >
                            <path
                              stroke="#9E9E9E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                            ></path>
                          </svg>
                          <span>1244</span>
                        </div>
                      </div>
                      <div className="cardItem__btns">
                        <Link to="/schoolDetail" className="cardItem__btnView">
                          Xem trường
                        </Link>
                        <div className="cardItem__btnPopup">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="4"
                            fill="none"
                            viewBox="0 0 16 4"
                          >
                            <path
                              stroke="#767676"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M2.75 2a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            ></path>
                          </svg>
                          <div className="cardItem__popup">
                            <Link to="/">Chia sẻ</Link>
                            <Link to="/">Báo cáo</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cardItem__item">
                    <figure className="cardItem__image">
                      <img
                        src={require("../../assets/images/cards-2.png")}
                        alt=""
                      />
                    </figure>
                    <div className="cardItem__itemContent">
                      <div className="cardItem__title">ĐẠI HỌC RMIT</div>
                      <div className="cardItem__ratingsViews">
                        <div className="cardItem__ratingsUsers">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="none"
                            viewBox="0 0 22 22"
                          >
                            <path
                              stroke="#9E9E9E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                            ></path>
                          </svg>
                          <span>8815</span>
                        </div>
                        <div className="cardItem__ratingsStars">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="none"
                            viewBox="0 0 22 22"
                          >
                            <path
                              stroke="#9E9E9E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                            ></path>
                          </svg>
                          <span>1244</span>
                        </div>
                      </div>
                      <div className="cardItem__btns">
                        <Link to="/schoolDetail" className="cardItem__btnView">
                          Xem trường
                        </Link>
                        <div className="cardItem__btnPopup">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="4"
                            fill="none"
                            viewBox="0 0 16 4"
                          >
                            <path
                              stroke="#767676"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M2.75 2a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            ></path>
                          </svg>
                          <div className="cardItem__popup">
                            <Link to="/">Chia sẻ</Link>
                            <Link to="/">Báo cáo</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="cardItem__items">
                  {data.map((item) => {
                    return (
                      <>
                        <div className="cardItem__item">
                          <figure className="cardItem__image">
                            <img
                              src={
                                item.avatar
                                  ? item.avatar
                                  : require("../../assets/images/cards-1.png")
                              }
                              alt=""
                            />
                          </figure>
                          <div className="cardItem__itemContent">
                            <div className="cardItem__title">{item.name}</div>
                            <div className="cardItem__ratingsViews">
                              <div className="cardItem__ratingsUsers">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="none"
                                  viewBox="0 0 22 22"
                                >
                                  <path
                                    stroke="#9E9E9E"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                                  ></path>
                                </svg>
                                <span>8815</span>
                              </div>
                              <div className="cardItem__ratingsStars">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="none"
                                  viewBox="0 0 22 22"
                                >
                                  <path
                                    stroke="#9E9E9E"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                                  ></path>
                                </svg>
                                <span>1244</span>
                              </div>
                            </div>
                            <div className="cardItem__btns">
                              <Link
                                to="/schoolDetail"
                                className="cardItem__btnView"
                              >
                                Xem trường
                              </Link>
                              <div className="cardItem__btnPopup">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="4"
                                  fill="none"
                                  viewBox="0 0 16 4"
                                >
                                  <path
                                    stroke="#767676"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M2.75 2a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  ></path>
                                </svg>
                                <div className="cardItem__popup">
                                  <Link to="/">Chia sẻ</Link>
                                  <Link to="/">Báo cáo</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <Paginate
                  pageCount={pageCount}
                  pageRangeDisplayed={5}
                  marginPagesDisplayed={2}
                  onPageChange={({ selected }) => {
                    setCurrentPage(selected);
                  }}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination__arrowPrev"}
                  nextLinkClassName={"pagination__arrowNext"}
                  disabledClassName={"disabled"}
                  activeClassName={"active"}
                />
              </>
            )}
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default SearchResults;
