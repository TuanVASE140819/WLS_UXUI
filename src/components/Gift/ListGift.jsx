import React, { useContext } from "react";
import "./listGift.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const ListGroup = () => {
  const { searchValue } = useContext(SearchContext);
  return (
    <div className="giftList">
      <div className="giftList__wrapper">
        <div className="giftList__items">
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_1.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                ckdvietnam.com
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__point">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.6414 2.27369C7.95873 1.51082 9.04107 1.51082 9.3584 2.27369L10.8332 5.81961L14.661 6.12703C15.4855 6.1929 15.8198 7.2214 15.1915 7.75974L12.2753 10.258L13.1657 13.9931C13.3576 14.7977 12.4829 15.4331 11.7774 15.0024L8.4999 13.0007L5.22244 15.0024C4.51694 15.4331 3.64215 14.797 3.83411 13.9931L4.72448 10.258L1.80828 7.75974C1.17998 7.2214 1.51432 6.1929 2.33882 6.12703L6.16665 5.81961L7.6414 2.27369Z"
                    fill="#FCAA17"
                  />
                </svg>
                75
              </div>
            </div>

            <button className="giftList__btn">Đổi</button>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_2.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                ckdvietnam.com
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__point">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.6414 2.27369C7.95873 1.51082 9.04107 1.51082 9.3584 2.27369L10.8332 5.81961L14.661 6.12703C15.4855 6.1929 15.8198 7.2214 15.1915 7.75974L12.2753 10.258L13.1657 13.9931C13.3576 14.7977 12.4829 15.4331 11.7774 15.0024L8.4999 13.0007L5.22244 15.0024C4.51694 15.4331 3.64215 14.797 3.83411 13.9931L4.72448 10.258L1.80828 7.75974C1.17998 7.2214 1.51432 6.1929 2.33882 6.12703L6.16665 5.81961L7.6414 2.27369Z"
                    fill="#FCAA17"
                  />
                </svg>
                75
              </div>
            </div>

            <button className="giftList__btn">Đổi</button>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_3.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                ckdvietnam.com
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__point">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.6414 2.27369C7.95873 1.51082 9.04107 1.51082 9.3584 2.27369L10.8332 5.81961L14.661 6.12703C15.4855 6.1929 15.8198 7.2214 15.1915 7.75974L12.2753 10.258L13.1657 13.9931C13.3576 14.7977 12.4829 15.4331 11.7774 15.0024L8.4999 13.0007L5.22244 15.0024C4.51694 15.4331 3.64215 14.797 3.83411 13.9931L4.72448 10.258L1.80828 7.75974C1.17998 7.2214 1.51432 6.1929 2.33882 6.12703L6.16665 5.81961L7.6414 2.27369Z"
                    fill="#FCAA17"
                  />
                </svg>
                75
              </div>
            </div>

            <button className="giftList__btn">Đổi</button>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_4.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                ckdvietnam.com
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__point">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.6414 2.27369C7.95873 1.51082 9.04107 1.51082 9.3584 2.27369L10.8332 5.81961L14.661 6.12703C15.4855 6.1929 15.8198 7.2214 15.1915 7.75974L12.2753 10.258L13.1657 13.9931C13.3576 14.7977 12.4829 15.4331 11.7774 15.0024L8.4999 13.0007L5.22244 15.0024C4.51694 15.4331 3.64215 14.797 3.83411 13.9931L4.72448 10.258L1.80828 7.75974C1.17998 7.2214 1.51432 6.1929 2.33882 6.12703L6.16665 5.81961L7.6414 2.27369Z"
                    fill="#FCAA17"
                  />
                </svg>
                75
              </div>
            </div>

            <button className="giftList__btn">Đổi</button>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_5.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                ckdvietnam.com
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__point">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.6414 2.27369C7.95873 1.51082 9.04107 1.51082 9.3584 2.27369L10.8332 5.81961L14.661 6.12703C15.4855 6.1929 15.8198 7.2214 15.1915 7.75974L12.2753 10.258L13.1657 13.9931C13.3576 14.7977 12.4829 15.4331 11.7774 15.0024L8.4999 13.0007L5.22244 15.0024C4.51694 15.4331 3.64215 14.797 3.83411 13.9931L4.72448 10.258L1.80828 7.75974C1.17998 7.2214 1.51432 6.1929 2.33882 6.12703L6.16665 5.81961L7.6414 2.27369Z"
                    fill="#FCAA17"
                  />
                </svg>
                75
              </div>
            </div>

            <button className="giftList__btn">Đổi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGroup;
