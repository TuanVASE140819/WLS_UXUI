import React, { useContext } from "react";
import "./cards.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from  "../../SearchContext";
const Cards = () => {
  const { searchValue } = useContext(SearchContext);
  console.log('searchValue', searchValue) // 'RMIT
  return (
    <div className="cards">
      <div className="cards__wrapper">
        <SearchBar />
        <div className="cards__items">
          <div className="cards__item">
            <figure className="cards__image">
              <img src={require("../../assets/images/cards-1.png")} alt="" />
            </figure>
            <div className="cards__itemContent">
              <div className="cards__title">ĐẠI HỌC RMIT</div>
              <div className="cards__ratingsViews">
                <div className="cards__ratingsUsers">
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
                <div className="cards__ratingsStars">
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
              <div className="cards__btns">
                <Link to="/schoolDetail" className="cards__btnView">
                  Xem trường
                </Link>
                <div className="cards__btnPopup">
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
                  <div className="cards__popup">
                    <Link to="/schoolDetail">Chia sẻ</Link>
                    <Link to="/schoolDetail">Báo cáo</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
