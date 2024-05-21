import React, { useContext } from "react";
import "./listGift.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const Exchange = () => {
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
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__status">
                <span className="giftList__status--title">
                  Tình trạng giao hàng{" "}
                </span>
                <span className="giftList__status--done">Đã xác nhận</span>
              </div>
            </div>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_2.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__status">
                <span className="giftList__status--title">
                  Tình trạng giao hàng{" "}
                </span>
                <span className="giftList__status--waiting">Chưa xác nhận</span>
              </div>
            </div>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_3.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__status">
                <span className="giftList__status--title">
                  Tình trạng giao hàng{" "}
                </span>
                <span className="giftList__status--waiting">Chưa xác nhận</span>
              </div>
            </div>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_4.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__status">
                <span className="giftList__status--title">
                  Tình trạng giao hàng{" "}
                </span>
                <span className="giftList__status--waiting">Chưa xác nhận</span>
              </div>
            </div>
          </div>
          <div className="giftList__item">
            <img
              src={require("../../assets/images/gift_5.png")}
              alt=""
              className="giftList__image"
            />

            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">
                Thanh Lăn Nâng Cơ, Cải Thiện Nếp Nhăn Vùng Cổ Guasha Neck Cream
                50ML
              </div>
              <div className="giftList__status">
                <span className="giftList__status--title">
                  Tình trạng giao hàng{" "}
                </span>
                <span className="giftList__status--waiting">Chưa xác nhận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
