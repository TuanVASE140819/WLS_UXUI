import React, { useContext, useState } from "react";
import "./Account.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const Account = () => {
  const [open2, setOpen2] = useState(true);

  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <div className="inforform">
      <div className="inforform__wrapper">
        <div className="inforUser__bottom">
          <div className="inforUser__info">
            <div
              className="inforUser__infoHeader"
              onClick={() => setOpen2(!open2)}
            >
              <h4>Thông tin tài khoản</h4>
              <svg
                className={`${open2 ? "active" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="16"
                fill="none"
                viewBox="0 0 9 16"
              >
                <g clipPath="url(#clip0_131_425)">
                  <path
                    stroke="#424242"
                    strokeMiterlimit="10"
                    d="M.74 15.257l7.37-7.37L.98.746"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_131_425">
                    <path
                      fill="#fff"
                      d="M0 0H15.21V8.43H0z"
                      transform="rotate(-90 7.999 7.608)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <form className={`inforUser__form ${open2 ? "active" : ""}`}>
              <div className="inforUser__inputWrapper">
                <div className="inforUser__input">
                  <label>Tên đăng nhập</label>
                  <input type="text" defaultValue="hoasociu" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_277_303)">
                      <path
                        stroke="#505050"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.539 2.804l1.054-1.055a1.172 1.172 0 011.658 1.658l-8.981 8.98c-.33.33-.738.573-1.186.707l-1.678.5.5-1.678c.134-.448.376-.856.706-1.186l7.927-7.926h0zm0 0l1.649 1.65"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_277_303">
                        <path fill="#fff" d="M0 0H15V15H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="inforUser__input">
                  <label>Mật khẩu</label>
                  <input type="text" defaultValue="****************" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_277_303)">
                      <path
                        stroke="#505050"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.539 2.804l1.054-1.055a1.172 1.172 0 011.658 1.658l-8.981 8.98c-.33.33-.738.573-1.186.707l-1.678.5.5-1.678c.134-.448.376-.856.706-1.186l7.927-7.926h0zm0 0l1.649 1.65"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_277_303">
                        <path fill="#fff" d="M0 0H15V15H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="inforUser__inputWrapper">
                <div className="inforUser__input">
                  <label>Số điện thoại đăng kí</label>
                  <input type="text" defaultValue="0354646871" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_277_303)">
                      <path
                        stroke="#505050"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.539 2.804l1.054-1.055a1.172 1.172 0 011.658 1.658l-8.981 8.98c-.33.33-.738.573-1.186.707l-1.678.5.5-1.678c.134-.448.376-.856.706-1.186l7.927-7.926h0zm0 0l1.649 1.65"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_277_303">
                        <path fill="#fff" d="M0 0H15V15H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="inforUser__input">
                  <label>Bảo mật cấp 2</label>
                  <input type="text" defaultValue="hoaho9x@gmail.com" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_277_303)">
                      <path
                        stroke="#505050"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.539 2.804l1.054-1.055a1.172 1.172 0 011.658 1.658l-8.981 8.98c-.33.33-.738.573-1.186.707l-1.678.5.5-1.678c.134-.448.376-.856.706-1.186l7.927-7.926h0zm0 0l1.649 1.65"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_277_303">
                        <path fill="#fff" d="M0 0H15V15H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
