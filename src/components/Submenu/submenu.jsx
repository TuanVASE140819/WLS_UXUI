import React from "react";
import "./submenu.scss";
const SubMenu = ({ items }) => {
  return (
    <ul className="submenu">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default SubMenu;
