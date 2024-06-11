import React, { useState } from "react";
import "./exchangeHistory.scss";
import { Link } from "react-router-dom";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";
import PersonalPosts from "../../components/Posts/PersonalPosts";
import ListGroup from "../../components/Gift/ListGift";
import Exchange from "../../components/Gift/Exchanged";
import CoinHistory from "../../components/coinHistory/CoinHistory";

const ExchangeHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState("exchange-history");

  console.log(selectedFilter);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="gift">
        <div className="exchange__wrapper">
          <Link to="/mission">
            <div className="gift__back">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.54455 1.64665C7.65574 1.7404 7.71819 1.86749 7.71819 1.99999C7.71819 2.13249 7.65574 2.25957 7.54455 2.35332L3.80788 5.49999H11.875C13.2922 5.49999 14.6514 5.97409 15.6536 6.81801C16.6557 7.66192 17.2187 8.80651 17.2187 9.99999C17.2187 11.1935 16.6557 12.3381 15.6536 13.182C14.6514 14.0259 13.2922 14.5 11.875 14.5H9.49997C9.34249 14.5 9.19147 14.4473 9.08012 14.3535C8.96877 14.2598 8.90622 14.1326 8.90622 14C8.90622 13.8674 8.96877 13.7402 9.08012 13.6464C9.19147 13.5527 9.34249 13.5 9.49997 13.5H11.875C12.4208 13.5 12.9612 13.4095 13.4655 13.2336C13.9698 13.0577 14.4279 12.7999 14.8139 12.4749C15.1998 12.1499 15.506 11.764 15.7148 11.3394C15.9237 10.9147 16.0312 10.4596 16.0312 9.99999C16.0312 9.54036 15.9237 9.08523 15.7148 8.66059C15.506 8.23596 15.1998 7.85012 14.8139 7.52511C14.4279 7.20011 13.9698 6.9423 13.4655 6.76641C12.9612 6.59052 12.4208 6.49999 11.875 6.49999H3.80788L7.54455 9.64665C7.60288 9.69243 7.64967 9.74763 7.68213 9.80896C7.71458 9.87029 7.73203 9.9365 7.73343 10.0036C7.73484 10.0708 7.72018 10.1375 7.69031 10.1997C7.66045 10.262 7.616 10.3185 7.55962 10.366C7.50324 10.4135 7.43608 10.4509 7.36215 10.4761C7.28822 10.5012 7.20903 10.5136 7.1293 10.5124C7.04958 10.5112 6.97096 10.4965 6.89812 10.4692C6.82529 10.4418 6.75974 10.4024 6.70538 10.3533L1.95538 6.35332C1.84419 6.25957 1.78174 6.13249 1.78174 5.99999C1.78174 5.86749 1.84419 5.7404 1.95538 5.64665L6.70538 1.64665C6.81671 1.55302 6.96762 1.50043 7.12497 1.50043C7.28231 1.50043 7.43322 1.55302 7.54455 1.64665Z"
                  fill="#0487D9"
                />
              </svg>
              Về lại trang nhiệm vụ
            </div>
          </Link>

          <div className="gift__filters">
            <Link
              className={`gift__button__history ${
                selectedFilter === "exchange-history" ? "active" : ""
              }`}
              to="/exchange-history/?filter=exchange-history"
              onClick={() => setSelectedFilter("exchange-history")}
            >
              Lịch sử đổi quà
            </Link>

            <Link
              className={`gift__button__history  ${
                selectedFilter === "coins-history" ? "active" : ""
              }`}
              to="/exchange-history/?filter=coins-history"
              onClick={() => setSelectedFilter("coins-history")}
            >
              Lịch sử xu
            </Link>
          </div>
        </div>

        {selectedFilter === "exchange-history" && <Exchange />}
        {selectedFilter === "coins-history" && <CoinHistory />}
      </div>

      <Ads />
    </div>
  );
};

export default ExchangeHistory;
