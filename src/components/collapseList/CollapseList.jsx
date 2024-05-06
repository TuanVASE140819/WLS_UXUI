import React, { useState, useRef, useEffect } from "react";
import "./collapseList.scss";

const CollapseList = ({ items }) => {
  const CollapseItem = ({ header, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }, [content]);

    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="collapse-item">
        <div className="collapse-header" onClick={toggleCollapse}>
          <h4>{header}</h4>
          <svg className={`collapse-icon ${isOpen ? "active" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              fill="#595959"
              d="M7.732 9c-.77 1.333-2.694 1.333-3.464 0L.804 3c-.77-1.333.192-3 1.732-3h6.928c1.54 0 2.502 1.667 1.732 3L7.732 9z"
            ></path>
          </svg>
        </div>
        <div
          className={`collapse-content ${isOpen ? "open" : ""}`}
          style={{ maxHeight: isOpen ? contentHeight + "px" : 0 }}
        >
          <div ref={contentRef} className="collapse-inner-content">
            {content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="collapse-list">
      {items.map((item, index) => (
        <CollapseItem key={index} header={item.header} content={item.content} />
      ))}
    </div>
  );
};

export default CollapseList;
