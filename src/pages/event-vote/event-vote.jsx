import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./event-vote.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const EventVote = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Helmet
          title="Events"
          meta={[
            {
              name: "description",
              content: "Tin tức mới nhất về các sự kiện âm nhạc, âm nhạc", // Description
            },
            {
              name: "keywords",
              content:
                "Tin tức, sự kiện âm nhạc, âm nhạc, blackpink, lời mời đặc biệt, chọn 1 trong 3 nước để biểu diễn, Hàn Quốc, Việt Nam, Trung Quốc, Campuchia, Thái Lan, Lào, Philipin", // Keywords
            },
          ]}
        />

        <SideBarEvents />
        <div className="eventVote">
          <div className="eventVote__wrapper">
            <Link to="/events">
              <button className="eventVote__filter-button">
                Tất cả sự kiện
              </button>
            </Link>

            <div className="eventVote__bg">
              <div className="eventVote__content">
                <div className="eventVote__header">
                  <img
                    src={require("../../assets/images/black-pink.png")}
                    alt=""
                  />
                </div>
                <div className="eventVote__gridUsers">
                  <figure className="eventVote__user">
                    <img
                      src={require("../../assets/images/user-lissa.png")}
                      alt=""
                    />
                    Lissa
                  </figure>
                  <figure className="eventVote__user">
                    <img
                      src={require("../../assets/images/user-jisso.png")}
                      alt=""
                    />
                    Jisso
                  </figure>
                  <figure className="eventVote__user">
                    <img
                      src={require("../../assets/images/user-jenni.png")}
                      alt=""
                    />
                    Jenni
                  </figure>
                  <figure className="eventVote__user">
                    <img
                      src={require("../../assets/images/user-rose.png")}
                      alt=""
                    />
                    Rose
                  </figure>
                </div>
                <div className="eventVote__title">
                  Lời Mời Đặc Biệt cho Blackpink: Chọn 1 Trong 3 Nước Để Biểu
                  Diễn
                </div>
                <p className="eventVote__desc">
                  Chúng tôi, đại diện cho một số quốc gia đam mê âm nhạc trên
                  thế giới, đang rất háo hức gửi đến các bạn một lời mời đặc
                  biệt. Trải qua những thành công ngoạn mục và sức ảnh hưởng
                  không ngừng tăng của mình, Blackpink đã trở thành biểu tượng
                  toàn cầu trong ngành công nghiệp giải trí
                </p>
              </div>
              <div className="eventVote__bottom">
                <div className="eventVote__countDown">
                  <div className="eventVote__timer">
                    <div className="eventVote__number">10</div>
                    <p>Ngày</p>
                  </div>
                  <div className="eventVote__timer">
                    <div className="eventVote__number">01</div>
                    <p>Giờ</p>
                  </div>
                  <div className="eventVote__timer">
                    <div className="eventVote__number">34</div>
                    <p>Phút</p>
                  </div>
                  <div className="eventVote__timer">
                    <div className="eventVote__number">04</div>
                    <p>Giây</p>
                  </div>
                </div>
                <div className="eventVote__btn">Bình chọn</div>
              </div>
            </div>
            <div className="eventVote__ratings">
              <div className="eventVote__ratingsTitle">
                Sức hút của Blackpink
                <span>thông qua cuộc tham gia các nước thời điểm hiện tại</span>
              </div>
              <div className="eventVote__ratingsHeader">
                <p>Stt</p>
                <p>Quốc gia</p>
                <p>Lượt bình chọn</p>
              </div>

              <div className="eventVote__lists">
                <div className="eventVote__item">
                  <div className="eventVote__itemNumber">1</div>
                  <div className="eventVote__logoText">
                    <img
                      src={require("../../assets/logos/logo-vn.png")}
                      alt=""
                    />
                    Việt Nam
                  </div>
                  <div className="eventVote__asideNumber">
                    1.405.1020
                    <span>
                      14%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        fill="none"
                        viewBox="0 0 9 8"
                      >
                        <path
                          fill="#00D115"
                          d="M3.634.5a1 1 0 011.732 0l3.031 5.25a1 1 0 01-.866 1.5H1.47a1 1 0 01-.866-1.5L3.634.5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="eventVote__item">
                  <div className="eventVote__itemNumber">2</div>
                  <div className="eventVote__logoText">
                    <img
                      src={require("../../assets/logos/logo-cp.png")}
                      alt=""
                    />
                    Campuchia
                  </div>
                  <div className="eventVote__asideNumber">
                    1.405.1020
                    <span>
                      14%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        fill="none"
                        viewBox="0 0 9 8"
                      >
                        <path
                          fill="#00D115"
                          d="M3.634.5a1 1 0 011.732 0l3.031 5.25a1 1 0 01-.866 1.5H1.47a1 1 0 01-.866-1.5L3.634.5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="eventVote__item">
                  <div className="eventVote__itemNumber">3</div>
                  <div className="eventVote__logoText">
                    <img
                      src={require("../../assets/logos/logo-tl.png")}
                      alt=""
                    />
                    Thái Lan
                  </div>
                  <div className="eventVote__asideNumber">
                    1.405.1020
                    <span>
                      14%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        fill="none"
                        viewBox="0 0 9 8"
                      >
                        <path
                          fill="#00D115"
                          d="M3.634.5a1 1 0 011.732 0l3.031 5.25a1 1 0 01-.866 1.5H1.47a1 1 0 01-.866-1.5L3.634.5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="eventVote__item">
                  <div className="eventVote__itemNumber">4</div>
                  <div className="eventVote__logoText">
                    <img
                      src={require("../../assets/logos/logo-cn.png")}
                      alt=""
                    />
                    Trung Quốc
                  </div>
                  <div className="eventVote__asideNumber">
                    1.405.1020
                    <span>
                      14%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        fill="none"
                        viewBox="0 0 9 8"
                      >
                        <path
                          fill="#00D115"
                          d="M3.634.5a1 1 0 011.732 0l3.031 5.25a1 1 0 01-.866 1.5H1.47a1 1 0 01-.866-1.5L3.634.5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="eventVote__item">
                  <div className="eventVote__itemNumber">5</div>
                  <div className="eventVote__logoText">
                    <img
                      src={require("../../assets/logos/logo-lao.png")}
                      alt=""
                    />
                    Lào
                  </div>
                  <div className="eventVote__asideNumber">
                    1.405.1020
                    <span>
                      14%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        fill="none"
                        viewBox="0 0 9 8"
                      >
                        <path
                          fill="#00D115"
                          d="M3.634.5a1 1 0 011.732 0l3.031 5.25a1 1 0 01-.866 1.5H1.47a1 1 0 01-.866-1.5L3.634.5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="eventVote__item">
                  <div className="eventVote__itemNumber">6</div>
                  <div className="eventVote__logoText">
                    <img
                      src={require("../../assets/logos/logo-philip.png")}
                      alt=""
                    />
                    Philiphin
                  </div>
                  <div className="eventVote__asideNumber">
                    1.405.1020
                    <span>
                      14%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="8"
                        fill="none"
                        viewBox="0 0 9 8"
                      >
                        <path
                          fill="#00D115"
                          d="M3.634.5a1 1 0 011.732 0l3.031 5.25a1 1 0 01-.866 1.5H1.47a1 1 0 01-.866-1.5L3.634.5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default EventVote;
