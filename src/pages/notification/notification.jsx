import React, { useState } from "react";
import AdsGroup from "../../components/adsGroup/Ads";
import SideBar from "../../components/sideBar/SideBar";
import "./notification.scss";
import { Link } from "react-router-dom";
import Ads from "../../components/ads/Ads";

const notification = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    type: "school",
    content: "Tuấn Cùi: đã viết một bài viết lên trường Đại học FPT:",
    subContent: "Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang Dang Dở...",
    time: "1 giờ trước",
    status: "unread",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    type: "nhiemvu",
    content: "Tuấn Cùi: đã viết một bài viết lên trường Đại học FPT:",
    subContent: "Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang Dang Dở...",
    time: "1 giờ trước",
    status: "read",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=2",
    type: "nhiemvu",
    content: "Tuấn Cùi: đã viết một bài viết lên trường Đại học FPT:",
    subContent: "Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang Dang Dở...",
    time: "1 giờ trước",
    status: "unread",
  },
];

const Notification = () => {
  const [filter, setFilter] = useState("all"); // state to hold the filter value

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="notification">
          <button
            className={
              `notification__filter-button ` +
              (filter === "all" ? "active" : "")
            }
            onClick={() => handleFilterChange("all")}
          >
            Tất cả thông báo
          </button>
          <button
            className={
              `notification__filter-button ` +
              (filter === "school" ? "active" : "")
            }
            onClick={() => handleFilterChange("school")}
          >
            Trường
          </button>
          <button
            className={
              `notification__filter-button ` +
              (filter === "nhiemvu" ? "active" : "")
            }
            onClick={() => handleFilterChange("nhiemvu")}
          >
            Nhiêm vụ
          </button>

          <div className="notification__wrapper">
            {notification
              .filter((item) => filter === "all" || item.type === filter)
              .map((item) => (
                <div key={item.id} className="notification__item">
                  <div className="notification__content-wrapper">
                    <div className="notification__avatar">
                      <img
                        className="notification__avatar-img"
                        src={item.avatar}
                        alt="avatar"
                      />
                    </div>

                    <div className="notification__info">
                      <div className="notification__type">
                        {item.type === "school" ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.875 0C0.839 0 0 0.84 0 1.875V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15V1.875C15 0.839 14.16 0 13.125 0H1.875ZM9.75 6.75C9.55109 6.75 9.36032 6.82902 9.21967 6.96967C9.07902 7.11032 9 7.30109 9 7.5C9 7.69891 9.07902 7.88968 9.21967 8.03033C9.36032 8.17098 9.55109 8.25 9.75 8.25H11.25C11.4489 8.25 11.6397 8.17098 11.7803 8.03033C11.921 7.88968 12 7.69891 12 7.5C12 7.30109 11.921 7.11032 11.7803 6.96967C11.6397 6.82902 11.4489 6.75 11.25 6.75H9.75ZM9 4.5C9 4.30109 9.07902 4.11032 9.21967 3.96967C9.36032 3.82902 9.55109 3.75 9.75 3.75H11.25C11.4489 3.75 11.6397 3.82902 11.7803 3.96967C11.921 4.11032 12 4.30109 12 4.5C12 4.69891 11.921 4.88968 11.7803 5.03033C11.6397 5.17098 11.4489 5.25 11.25 5.25H9.75C9.55109 5.25 9.36032 5.17098 9.21967 5.03033C9.07902 4.88968 9 4.69891 9 4.5ZM3.75 9.75C3.55109 9.75 3.36032 9.82902 3.21967 9.96967C3.07902 10.1103 3 10.3011 3 10.5C3 10.6989 3.07902 10.8897 3.21967 11.0303C3.36032 11.171 3.55109 11.25 3.75 11.25H11.25C11.4489 11.25 11.6397 11.171 11.7803 11.0303C11.921 10.8897 12 10.6989 12 10.5C12 10.3011 11.921 10.1103 11.7803 9.96967C11.6397 9.82902 11.4489 9.75 11.25 9.75H3.75ZM3 13.5C3 13.3011 3.07902 13.1103 3.21967 12.9697C3.36032 12.829 3.55109 12.75 3.75 12.75H11.25C11.4489 12.75 11.6397 12.829 11.7803 12.9697C11.921 13.1103 12 13.3011 12 13.5C12 13.6989 11.921 13.8897 11.7803 14.0303C11.6397 14.171 11.4489 14.25 11.25 14.25H3.75C3.55109 14.25 3.36032 14.171 3.21967 14.0303C3.07902 13.8897 3 13.6989 3 13.5ZM3.75 3.75C3.55109 3.75 3.36032 3.82902 3.21967 3.96967C3.07902 4.11032 3 4.30109 3 4.5V7.5C3 7.914 3.336 8.25 3.75 8.25H6.75C6.94891 8.25 7.13968 8.17098 7.28033 8.03033C7.42098 7.88968 7.5 7.69891 7.5 7.5V4.5C7.5 4.30109 7.42098 4.11032 7.28033 3.96967C7.13968 3.82902 6.94891 3.75 6.75 3.75H3.75Z"
                              fill="#0487D9"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.395 17.9101L9.388 17.9071L9.366 17.8951C9.23729 17.8243 9.10961 17.7516 8.983 17.6771C7.46081 16.7726 6.03827 15.71 4.739 14.5071C2.438 12.3601 0 9.17407 0 5.25007C0 2.32207 2.464 7.09512e-05 5.438 7.09512e-05C6.26475 -0.00397847 7.08178 0.178412 7.82832 0.533676C8.57486 0.888941 9.2317 1.40794 9.75 2.05207C10.2684 1.40781 10.9254 0.888729 11.6721 0.533459C12.4189 0.178188 13.2361 -0.00412905 14.063 7.09512e-05C17.036 7.09512e-05 19.5 2.32207 19.5 5.25007C19.5 9.17507 17.062 12.3611 14.761 14.5061C13.4617 15.709 12.0392 16.7716 10.517 17.6761C10.3904 17.7509 10.2627 17.8239 10.134 17.8951L10.112 17.9071L10.105 17.9111L10.102 17.9121C9.99356 17.9695 9.87271 17.9995 9.75 17.9995C9.62729 17.9995 9.50644 17.9695 9.398 17.9121L9.395 17.9101Z"
                              fill="#0487D9"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="notification__content">
                        <div className="notification__content">
                          {item.content}
                        </div>
                        <div className="notification__sub-content">
                          {item.subContent}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notification__time-status">
                    <div className="notification__time">{item.time}</div>
                    <div
                      className={`notification__status ${
                        item.status === "unread" ? "unread" : ""
                      }`}
                    >
                      {item.status === "unread" ? "Xem" : "Đã xem"}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default Notification;
