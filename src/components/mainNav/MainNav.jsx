import React, { useState } from "react";
import "./mainNav.scss";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logos/logo-we-love-school.png";

const MainNav = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const message = [
    {
      title: "Hội sinh viên đại học FPT",
      imgGroup: require("../../assets/images/user.png"),
      content: [
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan",
          mess: "Alo???",
        },
        {
          img: require("../../assets/images/user-1.png"),
          name: "Mai Phương:",
          mess: "Hả gì thế",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Hồ Lê Bảo Hân:",
          mess: "Đang ngủ nha mấy pà",
        },
      ],
    },
    {
      title: "Anti những đứa tên Hòa",
      imgGroup: require("../../assets/images/user-2.png"),
      content: [
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan 2",
          mess: "Alo 2",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan 2",
          mess: "Alo 2",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan 2",
          mess: "Alo 2",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan 2",
          mess: "Alo 2",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan 2",
          mess: "Alo 2",
        },
        {
          img: require("../../assets/images/user-1.png"),
          name: "Mai Phương2",
          mess: "Hả gì thế2",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Hồ Lê Bảo Hân",
          mess: "Đang ngủ nha mấy pà",
        },
      ],
    },
    {
      title: "Ôn thi đại học",
      imgGroup: require("../../assets/images/user-1.png"),
      content: [
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan",
          mess: "Alo",
        },
        {
          img: require("../../assets/images/user-1.png"),
          name: "Mai Phương",
          mess: "Hả gì thế",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Hồ Lê Bảo Hân",
          mess: "Đang ngủ nha mấy pà",
        },
      ],
    },
    {
      title: "Thix ngừi nhện",
      imgGroup: require("../../assets/images/user-1.png"),
      content: [
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan",
          mess: "Alo",
        },
        {
          img: require("../../assets/images/user-1.png"),
          name: "Mai Phương",
          mess: "Hả gì thế",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Hồ Lê Bảo Hân",
          mess: "Đang ngủ nha mấy pà",
        },
      ],
    },
    {
      title: "I'm Batman",
      imgGroup: require("../../assets/images/user.png"),
      content: [
        {
          img: require("../../assets/images/user.png"),
          name: "Kiều Lan",
          mess: "Alo",
        },
        {
          img: require("../../assets/images/user-1.png"),
          name: "Mai Phương",
          mess: "Hả gì thế",
        },
        {
          img: require("../../assets/images/user.png"),
          name: "Hồ Lê Bảo Hân",
          mess: "Đang ngủ nha mấy pà",
        },
      ],
    },
  ];

  return (
    <nav className="mainNav">
      <div className="mainNav__wrapper">
        <NavLink
          to="/"
          className="mainNav__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Logo} alt="" />
        </NavLink>
        <div className="mainNav__links">
          <NavLink to="/" className="mainNav__linkItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#666"
                d="M11.47 3.841a.75.75 0 011.06 0l8.69 8.69a.751.751 0 101.06-1.061l-8.69-8.69a2.25 2.25 0 00-3.181 0l-8.69 8.69a.75.75 0 101.06 1.06l8.69-8.689z"
              ></path>
              <path
                fill="#666"
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.031-.028.061-.056.091-.086L12 5.432z"
              ></path>
            </svg>
            <p>Trường của tôi</p>
          </NavLink>
          <NavLink to="/search" className="mainNav__linkItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#666"
                d="M8.25 10.872c0-.333.068-.662.2-.97a2.53 2.53 0 01.569-.822c.244-.235.533-.422.851-.55a2.707 2.707 0 012.01 0c.318.128.607.315.851.55.244.235.437.515.57.822.131.308.199.637.199.97a2.49 2.49 0 01-.769 1.792 2.674 2.674 0 01-1.856.742 2.674 2.674 0 01-1.856-.742 2.49 2.49 0 01-.769-1.792z"
              ></path>
              <path
                fill="#666"
                fillRule="evenodd"
                d="M12 2.547c-5.385 0-9.75 4.213-9.75 9.41 0 5.199 4.365 9.412 9.75 9.412s9.75-4.213 9.75-9.411c0-5.198-4.365-9.411-9.75-9.411zM10.875 6.89c-.646 0-1.284.147-1.86.429a4.091 4.091 0 00-1.46 1.192 3.91 3.91 0 00-.747 1.7 3.85 3.85 0 00.129 1.842c.191.596.526 1.14.975 1.588.45.449 1.002.789 1.613.993.611.204 1.263.267 1.903.184a4.214 4.214 0 001.785-.665l2.007 1.936a.751.751 0 00.535.23.774.774 0 00.544-.212.72.72 0 00.22-.524.703.703 0 00-.239-.517l-2.006-1.937a3.867 3.867 0 00.253-4.11 4.045 4.045 0 00-1.52-1.556 4.238 4.238 0 00-2.132-.573z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>Tìm trường</p>
          </NavLink>
          <NavLink to="/events" className="mainNav__linkItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                fill="#666"
                fillRule="evenodd"
                d="M4.846.34c.214 0 .42.082.571.228a.766.766 0 01.237.551v1.56h9.692v-1.56c0-.206.085-.405.237-.55a.823.823 0 01.57-.23c.215 0 .42.083.572.23a.766.766 0 01.236.55v1.56h.808a3.29 3.29 0 012.285.913c.606.585.946 1.378.946 2.205v11.695c0 .827-.34 1.62-.946 2.205a3.29 3.29 0 01-2.285.913H3.231a3.29 3.29 0 01-2.285-.913A3.064 3.064 0 010 17.492V5.797c0-.827.34-1.62.946-2.205a3.29 3.29 0 012.285-.913h.807v-1.56c0-.206.086-.405.237-.55a.823.823 0 01.571-.23zm14.539 9.355c0-.413-.17-.81-.474-1.102a1.645 1.645 0 00-1.142-.457H3.231c-.429 0-.84.164-1.142.457a1.532 1.532 0 00-.474 1.102v7.797c0 .413.17.81.474 1.102.302.293.713.457 1.142.457h14.538c.429 0 .84-.164 1.143-.457.302-.292.473-.689.473-1.102V9.695z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>Sự kiện</p>
          </NavLink>
        </div>
        <div className="mainNav__aside">
          <i className="mainNav__message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3D92D1"
                fillRule="evenodd"
                d="M4.848 2.771a49.319 49.319 0 0114.304-.001c1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.154.17-2.313.297-3.476.383a.389.389 0 00-.297.17l-2.755 4.133a.751.751 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.895 48.895 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 110 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 100 1.5H12a.75.75 0 100-1.5H7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="popupMessage">
              <div className="popupMessage__wrapper">
                <div className="popupMessage__top">
                  <div className="popupMessage__left">
                    <figure className="popupMessage__image">
                      <img
                        src={require("../../assets/images/user-2.png")}
                        alt=""
                      />
                    </figure>
                    <div className="popupMessage__infoText">
                      <h2>Hoà Hồ</h2>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#FCAA17"
                            fillRule="evenodd"
                            d="M10.787 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.405.434c1.163.093 1.636 1.545.748 2.305l-4.117 3.527 1.258 5.273c.27 1.136-.965 2.033-1.96 1.425L12 18.354 7.372 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        9015
                        <span>nạp xu</span>
                      </p>
                    </div>
                  </div>
                  <div className="popupMessage__right">
                    <Link to="/" className="popupMessage__rightIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 28 28"
                      >
                        <path
                          fill="#4C4C4C"
                          d="M9.625 12.688a3.063 3.063 0 116.125 0 3.063 3.063 0 01-6.125 0z"
                        ></path>
                        <path
                          fill="#4C4C4C"
                          fillRule="evenodd"
                          d="M14 2.625C7.718 2.625 2.625 7.718 2.625 14S7.718 25.375 14 25.375 25.375 20.282 25.375 14 20.282 2.625 14 2.625zm-1.313 5.25a4.813 4.813 0 102.728 8.778l2.342 2.34a.874.874 0 101.236-1.236l-2.34-2.342a4.813 4.813 0 00-3.965-7.54z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                    <Link to="/" className="popupMessage__rightIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4C4C4C"
                          fillRule="evenodd"
                          d="M11.079 2.25c-.917 0-1.7.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43-.029.38-.029.76 0 1.139.015.2-.06.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.64.405.985.57.182.088.277.228.297.35l.178 1.071a1.876 1.876 0 001.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43.028-.38.028-.76 0-1.139-.016-.2.059-.352.153-.43l.84-.692c.708-.582.89-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.45-.083a7.492 7.492 0 00-.984-.57c-.183-.087-.277-.227-.297-.348l-.18-1.072a1.875 1.875 0 00-1.85-1.567H11.08zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                    <Link to="/" className="popupMessage__rightIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4C4C4C"
                          fillRule="evenodd"
                          d="M12 2.25A9.75 9.75 0 002.25 12 9.75 9.75 0 0012 21.75 9.75 9.75 0 0021.75 12 9.75 9.75 0 0012 2.25zM12.75 9a.75.75 0 10-1.5 0v2.25H9a.75.75 0 100 1.5h2.25V15a.75.75 0 101.5 0v-2.25H15a.75.75 0 100-1.5h-2.25V9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="popupMessage__bottom">
                  <div className="popupMessage__info">
                    <div className="popupMessage__infoHeader">
                      <h4>Danh sách trò truyện</h4>
                    </div>
                    <div className="popupMessage__lists">
                      {message.map((item, index) => (
                        <div key={index} className="popupMessage__listItem">
                          <div
                            className="popupMessage__listHeader"
                            onClick={() => toggleItem(index)}
                          >
                            <figure className="popupMessage__image">
                              <img src={item.imgGroup} alt="" />
                              <div className="popupMessage__text">
                                <h4>{item.title}</h4>
                                <div className="popupMessage__views">
                                  <div className="popupMessage__view">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke="#AAA"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.288 48.288 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.395 48.395 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.019z"
                                      ></path>
                                    </svg>
                                    12
                                  </div>
                                  <div className="popupMessage__view">
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13.1242 5C13.1242 5.8288 12.7949 6.62366 12.2089 7.20971C11.6228 7.79576 10.828 8.125 9.99917 8.125C9.17037 8.125 8.37551 7.79576 7.78946 7.20971C7.20341 6.62366 6.87417 5.8288 6.87417 5C6.87417 4.1712 7.20341 3.37634 7.78946 2.79029C8.37551 2.20424 9.17037 1.875 9.99917 1.875C10.828 1.875 11.6228 2.20424 12.2089 2.79029C12.7949 3.37634 13.1242 4.1712 13.1242 5ZM3.75 16.765C3.77678 15.1253 4.44695 13.5618 5.61598 12.4117C6.78501 11.2616 8.35924 10.6171 9.99917 10.6171C11.6391 10.6171 13.2133 11.2616 14.3824 12.4117C15.5514 13.5618 16.2216 15.1253 16.2483 16.765C14.2878 17.664 12.156 18.1279 9.99917 18.125C7.76917 18.125 5.6525 17.6383 3.75 16.765Z"
                                        stroke="#AAAAAA"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    12
                                  </div>
                                </div>
                              </div>
                            </figure>
                            <svg
                              className={`popupMessage__arrow ${
                                openIndex === index ? "active" : ""
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="19"
                              fill="none"
                              viewBox="0 0 11 19"
                            >
                              <path
                                stroke="#424242"
                                strokeMiterlimit="10"
                                d="M.444 18.425l8.98-8.97-8.89-8.9"
                              ></path>
                            </svg>
                          </div>
                          <div
                            className={`popupMessage__content ${
                              openIndex === index ? "show" : ""
                            }`}
                          >
                            {item.content.map((el, index) => (
                              <div key={index} className="popupMessage__chat">
                                <figure className="popupMessage__user">
                                  <img src={el.img} alt="" />
                                </figure>
                                <h4 className="popupMessage__name">
                                  {el.name}:{" "}
                                </h4>
                                <p className="popupMessage__mess">{el.mess}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`popupMessage__contentAside ${
                openIndex !== null ? "show" : ""
              }`}
            >
              <div className="popupMessage__listHeader">
                <figure className="popupMessage__image">
                  <img src={message[openIndex]?.imgGroup} alt="" />
                  <div className="popupMessage__text">
                    <h4>{message[openIndex]?.title}</h4>
                    <div className="popupMessage__views">
                      <div className="popupMessage__view">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#AAA"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.288 48.288 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.395 48.395 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.019z"
                          ></path>
                        </svg>
                        12
                      </div>
                      <div className="popupMessage__view">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.1242 5C13.1242 5.8288 12.7949 6.62366 12.2089 7.20971C11.6228 7.79576 10.828 8.125 9.99917 8.125C9.17037 8.125 8.37551 7.79576 7.78946 7.20971C7.20341 6.62366 6.87417 5.8288 6.87417 5C6.87417 4.1712 7.20341 3.37634 7.78946 2.79029C8.37551 2.20424 9.17037 1.875 9.99917 1.875C10.828 1.875 11.6228 2.20424 12.2089 2.79029C12.7949 3.37634 13.1242 4.1712 13.1242 5ZM3.75 16.765C3.77678 15.1253 4.44695 13.5618 5.61598 12.4117C6.78501 11.2616 8.35924 10.6171 9.99917 10.6171C11.6391 10.6171 13.2133 11.2616 14.3824 12.4117C15.5514 13.5618 16.2216 15.1253 16.2483 16.765C14.2878 17.664 12.156 18.1279 9.99917 18.125C7.76917 18.125 5.6525 17.6383 3.75 16.765Z"
                            stroke="#AAAAAA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        12
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              {message[openIndex]?.content.map((el, index) => (
                <div key={index} className="popupMessage__chat">
                  <figure className="popupMessage__user">
                    <img src={el.img} alt="" />
                  </figure>
                  <div className="popupMessage__chatText">
                    <div>
                      <h4 className="popupMessage__name">{el.name}</h4>
                      <span>26/03/2024 2:12</span>
                    </div>

                    <p className="popupMessage__mess">{el.mess}</p>
                  </div>
                </div>
              ))}
              <div className="popupMessage__chat you">
                <div className="popupMessage__chatText">
                  <div>
                    <span>26/03/2024 2:12</span>
                    <h4 className="popupMessage__name">Bạn</h4>
                  </div>
                  <p className="popupMessage__mess">Hok</p>
                </div>
                <figure className="popupMessage__user">
                  <img src={require("../../assets/images/user.png")} alt="" />
                </figure>
                <div className="popupMessage__input">
                  <input type="text" />
                  <div className="popupMessage__icons">
                    <div className="popupMessage__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#777"
                          d="M3.923.06h.125c.022.008.036.022.058.022.53.037.97.265 1.352.625.257.242.522.477.779.712.19.177.382.346.58.522.323-.33.705-.507 1.16-.507.449 0 .83.184 1.147.507.477-.434.94-.852 1.403-1.271.271-.25.58-.44.94-.529.14-.037.286-.059.426-.08h.125c.059.007.11.021.169.029 1.109.095 1.969 1.138 1.836 2.24-.037.28-.14.551-.22.838h1.072c.625.007 1.066.448 1.066 1.072v1.403c0 .456-.184.647-.64.647-4.885 0-9.762 0-14.647.007C.338 6.29.118 6.187 0 5.886V4.02c.007-.015.022-.03.03-.052.154-.514.52-.793 1.05-.793h.947c.052 0 .096-.007.155-.007-.015-.052-.03-.074-.037-.096A2.01 2.01 0 013.078.288c.264-.118.566-.154.845-.228zM6.39 3.168c.015-.015.037-.03.051-.044-.044-.081-.08-.17-.14-.243-.043-.059-.102-.103-.16-.147-.508-.463-1.007-.925-1.521-1.373-.58-.5-1.477-.191-1.653.543-.155.654.33 1.256 1.035 1.264.58.007 1.161 0 1.741 0h.647zm3.107-.044c.015.014.037.029.052.044.029 0 .058.007.088.007h2.255c.08 0 .169-.007.25-.022a1.04 1.04 0 00.83-.786c.088-.404-.081-.83-.426-1.058-.419-.279-.904-.235-1.322.14-.53.477-1.066.955-1.587 1.447-.066.044-.096.147-.14.228zM1.044 7.333h5.877v8.653c-.051 0-.103.007-.161.007H2.168c-.697 0-1.13-.433-1.13-1.123V7.494c0-.058.006-.11.006-.161zM9.021 15.979V7.325h5.892v7.515c0 .706-.426 1.139-1.131 1.139H9.19c-.058.015-.11.007-.169 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="popupMessage__icon">
                      <svg
                        width="25"
                        height="12"
                        viewBox="0 0 25 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.8043 3.34828C23.078 3.34828 21.3517 3.34828 19.6034 3.34828C19.6034 3.92861 19.6034 4.49424 19.6034 5.08926C20.7494 5.08926 21.888 5.08926 23.0486 5.08926C23.0486 5.97076 23.0486 6.82288 23.0486 7.69704C21.9027 7.69704 20.7567 7.69704 19.5887 7.69704C19.5887 8.86503 19.5887 10.011 19.5887 11.1716C18.7072 11.1716 17.8551 11.1716 16.9883 11.1716C16.9883 7.69704 16.9883 4.22979 16.9883 0.7405C17.0985 0.7405 17.194 0.7405 17.2895 0.7405C19.6989 0.7405 22.1084 0.7405 24.5178 0.7405C24.6133 0.7405 24.7088 0.733154 24.8043 0.733154C24.8043 1.60731 24.8043 2.47413 24.8043 3.34828Z"
                          fill="#777777"
                        />
                        <path
                          d="M9.14822 3.3556C7.10607 3.3556 5.0933 3.3556 3.07318 3.3556C3.07318 5.09657 3.07318 6.82285 3.07318 8.56383C4.21914 8.56383 5.35775 8.56383 6.52574 8.56383C6.52574 7.71171 6.52574 6.85224 6.52574 5.97808C7.40725 5.97808 8.25937 5.97808 9.13353 5.97808C9.14087 6.04419 9.14822 6.11031 9.14822 6.17642C9.14822 7.23422 9.15556 8.28468 9.14822 9.34249C9.14822 10.224 8.66339 10.8925 7.848 11.1202C7.65701 11.1716 7.45867 11.1863 7.26033 11.1863C5.6222 11.1936 3.97672 11.1936 2.33859 11.1863C1.1706 11.1863 0.443359 10.4517 0.443359 9.28372C0.443359 7.05058 0.443359 4.81743 0.443359 2.57694C0.443359 1.70278 0.920841 1.049 1.72889 0.821278C1.91988 0.762511 2.13291 0.747819 2.33859 0.747819C3.96938 0.740473 5.60751 0.740473 7.23829 0.747819C8.42098 0.747819 9.14822 1.48241 9.14822 2.66509C9.14822 2.87812 9.14822 3.0985 9.14822 3.3556Z"
                          fill="#777777"
                        />
                        <path
                          d="M11.7715 0.755127C12.631 0.755127 13.4757 0.755127 14.3425 0.755127C14.3425 4.22238 14.3425 7.68963 14.3425 11.1716C13.4831 11.1716 12.6383 11.1716 11.7715 11.1716C11.7715 7.69698 11.7715 4.22972 11.7715 0.755127Z"
                          fill="#777777"
                        />
                      </svg>
                    </div>
                    <div className="popupMessage__icon">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25046 0.529419C8.55164 0.529419 8.85282 0.529419 9.15401 0.529419C9.19073 0.536765 9.23481 0.551457 9.27154 0.551457C10.3514 0.624915 11.3798 0.904058 12.3201 1.43296C14.8617 2.85806 16.2428 5.03244 16.4191 7.9414C16.5072 9.33712 16.206 10.6667 15.5229 11.8935C14.1051 14.4278 11.9307 15.8015 9.02913 15.9851C7.77298 16.0659 6.56091 15.8162 5.42965 15.2652C3.05693 14.0972 1.60245 12.2094 1.09558 9.60892C1.03682 9.31508 1.01478 9.0139 0.970703 8.71272C0.970703 8.41154 0.970703 8.11036 0.970703 7.80918C0.978049 7.7651 0.992741 7.72103 0.992741 7.67695C1.0662 6.58976 1.35269 5.56869 1.88159 4.62107C3.08631 2.44669 4.91544 1.11709 7.36896 0.654299C7.66279 0.595532 7.95663 0.566148 8.25046 0.529419ZM8.70591 13.1496C10.4322 13.0909 11.8279 12.3857 12.8416 10.9752C12.9151 10.8724 12.9665 10.7402 12.9812 10.6153C13.0179 10.3288 12.8416 10.0497 12.5772 9.93948C12.3127 9.82929 12.0115 9.88806 11.8206 10.1084C11.681 10.2627 11.5635 10.4463 11.4165 10.5933C10.7407 11.3132 9.90328 11.7098 8.91894 11.7686C8.1917 11.8127 7.51587 11.6511 6.87678 11.2985C6.37726 11.0193 5.98059 10.6226 5.63533 10.1672C5.39292 9.84398 4.98889 9.79256 4.68771 10.0129C4.37919 10.248 4.32042 10.6447 4.56283 10.9752C5.58391 12.393 6.97228 13.0982 8.70591 13.1496ZM6.95024 6.80279C6.95759 6.19309 6.46542 5.69357 5.85571 5.69357C5.246 5.68622 4.74648 6.17839 4.74648 6.7881C4.73914 7.39781 5.23865 7.89733 5.84102 7.89733C6.44338 7.90467 6.95024 7.40516 6.95024 6.80279ZM10.4542 6.79545C10.4542 7.40515 10.9537 7.89733 11.5561 7.89733C12.1585 7.89733 12.658 7.39781 12.658 6.7881C12.658 6.17839 12.1585 5.68622 11.5561 5.68622C10.9464 5.69357 10.4542 6.18574 10.4542 6.79545Z"
                          fill="#777777"
                        />
                      </svg>
                    </div>
                    <div className="popupMessage__icon send">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.89897 2.00333C2.79067 1.97187 2.67587 1.97029 2.56674 1.99878C2.45762 2.02727 2.35824 2.08475 2.27913 2.16514C2.20003 2.24552 2.14415 2.34582 2.11742 2.45539C2.09069 2.56495 2.0941 2.67971 2.1273 2.7875L4.15397 9.375H11.2506C11.4164 9.375 11.5754 9.44084 11.6926 9.55805C11.8098 9.67526 11.8756 9.83424 11.8756 10C11.8756 10.1658 11.8098 10.3247 11.6926 10.4419C11.5754 10.5591 11.4164 10.625 11.2506 10.625H4.15397L2.1273 17.2125C2.0943 17.3202 2.09103 17.4349 2.11785 17.5443C2.14467 17.6538 2.20057 17.7539 2.27965 17.8342C2.35872 17.9144 2.45802 17.9718 2.56704 18.0003C2.67606 18.0288 2.79075 18.0272 2.89897 17.9958C8.41144 16.3928 13.6097 13.8603 18.2698 10.5075C18.3503 10.4496 18.4159 10.3734 18.4612 10.2852C18.5064 10.1969 18.53 10.0992 18.53 10C18.53 9.90083 18.5064 9.80308 18.4612 9.71483C18.4159 9.62659 18.3503 9.55038 18.2698 9.4925C13.6098 6.13941 8.41151 3.60663 2.89897 2.00333Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </i>
          <i className="mainNav__notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3D92D1"
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.749 3.749 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0c-1.496.135-3 .135-4.496 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className=" popupNotification">
              <div className=" popupNotification__wrapper">
                <div className=" popupNotification__top">
                  <div className=" popupNotification__left">
                    <div className=" popupNotification__infoText">
                      <h2>Thông báo</h2>
                    </div>
                  </div>
                </div>
                <div className=" popupNotification__bottom">
                  <div className=" popupNotification__info">
                    <div
                      className=" popupNotification__infoHeader"
                      onClick={() => setOpen(!open)}
                    >
                      <h4>4/5/2024</h4>
                      <svg
                        className={`${open ? "active" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="16"
                        fill="none"
                        viewBox="0 0 9 16"
                      >
                        <g clipPath="url(#clip0_131_425)">
                          <path
                            stroke="#424242"
                            strokeMiterlimit="10"
                            d="M.74 15.257l7.37-7.37L.98.746"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_131_425">
                            <path
                              fill="#fff"
                              d="M0 0H15.21V8.43H0z"
                              transform="rotate(-90 7.999 7.608)"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className={` popupNotification__form ${
                        open ? "active" : ""
                      }`}
                    >
                      <div className=" popupNotification__infoContent">
                        <img
                          src={require("../../assets/images/user.png")}
                          alt=""
                        />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18C2.25 18.7956 2.56607 19.5587 3.12868 20.1213C3.69129 20.6839 4.45435 21 5.25 21H20.25C19.4544 21 18.6913 20.6839 18.1287 20.1213C17.5661 19.5587 17.25 18.7956 17.25 18V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967C11.329 10.1103 11.25 10.3011 11.25 10.5C11.25 10.6989 11.329 10.8897 11.4697 11.0303C11.6103 11.171 11.8011 11.25 12 11.25H13.5C13.6989 11.25 13.8897 11.171 14.0303 11.0303C14.171 10.8897 14.25 10.6989 14.25 10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75H12ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6 12.75C5.80109 12.75 5.61032 12.829 5.46967 12.9697C5.32902 13.1103 5.25 13.3011 5.25 13.5C5.25 13.6989 5.32902 13.8897 5.46967 14.0303C5.61032 14.171 5.80109 14.25 6 14.25H13.5C13.6989 14.25 13.8897 14.171 14.0303 14.0303C14.171 13.8897 14.25 13.6989 14.25 13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H6ZM5.25 16.5C5.25 16.3011 5.32902 16.1103 5.46967 15.9697C5.61032 15.829 5.80109 15.75 6 15.75H13.5C13.6989 15.75 13.8897 15.829 14.0303 15.9697C14.171 16.1103 14.25 16.3011 14.25 16.5C14.25 16.6989 14.171 16.8897 14.0303 17.0303C13.8897 17.171 13.6989 17.25 13.5 17.25H6C5.80109 17.25 5.61032 17.171 5.46967 17.0303C5.32902 16.8897 5.25 16.6989 5.25 16.5ZM6 6.75C5.80109 6.75 5.61032 6.82902 5.46967 6.96967C5.32902 7.11032 5.25 7.30109 5.25 7.5V10.5C5.25 10.914 5.586 11.25 6 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V7.5C9.75 7.30109 9.67098 7.11032 9.53033 6.96967C9.38968 6.82902 9.19891 6.75 9 6.75H6Z"
                            fill="#0487D9"
                          />
                          <path
                            d="M18.75 6.75H20.625C21.246 6.75 21.75 7.254 21.75 7.875V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5C19.8522 19.5 19.4706 19.342 19.1893 19.0607C18.908 18.7794 18.75 18.3978 18.75 18V6.75Z"
                            fill="#0487D9"
                          />
                        </svg>

                        <div>
                          <p>
                            <span className="popupNotification__name">
                              Nguyễn Văn A
                            </span>{" "}
                            đã viết một bài viết lên trường{" "}
                            <span className="popupNotification__name">
                              Đại học Bách Khoa
                            </span>
                          </p>
                          <p>
                            Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang
                            Dang Dở...
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="7"
                          fill="none"
                          viewBox="0 0 34 7"
                        >
                          <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                            <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_277_1070">
                              <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className=" popupNotification__infoContent">
                        <img
                          src={require("../../assets/images/user.png")}
                          alt=""
                        />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18C2.25 18.7956 2.56607 19.5587 3.12868 20.1213C3.69129 20.6839 4.45435 21 5.25 21H20.25C19.4544 21 18.6913 20.6839 18.1287 20.1213C17.5661 19.5587 17.25 18.7956 17.25 18V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967C11.329 10.1103 11.25 10.3011 11.25 10.5C11.25 10.6989 11.329 10.8897 11.4697 11.0303C11.6103 11.171 11.8011 11.25 12 11.25H13.5C13.6989 11.25 13.8897 11.171 14.0303 11.0303C14.171 10.8897 14.25 10.6989 14.25 10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75H12ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6 12.75C5.80109 12.75 5.61032 12.829 5.46967 12.9697C5.32902 13.1103 5.25 13.3011 5.25 13.5C5.25 13.6989 5.32902 13.8897 5.46967 14.0303C5.61032 14.171 5.80109 14.25 6 14.25H13.5C13.6989 14.25 13.8897 14.171 14.0303 14.0303C14.171 13.8897 14.25 13.6989 14.25 13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H6ZM5.25 16.5C5.25 16.3011 5.32902 16.1103 5.46967 15.9697C5.61032 15.829 5.80109 15.75 6 15.75H13.5C13.6989 15.75 13.8897 15.829 14.0303 15.9697C14.171 16.1103 14.25 16.3011 14.25 16.5C14.25 16.6989 14.171 16.8897 14.0303 17.0303C13.8897 17.171 13.6989 17.25 13.5 17.25H6C5.80109 17.25 5.61032 17.171 5.46967 17.0303C5.32902 16.8897 5.25 16.6989 5.25 16.5ZM6 6.75C5.80109 6.75 5.61032 6.82902 5.46967 6.96967C5.32902 7.11032 5.25 7.30109 5.25 7.5V10.5C5.25 10.914 5.586 11.25 6 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V7.5C9.75 7.30109 9.67098 7.11032 9.53033 6.96967C9.38968 6.82902 9.19891 6.75 9 6.75H6Z"
                            fill="#0487D9"
                          />
                          <path
                            d="M18.75 6.75H20.625C21.246 6.75 21.75 7.254 21.75 7.875V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5C19.8522 19.5 19.4706 19.342 19.1893 19.0607C18.908 18.7794 18.75 18.3978 18.75 18V6.75Z"
                            fill="#0487D9"
                          />
                        </svg>

                        <div>
                          <p>
                            <span className="popupNotification__name">
                              Nguyễn Văn A
                            </span>{" "}
                            đã viết một bài viết lên trường{" "}
                            <span className="popupNotification__name">
                              Đại học Bách Khoa
                            </span>
                          </p>
                          <p>
                            Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang
                            Dang Dở...
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="7"
                          fill="none"
                          viewBox="0 0 34 7"
                        >
                          <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                            <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_277_1070">
                              <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className=" popupNotification__infoContent">
                        <img
                          src={require("../../assets/images/user.png")}
                          alt=""
                        />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18C2.25 18.7956 2.56607 19.5587 3.12868 20.1213C3.69129 20.6839 4.45435 21 5.25 21H20.25C19.4544 21 18.6913 20.6839 18.1287 20.1213C17.5661 19.5587 17.25 18.7956 17.25 18V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967C11.329 10.1103 11.25 10.3011 11.25 10.5C11.25 10.6989 11.329 10.8897 11.4697 11.0303C11.6103 11.171 11.8011 11.25 12 11.25H13.5C13.6989 11.25 13.8897 11.171 14.0303 11.0303C14.171 10.8897 14.25 10.6989 14.25 10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75H12ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6 12.75C5.80109 12.75 5.61032 12.829 5.46967 12.9697C5.32902 13.1103 5.25 13.3011 5.25 13.5C5.25 13.6989 5.32902 13.8897 5.46967 14.0303C5.61032 14.171 5.80109 14.25 6 14.25H13.5C13.6989 14.25 13.8897 14.171 14.0303 14.0303C14.171 13.8897 14.25 13.6989 14.25 13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H6ZM5.25 16.5C5.25 16.3011 5.32902 16.1103 5.46967 15.9697C5.61032 15.829 5.80109 15.75 6 15.75H13.5C13.6989 15.75 13.8897 15.829 14.0303 15.9697C14.171 16.1103 14.25 16.3011 14.25 16.5C14.25 16.6989 14.171 16.8897 14.0303 17.0303C13.8897 17.171 13.6989 17.25 13.5 17.25H6C5.80109 17.25 5.61032 17.171 5.46967 17.0303C5.32902 16.8897 5.25 16.6989 5.25 16.5ZM6 6.75C5.80109 6.75 5.61032 6.82902 5.46967 6.96967C5.32902 7.11032 5.25 7.30109 5.25 7.5V10.5C5.25 10.914 5.586 11.25 6 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V7.5C9.75 7.30109 9.67098 7.11032 9.53033 6.96967C9.38968 6.82902 9.19891 6.75 9 6.75H6Z"
                            fill="#0487D9"
                          />
                          <path
                            d="M18.75 6.75H20.625C21.246 6.75 21.75 7.254 21.75 7.875V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5C19.8522 19.5 19.4706 19.342 19.1893 19.0607C18.908 18.7794 18.75 18.3978 18.75 18V6.75Z"
                            fill="#0487D9"
                          />
                        </svg>

                        <div>
                          <p>
                            <span className="popupNotification__name">
                              Nguyễn Văn A
                            </span>{" "}
                            đã viết một bài viết lên trường{" "}
                            <span className="popupNotification__name">
                              Đại học Bách Khoa
                            </span>
                          </p>
                          <p>
                            Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang
                            Dang Dở...
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="7"
                          fill="none"
                          viewBox="0 0 34 7"
                        >
                          <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                            <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_277_1070">
                              <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className=" popupNotification__infoContent">
                        <img
                          src={require("../../assets/images/user.png")}
                          alt=""
                        />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18C2.25 18.7956 2.56607 19.5587 3.12868 20.1213C3.69129 20.6839 4.45435 21 5.25 21H20.25C19.4544 21 18.6913 20.6839 18.1287 20.1213C17.5661 19.5587 17.25 18.7956 17.25 18V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967C11.329 10.1103 11.25 10.3011 11.25 10.5C11.25 10.6989 11.329 10.8897 11.4697 11.0303C11.6103 11.171 11.8011 11.25 12 11.25H13.5C13.6989 11.25 13.8897 11.171 14.0303 11.0303C14.171 10.8897 14.25 10.6989 14.25 10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75H12ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6 12.75C5.80109 12.75 5.61032 12.829 5.46967 12.9697C5.32902 13.1103 5.25 13.3011 5.25 13.5C5.25 13.6989 5.32902 13.8897 5.46967 14.0303C5.61032 14.171 5.80109 14.25 6 14.25H13.5C13.6989 14.25 13.8897 14.171 14.0303 14.0303C14.171 13.8897 14.25 13.6989 14.25 13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H6ZM5.25 16.5C5.25 16.3011 5.32902 16.1103 5.46967 15.9697C5.61032 15.829 5.80109 15.75 6 15.75H13.5C13.6989 15.75 13.8897 15.829 14.0303 15.9697C14.171 16.1103 14.25 16.3011 14.25 16.5C14.25 16.6989 14.171 16.8897 14.0303 17.0303C13.8897 17.171 13.6989 17.25 13.5 17.25H6C5.80109 17.25 5.61032 17.171 5.46967 17.0303C5.32902 16.8897 5.25 16.6989 5.25 16.5ZM6 6.75C5.80109 6.75 5.61032 6.82902 5.46967 6.96967C5.32902 7.11032 5.25 7.30109 5.25 7.5V10.5C5.25 10.914 5.586 11.25 6 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V7.5C9.75 7.30109 9.67098 7.11032 9.53033 6.96967C9.38968 6.82902 9.19891 6.75 9 6.75H6Z"
                            fill="#0487D9"
                          />
                          <path
                            d="M18.75 6.75H20.625C21.246 6.75 21.75 7.254 21.75 7.875V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5C19.8522 19.5 19.4706 19.342 19.1893 19.0607C18.908 18.7794 18.75 18.3978 18.75 18V6.75Z"
                            fill="#0487D9"
                          />
                        </svg>

                        <div>
                          <p>
                            <span className="popupNotification__name">
                              Nguyễn Văn A
                            </span>{" "}
                            đã viết một bài viết lên trường{" "}
                            <span className="popupNotification__name">
                              Đại học Bách Khoa
                            </span>
                          </p>
                          <p>
                            Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang
                            Dang Dở...
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="7"
                          fill="none"
                          viewBox="0 0 34 7"
                        >
                          <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                            <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_277_1070">
                              <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div
                      className=" popupNotification__infoHeader"
                      onClick={() => setOpen2(!open2)}
                    >
                      <h4>3/5/2024</h4>
                      <svg
                        className={`${open2 ? "active" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="16"
                        fill="none"
                        viewBox="0 0 9 16"
                      >
                        <g clipPath="url(#clip0_131_425)">
                          <path
                            stroke="#424242"
                            strokeMiterlimit="10"
                            d="M.74 15.257l7.37-7.37L.98.746"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_131_425">
                            <path
                              fill="#fff"
                              d="M0 0H15.21V8.43H0z"
                              transform="rotate(-90 7.999 7.608)"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className={` popupNotification__form ${
                        open2 ? "active" : ""
                      }`}
                    >
                      <div className=" popupNotification__infoContent">
                        <img
                          src={require("../../assets/images/user.png")}
                          alt=""
                        />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18C2.25 18.7956 2.56607 19.5587 3.12868 20.1213C3.69129 20.6839 4.45435 21 5.25 21H20.25C19.4544 21 18.6913 20.6839 18.1287 20.1213C17.5661 19.5587 17.25 18.7956 17.25 18V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967C11.329 10.1103 11.25 10.3011 11.25 10.5C11.25 10.6989 11.329 10.8897 11.4697 11.0303C11.6103 11.171 11.8011 11.25 12 11.25H13.5C13.6989 11.25 13.8897 11.171 14.0303 11.0303C14.171 10.8897 14.25 10.6989 14.25 10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75H12ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6 12.75C5.80109 12.75 5.61032 12.829 5.46967 12.9697C5.32902 13.1103 5.25 13.3011 5.25 13.5C5.25 13.6989 5.32902 13.8897 5.46967 14.0303C5.61032 14.171 5.80109 14.25 6 14.25H13.5C13.6989 14.25 13.8897 14.171 14.0303 14.0303C14.171 13.8897 14.25 13.6989 14.25 13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H6ZM5.25 16.5C5.25 16.3011 5.32902 16.1103 5.46967 15.9697C5.61032 15.829 5.80109 15.75 6 15.75H13.5C13.6989 15.75 13.8897 15.829 14.0303 15.9697C14.171 16.1103 14.25 16.3011 14.25 16.5C14.25 16.6989 14.171 16.8897 14.0303 17.0303C13.8897 17.171 13.6989 17.25 13.5 17.25H6C5.80109 17.25 5.61032 17.171 5.46967 17.0303C5.32902 16.8897 5.25 16.6989 5.25 16.5ZM6 6.75C5.80109 6.75 5.61032 6.82902 5.46967 6.96967C5.32902 7.11032 5.25 7.30109 5.25 7.5V10.5C5.25 10.914 5.586 11.25 6 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V7.5C9.75 7.30109 9.67098 7.11032 9.53033 6.96967C9.38968 6.82902 9.19891 6.75 9 6.75H6Z"
                            fill="#0487D9"
                          />
                          <path
                            d="M18.75 6.75H20.625C21.246 6.75 21.75 7.254 21.75 7.875V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5C19.8522 19.5 19.4706 19.342 19.1893 19.0607C18.908 18.7794 18.75 18.3978 18.75 18V6.75Z"
                            fill="#0487D9"
                          />
                        </svg>

                        <div>
                          <p>
                            <span className="popupNotification__name">
                              Nguyễn Văn A
                            </span>{" "}
                            đã viết một bài viết lên trường{" "}
                            <span className="popupNotification__name">
                              Đại học Bách Khoa
                            </span>
                          </p>
                          <p>
                            Gặp Nhau Rồi Thật Khó Lìa Xa. Bao Tâm Sự Còn Đang
                            Dang Dở...
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="7"
                          fill="none"
                          viewBox="0 0 34 7"
                        >
                          <g fill="#A3A3A3" clipPath="url(#clip0_277_1070)">
                            <path d="M3.19 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM16.88 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38zM30.57 6.38a3.19 3.19 0 100-6.38 3.19 3.19 0 000 6.38z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_277_1070">
                              <path fill="#fff" d="M0 0H33.77V6.39H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </i>
          <div className="mainNav__avatar">
            {" "}
            <img src={require("../../assets/images/user.png")} alt="" />
          </div>

          <div className="mainNav__lang">
            <NavLink to="/?lang=vi" className="mainNav__langLink">
              VI
            </NavLink>
            <span>|</span>
            <NavLink to="/?lang=en" className="mainNav__langLink">
              EN
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
