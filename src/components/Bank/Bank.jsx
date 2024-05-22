import React, { useContext, useState } from "react";
import "./Bank.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const Bank = () => {
  const [open2, setOpen2] = useState(true);

  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <div className="bankform">
      <div className="bankform__wrapper">
        <div className="inforUser__bottom">
          <div className="inforUser__info">
            <div
              className="inforUser__infoHeader"
              // onClick={() => setOpen2(!open2)}
            >
              <h4>Thanh toán bằng thẻ</h4>
            </div>
            <form className={`inforUser__form ${open2 ? "active" : ""}`}>
              <div className="inforCard">
                <div className="inforCard__title">Thẻ của bạn</div>
                {/* combo radio */}
                <div className="inforCard__combo">
                  <div className="inforCard__radio">
                    <input
                      type="radio"
                      id="visa"
                      name="card"
                      value="visa"
                      defaultChecked
                    />
                    <label htmlFor="visa">
                      <p className="inforCard__card">01412420420</p>
                    </label>
                    <span>|</span>
                    <label htmlFor="visa">
                      <p className="inforCard__card">Visa</p>
                    </label>

                    <div className="inforCard__delete">Xóa</div>
                  </div>
                  <div className="inforCard__radio">
                    <input
                      type="radio"
                      id="visa"
                      name="card"
                      value="visa"
                      defaultChecked
                    />
                    <label htmlFor="visa">
                      <p className="inforCard__card">01412420420</p>
                    </label>
                    <span>|</span>
                    <label htmlFor="visa">
                      <p className="inforCard__card">Visa</p>
                    </label>

                    <div className="inforCard__delete">Xóa</div>
                  </div>
                </div>
              </div>
              {/* grid */}
              <div className="inforCard__grid">
                <div className="inforCard__input">
                  <div className="inforCard__title">Thêm thẻ mới</div>
                  <div className="inforCard__inputWrapper">
                    <div className="inforCard__title-input">Email</div>
                    <input
                      type="text"
                      placeholder="Nhập Email"
                      className="inforCard__input--name"
                    />
                  </div>
                  <div className="inforCard__inputWrapper">
                    <div className="inforCard__title-input">Thẻ thông tin</div>
                    <input
                      type="text"
                      placeholder="Nhập số thẻ"
                      className="inforCard__input--name"
                    />
                    <div className="inforCard__input--date">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="inforCard__input--name"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="inforCard__input--name"
                      />
                    </div>
                  </div>
                  <div className="inforCard__inputWrapper">
                    <div className="inforCard__title-input">
                      Quốc gia hoặc khu vực
                    </div>
                    {/* select */}
                    <select
                      name="country"
                      id="country"
                      className="inforCard__input--name"
                    >
                      <option value="vn">Việt Nam</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Mã Zip"
                      className="inforCard__input--name"
                    />
                  </div>
                  <button className="inforCard__button">Chi trả</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
