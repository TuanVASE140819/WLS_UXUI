import React, { useContext } from "react";
import "./historyGift.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const HistoryGift = () => {
  const { searchValue } = useContext(SearchContext);
  return (
    <div className="historyGift">
      <div className="historyGift__wrapper">
        <div className="historyGift__items">
          <div className="historyGift__item">
            <div className="historyGift__body">
              <Link to="/gift-detail" className="historyGift__brand">
                16:25 21/5/2024
              </Link>
              <div className="historyGift__name">
                Bạn đã nhận được 1 chai lăn cổ CKD qua VÒNG QUAY MAY MẮN
              </div>
            </div>

            <div className="historyGift__point">
              <img
                src={require("../../assets/images/history_2.png")}
                alt="coin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryGift;
