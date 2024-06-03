import React, { useContext, useState } from "react";
import "./information.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const Information = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);

  const [openIndex, setOpenIndex] = useState(null);
  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <div className="friends">
      <div className="friends__wrapper">
        <div className="inforUser__bottom">
          <div className="inforUser__info">
            <div
              className="inforUser__infoHeader"
              onClick={() => setOpen(!open)}
            >
              <h4>Thông tin cá nhân</h4>
              <svg
                className={`${open ? "active" : ""}`}
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
            <form className={`inforUser__form ${open ? "active" : ""}`}>
              <div className="inforUser__inputWrapper">
                <div className="inforUser__input">
                  <label>Tên</label>
                  <input type="text" defaultValue="Hoà" />
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
                  <label>Họ</label>
                  <input type="text" defaultValue="Hồ" />
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
                  <label>Bí danh</label>
                  <input type="text" defaultValue="9x" />
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
                  <label>Tên</label>
                  <input type="text" defaultValue="Hoà" />
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
                  <label>Email</label>
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
              <div className="inforUser__input">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  defaultValue="98 Phạm Thái Bường, Tân Phong, Quận 7, TP. Hồ Chí Minh"
                />
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
                <label>Trường cấp 1</label>
                <input type="text" defaultValue="Trường TH Tam Phước 2" />
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
                <label>Trường cấp 2</label>
                <input type="text" defaultValue="Trường THCS Hòa Bình" />
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
                <label>Trường cấp 3</label>
                <input
                  type="text"
                  defaultValue="Trường TH-THCS-THPT Trịnh Hoài Đức"
                />
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
                <label>Đại học</label>
                <input
                  type="text"
                  defaultValue="Trường Đại học Tôn Đức Thắng"
                />
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
              <div className="inforUser__btnWrapper">
                <button className="inforUser__btn">Lưu</button>
              </div>
            </form>
          </div>
          <div className="inforUser__info">
            <div
              className="inforUser__infoHeader"
              onClick={() => setOpen2(!open2)}
            >
              <h4>Thông tin liên hệ để nhận quà</h4>
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
              <div className="inforUser__input">
                <label>Số điện thoại</label>
                <input type="text" defaultValue="01699242645" />
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
                <label>Địa chỉ</label>
                <input
                  type="text"
                  defaultValue="98 Phạm Thái Bường, Tân Phong, Quận 7, TP. Hồ Chí Minh"
                />
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

              <div className="inforUser__btnWrapper">
                <button className="inforUser__btn">Lưu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
