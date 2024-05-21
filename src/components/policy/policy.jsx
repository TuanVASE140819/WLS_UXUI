import React from "react";
import "./policy.scss";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <div className="policy">
      <div className="policy__wrapper">
        <div className="policy__cards">
          <Link to="/" className="policy__card">
            Chính sách điểm thưởng
          </Link>
          <Link to="/" className="policy__card">
            Chính sách đổi quà
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Policy;
