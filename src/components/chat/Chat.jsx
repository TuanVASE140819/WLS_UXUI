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
              <div className="chats_dot">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Policy />
    </>
  );
};

export default Chat;
