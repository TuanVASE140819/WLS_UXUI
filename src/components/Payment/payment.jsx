import React, { useContext, useState } from "react";
import "./payment.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const Payments = () => {
  const [open2, setOpen2] = useState(true);

  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <div className="payments">
      <div className="payments__wrapper">
        <div className="payments__left">
          <h3 className="payments__leftHeader">Chọn phương thức thanh toán</h3>
          <div className="payments__leftContent">
            {/* choose payment */}
            <div className="payments__leftContent">
              {/* radio */}
              <div className="payments__radio">
                <div className="payments__choose">
                  <input
                    type="radio"
                    id="visa"
                    name="card"
                    value="visa"
                    defaultChecked
                  />
                  <label htmlFor="visa">
                    <p className="payment__card">Thẻ tín dụng / ghi nợ</p>
                  </label>
                </div>
                <label htmlFor="visa">
                  <img
                    src={require("../../assets/images/VISA.png")}
                    alt="visa"
                  />
                </label>
              </div>
              <div className="payments__radio">
                <div className="payments__choose">
                  <input
                    type="radio"
                    id="visa"
                    name="card"
                    value="visa"
                    defaultChecked
                  />
                  <label htmlFor="visa">
                    <p className="payment__card">Thẻ tín dụng / ghi nợ</p>
                  </label>
                </div>
                <label htmlFor="visa">
                  <div className="payments__googlePay">
                    <img
                      src={require("../../assets/images/google-pay.png")}
                      alt="googlepay"
                    />
                    <div className="payments__googlePay--content">
                      <p>Pay</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="payments__deleteTransaction">
            <p>X Hủy giao dịch</p>
          </div>
        </div>
        <div className="payments__right">
          <h3 className="payments__rightHeader">Thông tin đơn hàng</h3>

          <div className="payments__rightContent">
            <div className="payments__rightContentItem">
              <div className="payments__rightContentItem--unit">
                <p>Đơn vị chấp nhận thanh toán</p>
                <h3>GOOGLE PAY</h3>
              </div>
              <div className="payments__rightContentItem--orders">
                <p>Mã đơn hàng</p>
                <h3>NẠP 100 SAO</h3>
              </div>
            </div>

            <div className="payments__rightContentItem--total">
              <p>Số tiền thanh toán</p>
              <h4>100,000 VNĐ</h4>
            </div>
          </div>
          <button className="payments__rightContentItem--btn">NẠP</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
