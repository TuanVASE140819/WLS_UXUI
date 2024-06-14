import React from "react";
import "./popup.scss";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <h2>Congratulations!</h2>
        <p>{message}</p>
        <button className="popup__close" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default Popup;
