import React, { useContext, useState } from "react";
import "./Chat.scss";
import { Link } from "react-router-dom";

import SearchContext from "../../SearchContext";
import Policy from "../policy/policy";
const Chat = () => {
  const [open2, setOpen2] = useState(true);

  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <>
      <div className="chats">
        <div className="chats__wrapper">
          <div className="chats__body">
            <div className="chats__header">
              <div className="chats__infor">
                <img
                  src={require("../../assets/images/article-2.png")}
                  alt=""
                />

                <div className="infor_chat__name">
                  <h4>Nguyễn Văn A</h4>
                  <p>Online</p>
                </div>
              </div>
              <div className="chats__dot">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chats__right">
        <div className="chats__right__wrapper">
          <div className="chats__right__header">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="chats__right__search"
            />
            <div className="chats__right__setting">
              <i className="fas fa-cog"></i>
              {/* create */}
              <Link to="/create" className="chats__right__create">
                <i className="fas fa-plus"></i>
              </Link>
            </div>
          </div>
          <div className="chats__right__body">
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
