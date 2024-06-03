import React from "react";
import "./comments.scss";
import { SvgIconHeart } from "../svgs/Post/SvgIconHeart";
import { SvgComment } from "../svgs/Post/SvgComment";
import { SvgShare } from "../svgs/Post/SvgShare";
import { Link } from "react-router-dom";
export const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__wrapper">
        <div className="comments__write">
          <img src={require("../../assets/images/user.png")} alt="" />
          <textarea type="text" placeholder="Bạn viết gì đi..." />
          <div className="comments__btn">Post</div>
        </div>
        <div className="comments__posts">
          <div className="comments__top">
            <div>
              <img src={require("../../assets/images/user.png")} alt="" />
              <div className="comments__text">
                <h4>Hồ Lê Bảo Hân</h4>
                <p>2PM | 12/02/2022</p>
              </div>
            </div>
            <div className="comments__iconDot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="7"
                fill="none"
                viewBox="0 0 34 7"
              >
                <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                  <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_277_1070">
                    <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="comments__content">
            <h4>"Điểm Dừng Kỷ Niệm: Gặp Lại Bạn Học Cũ Trên Đường Đời"</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam laoreet dolore magna aliquam and bneem ándnd erat
              volutpat...
            </p>
            <span>... xem thêm</span>
          </div>
          <div className="comments__bottom">
            <div>
              <div className="comments__icon">
                <SvgIconHeart color="#D13D3D" />
                177
              </div>
              <div className="comments__icon">
                {/* #3D92D1 */}
                <SvgComment color="#3D92D1" />
                64
              </div>
              <div className="comments__icon">
                <SvgShare color="#4ABC96" />
                12
              </div>
            </div>
            <div className="comments__aside">
              3 bình luận
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#3D92D1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0111.186 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="comments__posts">
          <div className="comments__top">
            <div>
              <img src={require("../../assets/images/user.png")} alt="" />
              <div className="comments__text">
                <h4>Hồ Lê Bảo Hân</h4>
                <p>2PM | 12/02/2022</p>
              </div>
            </div>
            <div className="comments__iconDot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="7"
                fill="none"
                viewBox="0 0 34 7"
              >
                <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                  <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_277_1070">
                    <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="comments__content">
            <h4>"Điểm Dừng Kỷ Niệm: Gặp Lại Bạn Học Cũ Trên Đường Đời"</h4>
            <Link to="/detail-content">
              <img src={require("../../assets/images/postImg.png")} alt="" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam laoreet dolore magna aliquam and bneem ándnd erat
              volutpat...
            </p>
            <span>... xem thêm</span>
          </div>
          <div className="comments__bottom">
            <div>
              <div className="comments__icon">
                <SvgIconHeart color="#D13D3D" />
                177
              </div>
              <div className="comments__icon">
                <SvgComment color="#3D92D1" />
                64
              </div>
              <div className="comments__icon">
                <SvgShare color="#4ABC96" />
                12
              </div>
            </div>
            <div className="comments__aside">
              3 bình luận
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#3D92D1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0111.186 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="comments__commented">
            <div className="comments__top">
              <div>
                <img src={require("../../assets/images/user.png")} alt="" />
                <div className="comments__text">
                  <h4>Hồ Lê Bảo Hân</h4>
                  <p>2PM | 12/02/2022</p>
                </div>
              </div>
            </div>
            <div className="comments__content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat
            </div>
            <div className="comments__action">
              <div className="comments__actionBtn like">
                <SvgIconHeart color="#D13D3D" />
              </div>
              <div className="comments__actionBtn">Phản hồi</div>
            </div>
            <div className="comments__replies">
              <div className="comments__top">
                <div>
                  <img src={require("../../assets/images/user-1.png")} alt="" />
                  <div className="comments__text">
                    <h4>Hồ Lê Bảo Hân</h4>
                    <p>2PM | 12/02/2022</p>
                  </div>
                </div>
              </div>
              <div className="comments__content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat
              </div>
              <div className="comments__action">
                <div className="comments__actionBtn like">
                  <SvgIconHeart color="#D13D3D" />
                </div>
                <div className="comments__actionBtn">Phản hồi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
