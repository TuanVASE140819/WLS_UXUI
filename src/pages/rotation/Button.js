import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="btn--wheel" onClick={onClick}>
      Quay thưởng
    </button>
  );
};

export default Button;
