import React from "react";
import "./personalPosts.scss";

const personalPosts = () => {
  return (
    <div className="personalPosts">
      <div className="personalPosts__wrapper">
        <h3 className="friends__titleHeader">Quản lí bài viết </h3>
        <div className="personalPosts__posts">
          <div className="personalPosts__header">
            <div>
              <span>Đại học FPT</span>
            </div>
            <div className="personalPosts__aside">
              <div className="personalPosts__time">2PM | 12/12/2021</div>
              <div className="personalPosts__cancel">Yêu cầu gỡ bài</div>
            </div>
          </div>
          <div className="personalPosts__body">
            <div className="personalPosts__content">
              <h4>"Điểm Dừng Kỷ Niệm: Gặp Lại Bạn Học Cũ Trên Đường Đời"</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam laoreet dolore magna aliquam and
                bneem ándnd erat volutpat...
              </p>
              <span>... xem thêm</span>
            </div>
            <div className="personalPosts__bottom">
              <div>
                <div className="personalPosts__icon">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    ></path>
                  </svg>
                  177
                </div>
                <div className="personalPosts__icon">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785c.351.063.707.095 1.064.094 1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    ></path>
                  </svg>
                  64
                </div>
                <div className="personalPosts__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.21669 10.907C6.97455 10.4713 6.59459 10.1284 6.13646 9.93198C5.67832 9.7356 5.16794 9.69691 4.68544 9.82198C4.20293 9.94705 3.77562 10.2288 3.47057 10.623C3.16552 11.0172 3 11.5015 3 12C3 12.4985 3.16552 12.9828 3.47057 13.377C3.77562 13.7712 4.20293 14.053 4.68544 14.178C5.16794 14.3031 5.67832 14.2644 6.13646 14.068C6.59459 13.8716 6.97455 13.5287 7.21669 13.093M7.21669 10.907C7.39669 11.231 7.49969 11.603 7.49969 12C7.49969 12.397 7.39669 12.77 7.21669 13.093M7.21669 10.907L16.7827 5.593M7.21669 13.093L16.7827 18.407M16.7827 5.593C16.9229 5.85714 17.1144 6.09067 17.346 6.27993C17.5776 6.46919 17.8445 6.61039 18.1313 6.69528C18.4181 6.78016 18.7189 6.80702 19.0161 6.77429C19.3134 6.74156 19.6012 6.6499 19.8626 6.50466C20.124 6.35942 20.3539 6.16352 20.5387 5.92841C20.7236 5.69331 20.8597 5.42371 20.9391 5.13538C21.0185 4.84706 21.0397 4.54579 21.0013 4.2492C20.963 3.9526 20.8659 3.66663 20.7157 3.408C20.4198 2.89834 19.9357 2.52514 19.3675 2.36861C18.7993 2.21209 18.1924 2.28474 17.6772 2.57095C17.162 2.85717 16.7797 3.33409 16.6124 3.89919C16.4452 4.4643 16.5063 5.07248 16.7827 5.593ZM16.7827 18.407C16.6392 18.6654 16.5479 18.9495 16.5142 19.2431C16.4804 19.5368 16.5049 19.8342 16.5861 20.1184C16.6673 20.4026 16.8037 20.668 16.9875 20.8995C17.1712 21.1309 17.3988 21.324 17.6572 21.4675C17.9156 21.611 18.1997 21.7023 18.4933 21.736C18.787 21.7697 19.0844 21.7453 19.3685 21.6641C19.6527 21.5829 19.9182 21.4465 20.1496 21.2627C20.3811 21.0789 20.5742 20.8514 20.7177 20.593C21.0076 20.0712 21.0783 19.4556 20.9143 18.8816C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3214 17.2426 18.7058 17.1719 18.1318 17.3359C17.5579 17.4999 17.0726 17.8852 16.7827 18.407Z"
                      stroke="#3D92D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  12
                </div>
              </div>
              <div className="personalPosts__aside">
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
        </div>

        <div className="personalPosts__posts">
          <div className="personalPosts__header">
            <div>
              <span>Đại học FPT</span>
            </div>
            <div className="personalPosts__aside">
              <div className="personalPosts__time">2PM | 12/12/2021</div>
              <div className="personalPosts__cancel">Yêu cầu gỡ bài</div>
            </div>
          </div>
          <div className="personalPosts__body">
            <div className="personalPosts__content">
              <h4>"Điểm Dừng Kỷ Niệm: Gặp Lại Bạn Học Cũ Trên Đường Đời"</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam laoreet dolore magna aliquam and
                bneem ándnd erat volutpat...
              </p>
              <span>... xem thêm</span>
            </div>
            <div className="personalPosts__bottom">
              <div>
                <div className="personalPosts__icon">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    ></path>
                  </svg>
                  177
                </div>
                <div className="personalPosts__icon">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785c.351.063.707.095 1.064.094 1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    ></path>
                  </svg>
                  64
                </div>
                <div className="personalPosts__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.21669 10.907C6.97455 10.4713 6.59459 10.1284 6.13646 9.93198C5.67832 9.7356 5.16794 9.69691 4.68544 9.82198C4.20293 9.94705 3.77562 10.2288 3.47057 10.623C3.16552 11.0172 3 11.5015 3 12C3 12.4985 3.16552 12.9828 3.47057 13.377C3.77562 13.7712 4.20293 14.053 4.68544 14.178C5.16794 14.3031 5.67832 14.2644 6.13646 14.068C6.59459 13.8716 6.97455 13.5287 7.21669 13.093M7.21669 10.907C7.39669 11.231 7.49969 11.603 7.49969 12C7.49969 12.397 7.39669 12.77 7.21669 13.093M7.21669 10.907L16.7827 5.593M7.21669 13.093L16.7827 18.407M16.7827 5.593C16.9229 5.85714 17.1144 6.09067 17.346 6.27993C17.5776 6.46919 17.8445 6.61039 18.1313 6.69528C18.4181 6.78016 18.7189 6.80702 19.0161 6.77429C19.3134 6.74156 19.6012 6.6499 19.8626 6.50466C20.124 6.35942 20.3539 6.16352 20.5387 5.92841C20.7236 5.69331 20.8597 5.42371 20.9391 5.13538C21.0185 4.84706 21.0397 4.54579 21.0013 4.2492C20.963 3.9526 20.8659 3.66663 20.7157 3.408C20.4198 2.89834 19.9357 2.52514 19.3675 2.36861C18.7993 2.21209 18.1924 2.28474 17.6772 2.57095C17.162 2.85717 16.7797 3.33409 16.6124 3.89919C16.4452 4.4643 16.5063 5.07248 16.7827 5.593ZM16.7827 18.407C16.6392 18.6654 16.5479 18.9495 16.5142 19.2431C16.4804 19.5368 16.5049 19.8342 16.5861 20.1184C16.6673 20.4026 16.8037 20.668 16.9875 20.8995C17.1712 21.1309 17.3988 21.324 17.6572 21.4675C17.9156 21.611 18.1997 21.7023 18.4933 21.736C18.787 21.7697 19.0844 21.7453 19.3685 21.6641C19.6527 21.5829 19.9182 21.4465 20.1496 21.2627C20.3811 21.0789 20.5742 20.8514 20.7177 20.593C21.0076 20.0712 21.0783 19.4556 20.9143 18.8816C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3214 17.2426 18.7058 17.1719 18.1318 17.3359C17.5579 17.4999 17.0726 17.8852 16.7827 18.407Z"
                      stroke="#3D92D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  12
                </div>
              </div>
              <div className="personalPosts__aside">
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
        </div>

        <div className="personalPosts__posts">
          <div className="personalPosts__header">
            <div>
              <span>Đại học FPT</span>
            </div>
            <div className="personalPosts__aside">
              <div className="personalPosts__time">2PM | 12/12/2021</div>
              <div className="personalPosts__cancel">Yêu cầu gỡ bài</div>
            </div>
          </div>
          <div className="personalPosts__body">
            <div className="personalPosts__content">
              <h4>"Điểm Dừng Kỷ Niệm: Gặp Lại Bạn Học Cũ Trên Đường Đời"</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam laoreet dolore magna aliquam and
                bneem ándnd erat volutpat...
              </p>
              <span>... xem thêm</span>
            </div>
            <div className="personalPosts__bottom">
              <div>
                <div className="personalPosts__icon">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    ></path>
                  </svg>
                  177
                </div>
                <div className="personalPosts__icon">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785c.351.063.707.095 1.064.094 1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    ></path>
                  </svg>
                  64
                </div>
                <div className="personalPosts__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.21669 10.907C6.97455 10.4713 6.59459 10.1284 6.13646 9.93198C5.67832 9.7356 5.16794 9.69691 4.68544 9.82198C4.20293 9.94705 3.77562 10.2288 3.47057 10.623C3.16552 11.0172 3 11.5015 3 12C3 12.4985 3.16552 12.9828 3.47057 13.377C3.77562 13.7712 4.20293 14.053 4.68544 14.178C5.16794 14.3031 5.67832 14.2644 6.13646 14.068C6.59459 13.8716 6.97455 13.5287 7.21669 13.093M7.21669 10.907C7.39669 11.231 7.49969 11.603 7.49969 12C7.49969 12.397 7.39669 12.77 7.21669 13.093M7.21669 10.907L16.7827 5.593M7.21669 13.093L16.7827 18.407M16.7827 5.593C16.9229 5.85714 17.1144 6.09067 17.346 6.27993C17.5776 6.46919 17.8445 6.61039 18.1313 6.69528C18.4181 6.78016 18.7189 6.80702 19.0161 6.77429C19.3134 6.74156 19.6012 6.6499 19.8626 6.50466C20.124 6.35942 20.3539 6.16352 20.5387 5.92841C20.7236 5.69331 20.8597 5.42371 20.9391 5.13538C21.0185 4.84706 21.0397 4.54579 21.0013 4.2492C20.963 3.9526 20.8659 3.66663 20.7157 3.408C20.4198 2.89834 19.9357 2.52514 19.3675 2.36861C18.7993 2.21209 18.1924 2.28474 17.6772 2.57095C17.162 2.85717 16.7797 3.33409 16.6124 3.89919C16.4452 4.4643 16.5063 5.07248 16.7827 5.593ZM16.7827 18.407C16.6392 18.6654 16.5479 18.9495 16.5142 19.2431C16.4804 19.5368 16.5049 19.8342 16.5861 20.1184C16.6673 20.4026 16.8037 20.668 16.9875 20.8995C17.1712 21.1309 17.3988 21.324 17.6572 21.4675C17.9156 21.611 18.1997 21.7023 18.4933 21.736C18.787 21.7697 19.0844 21.7453 19.3685 21.6641C19.6527 21.5829 19.9182 21.4465 20.1496 21.2627C20.3811 21.0789 20.5742 20.8514 20.7177 20.593C21.0076 20.0712 21.0783 19.4556 20.9143 18.8816C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3214 17.2426 18.7058 17.1719 18.1318 17.3359C17.5579 17.4999 17.0726 17.8852 16.7827 18.407Z"
                      stroke="#3D92D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  12
                </div>
              </div>
              <div className="personalPosts__aside">
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
        </div>
      </div>
    </div>
  );
};

export default personalPosts;
