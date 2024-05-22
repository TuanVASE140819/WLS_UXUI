import React, { useEffect, useState } from "react";
import Ads from "../../components/ads/Ads";
import "./forum.scss";
import SideBarMessage from "../../components/sideBarMessage/SideBarMessage";
import { Link } from "react-router-dom";
import Popup from "../../components/Popup/popup";

const Forum = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinClick = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBarMessage />
        <div className="forum">
          <div className="forum__wrapper">
            <div className="forum__cards">
              <div className="forum__item">
                <div className="forum__top">
                  <figure className="forum__image">
                    <img
                      src={require("../../assets/images/forum-1.png")}
                      alt=""
                    />
                  </figure>
                  <div className="forum__text">
                    <h2>Diễn đàn hội nhóm đời sống</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse{" "}
                    </p>
                  </div>
                </div>
                <div className="forum__bottom">
                  <div className="forum__users">
                    <div className="forum__userImg">
                      <img
                        src={require("../../assets/images/userforum1.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum2.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum3.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum4.png")}
                        alt=""
                      />
                    </div>
                    <div className="forum__views">
                      <span>1.244</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#545454"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.5 15.94c.712.206 1.448.31 2.188.31a7.782 7.782 0 003.434-.793 3.437 3.437 0 00-6.277-2.078m.656 2.561v-.002c0-.928-.239-1.8-.656-2.559m.656 2.561v.088A10.264 10.264 0 017.188 17.5c-1.943 0-3.76-.538-5.312-1.472l-.001-.09a5.312 5.312 0 019.97-2.559m-1.844-8.066a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0zm6.875 1.875a2.187 2.187 0 11-4.375 0 2.187 2.187 0 014.375 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    {showPopup && (
                      <Popup
                        onClose={() => setShowPopup(false)}
                        isOpen={showPopup}
                        info={{
                          title:
                            "Yêu cầu tham gia nhóm của bạn đang chờ phê duyệt",
                          subTitle:
                            "Hãy xác nhận câu trả lời những câu hỏi sau",
                          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
                        }}
                      />
                    )}
                  </div>
                  <button
                    to="/forum-detail"
                    className="forum__btn"
                    onClick={handleJoinClick}
                  >
                    Tham gia
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="forum__item">
                <div className="forum__top">
                  <figure className="forum__image">
                    <img
                      src={require("../../assets/images/forum-1.png")}
                      alt=""
                    />
                  </figure>
                  <div className="forum__text">
                    <h2>Diễn đàn hội nhóm đời sống</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse{" "}
                    </p>
                  </div>
                </div>
                <div className="forum__bottom">
                  <div className="forum__users">
                    <div className="forum__userImg">
                      <img
                        src={require("../../assets/images/userforum1.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum2.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum3.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum4.png")}
                        alt=""
                      />
                    </div>
                    <div className="forum__views">
                      <span>1.244</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#545454"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.5 15.94c.712.206 1.448.31 2.188.31a7.782 7.782 0 003.434-.793 3.437 3.437 0 00-6.277-2.078m.656 2.561v-.002c0-.928-.239-1.8-.656-2.559m.656 2.561v.088A10.264 10.264 0 017.188 17.5c-1.943 0-3.76-.538-5.312-1.472l-.001-.09a5.312 5.312 0 019.97-2.559m-1.844-8.066a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0zm6.875 1.875a2.187 2.187 0 11-4.375 0 2.187 2.187 0 014.375 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <button
                    to="/forum-detail"
                    className="forum__btn"
                    onClick={handleJoinClick}
                  >
                    Tham gia
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="forum__item">
                <div className="forum__top">
                  <figure className="forum__image">
                    <img
                      src={require("../../assets/images/forum-1.png")}
                      alt=""
                    />
                  </figure>
                  <div className="forum__text">
                    <h2>Diễn đàn hội nhóm đời sống</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse{" "}
                    </p>
                  </div>
                </div>
                <div className="forum__bottom">
                  <div className="forum__users">
                    <div className="forum__userImg">
                      <img
                        src={require("../../assets/images/userforum1.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum2.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum3.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum4.png")}
                        alt=""
                      />
                    </div>
                    <div className="forum__views">
                      <span>1.244</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#545454"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.5 15.94c.712.206 1.448.31 2.188.31a7.782 7.782 0 003.434-.793 3.437 3.437 0 00-6.277-2.078m.656 2.561v-.002c0-.928-.239-1.8-.656-2.559m.656 2.561v.088A10.264 10.264 0 017.188 17.5c-1.943 0-3.76-.538-5.312-1.472l-.001-.09a5.312 5.312 0 019.97-2.559m-1.844-8.066a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0zm6.875 1.875a2.187 2.187 0 11-4.375 0 2.187 2.187 0 014.375 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <button
                    to="/forum-detail"
                    className="forum__btn"
                    onClick={handleJoinClick}
                  >
                    Tham gia
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="forum__item">
                <div className="forum__top">
                  <figure className="forum__image">
                    <img
                      src={require("../../assets/images/forum-1.png")}
                      alt=""
                    />
                  </figure>
                  <div className="forum__text">
                    <h2>Diễn đàn hội nhóm đời sống</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse{" "}
                    </p>
                  </div>
                </div>
                <div className="forum__bottom">
                  <div className="forum__users">
                    <div className="forum__userImg">
                      <img
                        src={require("../../assets/images/userforum1.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum2.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum3.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum4.png")}
                        alt=""
                      />
                    </div>
                    <div className="forum__views">
                      <span>1.244</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#545454"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.5 15.94c.712.206 1.448.31 2.188.31a7.782 7.782 0 003.434-.793 3.437 3.437 0 00-6.277-2.078m.656 2.561v-.002c0-.928-.239-1.8-.656-2.559m.656 2.561v.088A10.264 10.264 0 017.188 17.5c-1.943 0-3.76-.538-5.312-1.472l-.001-.09a5.312 5.312 0 019.97-2.559m-1.844-8.066a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0zm6.875 1.875a2.187 2.187 0 11-4.375 0 2.187 2.187 0 014.375 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <button
                    to="/forum-detail"
                    className="forum__btn"
                    onClick={handleJoinClick}
                  >
                    Tham gia
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="forum__item">
                <div className="forum__top">
                  <figure className="forum__image">
                    <img
                      src={require("../../assets/images/forum-1.png")}
                      alt=""
                    />
                  </figure>
                  <div className="forum__text">
                    <h2>Diễn đàn hội nhóm đời sống</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse{" "}
                    </p>
                  </div>
                </div>
                <div className="forum__bottom">
                  <div className="forum__users">
                    <div className="forum__userImg">
                      <img
                        src={require("../../assets/images/userforum1.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum2.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum3.png")}
                        alt=""
                      />
                      <img
                        src={require("../../assets/images/userforum4.png")}
                        alt=""
                      />
                    </div>
                    <div className="forum__views">
                      <span>1.244</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#545454"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.5 15.94c.712.206 1.448.31 2.188.31a7.782 7.782 0 003.434-.793 3.437 3.437 0 00-6.277-2.078m.656 2.561v-.002c0-.928-.239-1.8-.656-2.559m.656 2.561v.088A10.264 10.264 0 017.188 17.5c-1.943 0-3.76-.538-5.312-1.472l-.001-.09a5.312 5.312 0 019.97-2.559m-1.844-8.066a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0zm6.875 1.875a2.187 2.187 0 11-4.375 0 2.187 2.187 0 014.375 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <button
                    to="/forum-detail"
                    className="forum__btn"
                    onClick={handleJoinClick}
                  >
                    Tham gia
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="forum__btnContainer">
                <div className="forum__btn alt">Trang tiếp theo</div>
              </div>
            </div>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default Forum;
