import React from "react";

import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="ads">
      <div className="ads__wrapper">
        <div className="ads__cards">
          <Link to="/dial" className="ads__card">
            <figure className="ads__image">
              <img src={require("../../assets/images/Quayso.png")} alt="" />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
