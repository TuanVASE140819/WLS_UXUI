import React, { useContext } from "react";
import "./coinHistory.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const CoinHistory = () => {
  const { searchValue } = useContext(SearchContext);
  return (
    <div className="giftList">
      <div className="giftList__wrapper">
        <div className="giftList__items">
          <div className="giftList__item">
            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">Hoàn thành nhiệm vụ mời bạn</div>
            </div>

            <div className="giftList__point">
              +20
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.43883 0.808344C8.83083 -0.134031 10.1678 -0.134031 10.5598 0.808344L12.3816 5.18859L17.1101 5.56834C18.1286 5.64972 18.5416 6.92022 17.7655 7.58522L14.1631 10.6713L15.263 15.2852C15.5001 16.2792 14.4195 17.0641 13.548 16.5321L9.49933 14.0593L5.45071 16.5321C4.57921 17.0641 3.49858 16.2783 3.73571 15.2852L4.83558 10.6713L1.23321 7.58522C0.457081 6.92022 0.870081 5.64972 1.88858 5.56834L6.61708 5.18859L8.43883 0.808344Z"
                  fill="#FCAA17"
                />
              </svg>
            </div>
          </div>
          <div className="giftList__item">
            <div className="giftList__body">
              <Link to="/gift-detail" className="giftList__brand">
                Đã đổi ngày 21/5/2024
              </Link>
              <div className="giftList__name">Hoàn thành nhiệm vụ mời bạn</div>
            </div>

            <div className="giftList__point--minus">
              -200
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.43883 0.808344C8.83083 -0.134031 10.1678 -0.134031 10.5598 0.808344L12.3816 5.18859L17.1101 5.56834C18.1286 5.64972 18.5416 6.92022 17.7655 7.58522L14.1631 10.6713L15.263 15.2852C15.5001 16.2792 14.4195 17.0641 13.548 16.5321L9.49933 14.0593L5.45071 16.5321C4.57921 17.0641 3.49858 16.2783 3.73571 15.2852L4.83558 10.6713L1.23321 7.58522C0.457081 6.92022 0.870081 5.64972 1.88858 5.56834L6.61708 5.18859L8.43883 0.808344Z"
                  fill="#FCAA17"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinHistory;
