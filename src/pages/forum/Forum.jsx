import React, { useEffect, useState } from "react";
import Ads from "../../components/ads/Ads";
import "./forum.scss";
import SideBarMessage from "../../components/sideBarMessage/SideBarMessage";
import { Link } from "react-router-dom";
import Popup from "../../components/Popup/popup";
import SideBar from "../../components/sideBar/SideBar";

const Forum = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinClick = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="forum">
          <div className="schoolDetail__cardsWrapper">
            <div className="schoolDetail__card">
              <figure className="schoolDetail__image">
                <img src={require("../../assets/images/card-1.png")} alt="" />
              </figure>
              <h4>
                Khoa Công nghệ thông tin - AI có gì vui với thế giới chúng ta
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
                <button onClick={handleJoinClick}>
                  <img
                    className="schoolDetail__iconArrow"
                    src={require("../../assets/images/arrow-right.png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <Link to="/forum-detail">
              <div className="schoolDetail__card">
                <figure className="schoolDetail__image">
                  <img src={require("../../assets/images/card-2.png")} alt="" />
                </figure>
                <h4>
                  Khoa Quan hệ công chúng - Hướng dẫn PR đẳng cấp như Thái Công
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

                  {/* <img
                    className="schoolDetail__iconArrow"
                    src={require("../../assets/images/arrow-right.png")}
                    alt=""
                  /> */}
                </div>
              </div>
            </Link>

            <div className="schoolDetail__card">
              <figure className="schoolDetail__image">
                <img src={require("../../assets/images/card-3.png")} alt="" />
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
            </div>
            <div className="schoolDetail__card">
              <figure className="schoolDetail__image">
                <img src={require("../../assets/images/card-3.png")} alt="" />
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
            </div>
            <div className="schoolDetail__card">
              <figure className="schoolDetail__image">
                <img src={require("../../assets/images/card-3.png")} alt="" />
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
            </div>
            <div className="schoolDetail__card">
              <figure className="schoolDetail__image">
                <img src={require("../../assets/images/card-3.png")} alt="" />
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
            </div>
          </div>
          <div>
            {showPopup && (
              <Popup
                onClose={() => setShowPopup(false)}
                isOpen={showPopup}
                info={{
                  title: "Yêu cầu tham gia nhóm của bạn đang chờ phê duyệt",
                  subTitle: "Hãy xác nhận câu trả lời những câu hỏi sau",
                  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
                }}
              />
            )}
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default Forum;
