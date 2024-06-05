import React, { useContext } from "react";
import "./schoolFollow.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const SchoolFollow = () => {
  return (
    <div className="schools">
      <div className="schools__wrapper">
        <h3 className="schools__titleHeader">Hội nhóminformation </h3>
        <div className="schools__comboItem">
          <div className="schools__item">
            <figure className="schools__image">
              <img
                src={require("../../assets/images/card-1.png")}
                alt=""
                style={{
                  width: "76px",
                  height: "76px",
                }}
              />
            </figure>
            <div className="schools__itemContent">
              <div className="schools__title">ĐẠI HỌC RMIT</div>
              <div className="schools__ratingsViews">
                <div className="schools__ratingsUsers">
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
                <div className="schools__ratingsStars">
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
            </div>
            <div className="schools__btns">
              <div className="schools__itemContent">
                <div className="schools__comboButton">
                  <Link to="/schoolDetail" className="schools__btnView">
                    Xem trường
                  </Link>
                </div>
                <div className="schools__btnSubCombo">
                  <div className="schools__btnFollow">
                    <h3>Đã Follow</h3>
                  </div>

                  <div className="schools__btnDot">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75 12C6.75 12.1989 6.67098 12.3897 6.53033 12.5303C6.38968 12.671 6.19891 12.75 6 12.75C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25C6.19891 11.25 6.38968 11.329 6.53033 11.4697C6.67098 11.6103 6.75 11.8011 6.75 12ZM12.75 12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12ZM18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75C17.8011 12.75 17.6103 12.671 17.4697 12.5303C17.329 12.3897 17.25 12.1989 17.25 12C17.25 11.8011 17.329 11.6103 17.4697 11.4697C17.6103 11.329 17.8011 11.25 18 11.25C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12Z"
                        stroke="#767676"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="schools__comboItem">
          <div className="schools__item">
            <figure className="schools__image">
              <img
                src={require("../../assets/images/card-1.png")}
                alt=""
                style={{
                  width: "76px",
                  height: "76px",
                }}
              />
            </figure>
            <div className="schools__itemContent">
              <div className="schools__title">ĐẠI HỌC RMIT</div>
              <div className="schools__ratingsViews">
                <div className="schools__ratingsUsers">
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
                <div className="schools__ratingsStars">
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
            </div>
            <div className="schools__btns">
              <div className="schools__itemContent">
                <div className="schools__comboButton">
                  <Link to="/schoolDetail" className="schools__btnView">
                    Xem trường
                  </Link>
                </div>
                <div className="schools__btnSubCombo">
                  <div className="schools__btnFollow">
                    <h3>Đã Follow</h3>
                  </div>

                  <div className="schools__btnDot">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75 12C6.75 12.1989 6.67098 12.3897 6.53033 12.5303C6.38968 12.671 6.19891 12.75 6 12.75C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25C6.19891 11.25 6.38968 11.329 6.53033 11.4697C6.67098 11.6103 6.75 11.8011 6.75 12ZM12.75 12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12ZM18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75C17.8011 12.75 17.6103 12.671 17.4697 12.5303C17.329 12.3897 17.25 12.1989 17.25 12C17.25 11.8011 17.329 11.6103 17.4697 11.4697C17.6103 11.329 17.8011 11.25 18 11.25C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12Z"
                        stroke="#767676"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDfetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
          <div className="schools__subGroup">
            <div>Rmit và những con bot</div>
            <div className="schools__links">
              <span>
                <Link to="/forum-detail" className="schools__link">
                  Xem nhóm
                </Link>
              </span>
              <span>
                <Link to="/schoolDetail" className="schools__bntOut">
                  Rời
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolFollow;
