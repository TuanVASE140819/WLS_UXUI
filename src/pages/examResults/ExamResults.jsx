import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./examResults.scss";

const ExamResults = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="SidbarGame">
          <div className="SidbarGame__wrapper">
            Thời gian
            <div className="SidbarGame__time">15:00</div>
          </div>
        </div>
        <div className="examResults">
          <div className="examResults__wrapper">
            <div className="quiz__header">
              <div className="quiz__header--wrapper">
                <div className="quiz__header--info">
                  <div className="quiz__header--content">
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        marginRight: "20px",
                      }}
                      src={require("../../assets/images/quiz.png")}
                      alt="quiz"
                    />
                    <div>
                      <div className="quiz__title">Hòa Hồ</div>
                      <div className="quiz__name">
                        Bài kiểm tra: <span> 15 phút</span>
                      </div>
                      <div className="quiz__time">
                        Thời gian: <span> 15 phút</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quiz__teacher">
                  <div className="quiz__point">
                    <div className="quiz__point--content">
                      <div className="quiz__title--point">Điểm thưởng</div>
                      <div className="quiz__title_point--content">9.0</div>
                    </div>
                  </div>

                  <div className="quiz__comment">
                    <div className="quiz__comment--content">
                      <div className="quiz__title--comment">Lời phê</div>
                      <div className="quiz__title--content">
                        Cháu ngoan bác Hồ{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="quiz__body">
              <div className="quiz__result">
                SỐ CÂU ĐÚNG:
                <span>18/20</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SidbarRule">
          <div className="SidbarRule__wrapper">
            <div className="SidbarRule__item">Chính sách điểm thưởng</div>
            <div className="SidbarRule__item">Chính sách đổi quà</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamResults;
