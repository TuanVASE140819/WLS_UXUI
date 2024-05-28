import React, { useContext } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
// import scss
import "./history.scss";

// data giả
const data = [
  {
    id: 1,
    logo: "https://via.placeholder.com/150",
    title: "Giao dịch thanh toán thành công",
    code: "#021560201",
    money: "100.000 VNĐ",
    date: "24/5/2024",
    time: "14:24",
    status: "success",
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/150",
    title: "Giao dịch thanh toán thành công",
    code: "#021560201",
    money: "100.000 VNĐ",
    date: "24/5/2024",
    time: "14:24",
    status: "success",
  },
  {
    id: 3,
    logo: "https://via.placeholder.com/150",
    title: "Giao dịch thanh toán thành công",
    code: "#021560201",
    money: "100.000 VNĐ",
    date: "24/5/2024",
    time: "14:24",
    status: "success",
  },
  {
    id: 4,
    logo: "https://via.placeholder.com/150",
    title: "Giao dịch không thành công",
    code: "#021560201",
    money: "100.000 VNĐ",
    date: "24/5/2024",
    time: "14:24",
    status: "fail",
  },
  {
    id: 5,
    logo: "https://via.placeholder.com/150",
    title: "Giao dịch không thành công",
    code: "#021560201",
    money: "100.000 VNĐ",
    date: "24/5/2024",
    time: "14:24",
    status: "fail",
  },
  {
    id: 6,
    logo: "https://via.placeholder.com/150",
    title: "Giao dịch không thành công",
    code: "#021560201",
    money: "100.000 VNĐ",
    date: "24/5/2024",
    time: "14:24",
    status: "fail",
  },
];
const HistoryTransaction = () => {
  return (
    <div className="historys">
      <div className="historys__wrapper">
        <h3 className="historys__titleHeader">Lịch sử giao dịch </h3>
      </div>
      <div className="historys__body">
        {data.map((item) => (
          <div className="historys__item">
            <div className="historys__item__content">
              <div className="historys__item__header">
                {/*  nếu status === success thì hiện thị ảnh thành công, ngược lại thì hiện thị ảnh thất bại */}
                {item.status === "success" ? (
                  <img
                    src={require("../../assets/images/transaction_succes.png")}
                    alt="logo"
                    className="historys__header__logo"
                    width={80}
                    height={80}
                  />
                ) : (
                  <img
                    src={require("../../assets/images/transaction_fail.png")}
                    alt="logo"
                    className="historys__header__logo"
                    width={80}
                    height={80}
                  />
                )}
              </div>
              <div className="historys__item__body">
                <h4>
                  <span
                    className={` ${
                      item.status === "success"
                        ? "historys__body__status--success"
                        : "historys__body__status--failed"
                    }`}
                  >
                    {item.title}{" "}
                  </span>
                </h4>
                <p>Mã giao dịch: #021560201</p>
                <p>Số tiền: 100.000 VNĐ</p>
              </div>
            </div>
            <div className="historys__item__time">
              <p>24/5/2024</p>
              <p>14:24</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTransaction;
