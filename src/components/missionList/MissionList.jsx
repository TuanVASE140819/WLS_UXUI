import React, { useState, useRef, useEffect } from "react";
import "./MissionList.scss";

const MissionList = ({ items }) => {
  const CollapseItem = ({ header, content }) => {
    const [isOpen, setIsOpen] = useState(true);
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

    console.log("contentHeight", content);
    return (
      <div className="collapse-item">
        <div className="collapse-header" onClick={toggleCollapse}>
          <h4>{header}</h4>
          <svg
            className={`collapse-icon ${isOpen ? "active" : ""}`}
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
            {Array.isArray(content)
              ? content.map((item, index) => (
                  <div
                    className={`mession__card ${item.active ? "active" : ""}`}
                    key={index}
                  >
                    <div className="mession__text">
                      <h4>{item.header}</h4>
                      <p>{item.content} </p>
                    </div>
                    <div className="mession__icons">
                      <div className="mession__number">
                        {item.coin}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="14"
                          fill="none"
                          viewBox="0 0 15 14"
                        >
                          <g clipPath="url(#clip0_301_4639)">
                            <path
                              fill="#FFC850"
                              fillRule="evenodd"
                              d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_301_4639">
                              <path fill="#fff" d="M0 0H15V14H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="mession__icon">
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_301_4568)">
                            <path
                              d="M7.4421 10.4273C7.78138 9.84229 8.09805 9.25727 8.45995 8.69519C9.62484 6.88278 11.0725 5.3342 12.6897 3.94621C14.4201 2.45498 16.3088 1.19317 18.3106 0.103426C18.4915 0.000186929 18.6838 -0.057168 18.8421 0.0919548C18.9326 0.183723 19.0004 0.344316 19.0004 0.481968C19.0004 0.585207 18.91 0.711388 18.8308 0.780214C16.5576 2.74175 14.6576 5.02448 13.029 7.55957C11.2534 10.3355 9.91888 13.3065 9.12722 16.5184C9.11591 16.5528 9.1046 16.5872 9.09329 16.6216C9.05936 16.8052 8.95757 16.9314 8.77662 16.9772C8.58436 17.0231 8.44865 16.9428 8.32424 16.8052C7.75876 16.1857 7.2046 15.5778 6.63912 14.9584C4.50162 12.6183 2.36412 10.2782 0.226621 7.92664C0.192693 7.89222 0.158764 7.85781 0.124836 7.81193C0.000430961 7.68575 -0.0334976 7.51368 0.0343595 7.34162C0.113526 7.16955 0.26055 7.08926 0.441502 7.08926C0.769479 7.08926 1.10876 7.08926 1.43674 7.08926C2.38674 7.08926 3.32543 7.08926 4.27543 7.08926C4.479 7.08926 4.63734 7.15808 4.77305 7.31868C5.59864 8.28224 6.42424 9.2458 7.24984 10.2094C7.31769 10.2782 7.37424 10.3585 7.4421 10.4273Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_301_4568">
                              <rect width="19" height="17" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))
              : content.map((item, index) => (
                  <div
                    className={`mession__card ${item.active ? "active" : ""}`}
                    key={index}
                  >
                    <div className="mession__text">
                      <h4>{item.header}</h4>
                      <p>Mời 5 người bạn đăng kí tài khoản</p>
                    </div>
                    <div className="mession__icons">
                      <div className="mession__number">
                        20
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="14"
                          fill="none"
                          viewBox="0 0 15 14"
                        >
                          <g clipPath="url(#clip0_301_4639)">
                            <path
                              fill="#FFC850"
                              fillRule="evenodd"
                              d="M6.584.598c.34-.797 1.498-.797 1.831 0L9.99 4.295l4.086.318c.878.066 1.242 1.143.568 1.697l-3.118 2.605.953 3.89c.205.84-.726 1.498-1.483 1.047l-3.504-2.088-3.504 2.088c-.757.45-1.688-.214-1.483-1.048l.953-3.889L.348 6.31c-.674-.56-.31-1.631.567-1.697l4.087-.318L6.584.598z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_301_4639">
                              <path fill="#fff" d="M0 0H15V14H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="mession__icon">
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_301_4568)">
                            <path
                              d="M7.4421 10.4273C7.78138 9.84229 8.09805 9.25727 8.45995 8.69519C9.62484 6.88278 11.0725 5.3342 12.6897 3.94621C14.4201 2.45498 16.3088 1.19317 18.3106 0.103426C18.4915 0.000186929 18.6838 -0.057168 18.8421 0.0919548C18.9326 0.183723 19.0004 0.344316 19.0004 0.481968C19.0004 0.585207 18.91 0.711388 18.8308 0.780214C16.5576 2.74175 14.6576 5.02448 13.029 7.55957C11.2534 10.3355 9.91888 13.3065 9.12722 16.5184C9.11591 16.5528 9.1046 16.5872 9.09329 16.6216C9.05936 16.8052 8.95757 16.9314 8.77662 16.9772C8.58436 17.0231 8.44865 16.9428 8.32424 16.8052C7.75876 16.1857 7.2046 15.5778 6.63912 14.9584C4.50162 12.6183 2.36412 10.2782 0.226621 7.92664C0.192693 7.89222 0.158764 7.85781 0.124836 7.81193C0.000430961 7.68575 -0.0334976 7.51368 0.0343595 7.34162C0.113526 7.16955 0.26055 7.08926 0.441502 7.08926C0.769479 7.08926 1.10876 7.08926 1.43674 7.08926C2.38674 7.08926 3.32543 7.08926 4.27543 7.08926C4.479 7.08926 4.63734 7.15808 4.77305 7.31868C5.59864 8.28224 6.42424 9.2458 7.24984 10.2094C7.31769 10.2782 7.37424 10.3585 7.4421 10.4273Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_301_4568">
                              <rect width="19" height="17" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
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

export default MissionList;
