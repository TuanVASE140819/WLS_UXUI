import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./events.scss";

const Events = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBarEvents />
        <div className="events">
          <div className="events__wrapper">
            <div className="events__bg">
              <div className="events__content">
                <div className="events__header">
                  <img
                    src={require("../../assets/images/black-pink.png")}
                    alt=""
                  />
                </div>
                <div className="events__gridUsers">
                  <figure className="events__user">
                    <img
                      src={require("../../assets/images/user-lissa.png")}
                      alt=""
                    />
                    Lissa
                  </figure>
                  <figure className="events__user">
                    <img
                      src={require("../../assets/images/user-jisso.png")}
                      alt=""
                    />
                    Jisso
                  </figure>
                  <figure className="events__user">
                    <img
                      src={require("../../assets/images/user-jenni.png")}
                      alt=""
                    />
                    Jenni
                  </figure>
                  <figure className="events__user">
                    <img
                      src={require("../../assets/images/user-rose.png")}
                      alt=""
                    />
                    Rose
                  </figure>
                </div>
                <div className="events__title">
                  Lời Mời Đặc Biệt cho Blackpink: Chọn 1 Trong 3 Nước Để Biểu
                  Diễn
                </div>
                <p className="events__desc">
                  Chúng tôi, đại diện cho một số quốc gia đam mê âm nhạc trên
                  thế giới, đang rất háo hức gửi đến các bạn một lời mời đặc
                  biệt. Trải qua những thành công ngoạn mục và sức ảnh hưởng
                  không ngừng tăng của mình, Blackpink đã trở thành biểu tượng
                  toàn cầu trong ngành công nghiệp giải trí
                </p>
              </div>
              <div className="events__bottom">
                <div className="events__countDown">
                  <div className="events__timer">
                    <div className="events__number">10</div>
                    <p>Ngày</p>
                  </div>
                  <div className="events__timer">
                    <div className="events__number">01</div>
                    <p>Giờ</p>
                  </div>
                  <div className="events__timer">
                    <div className="events__number">34</div>
                    <p>Phút</p>
                  </div>
                  <div className="events__timer">
                    <div className="events__number">04</div>
                    <p>Giây</p>
                  </div>
                </div>
                <div className="events__btn">Bình chọn</div>
              </div>
            </div>
            <div className="events__ratings">
              <div className="events__ratingsTitle">
                Sức hút của Blackpink
                <span>thông qua cuộc tham gia các nước thời điểm hiện tại</span>
              </div>
              <div className="events__ratingsHeader">
                <p>Stt</p>
                <p>Quốc gia</p>
                <p>Lượt bình chọn</p>
              </div>

              <div className="events__lists">
                <div className="events__item">
                  <div className="events__itemNumber">1</div>
                  <div className="events__logoText">
                    <img
                      src={require("../../assets/logos/logo-vn.png")}
                      alt=""
                    />
                    Việt Nam
                  </div>
                  <div className="events__asideNumber">
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
                <div className="events__item">
                  <div className="events__itemNumber">2</div>
                  <div className="events__logoText">
                    <img
                      src={require("../../assets/logos/logo-cp.png")}
                      alt=""
                    />
                    Campuchia
                  </div>
                  <div className="events__asideNumber">
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
                <div className="events__item">
                  <div className="events__itemNumber">3</div>
                  <div className="events__logoText">
                    <img
                      src={require("../../assets/logos/logo-tl.png")}
                      alt=""
                    />
                    Thái Lan
                  </div>
                  <div className="events__asideNumber">
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
                <div className="events__item">
                  <div className="events__itemNumber">4</div>
                  <div className="events__logoText">
                    <img
                      src={require("../../assets/logos/logo-cn.png")}
                      alt=""
                    />
                    Trung Quốc
                  </div>
                  <div className="events__asideNumber">
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
                <div className="events__item">
                  <div className="events__itemNumber">5</div>
                  <div className="events__logoText">
                    <img
                      src={require("../../assets/logos/logo-lao.png")}
                      alt=""
                    />
                    Lào
                  </div>
                  <div className="events__asideNumber">
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
                <div className="events__item">
                  <div className="events__itemNumber">6</div>
                  <div className="events__logoText">
                    <img
                      src={require("../../assets/logos/logo-philip.png")}
                      alt=""
                    />
                    Philiphin
                  </div>
                  <div className="events__asideNumber">
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

export default Events;
