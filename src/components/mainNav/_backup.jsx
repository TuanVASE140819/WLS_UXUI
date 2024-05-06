import React, { useContext, useState } from "react";
import "./mainNav.scss";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SvgSearch } from "../svgs/SvgSearch";
import { SvgMenu } from "../svgs/SvgMenu";
import ImgDefault from "../../assets/images/img_default.jpg";
import { Context } from "../../context/Context";

const MainNav = () => {
  const { user, dispatch } = useContext(Context);
  // console.log(user);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${keyword.trim().toLowerCase().replace(/\s/g, "+")}`);
  };

  return (
    <nav className="mainNav">
      <div className="mainNav__sticky">
        {/* Top Bar */}
        <section
          className="mainNav__topBar"
          style={{ backgroundColor: user?.isAdmin ? "#333" : "#0f2f7f" }}
        >
          <div className="mainNav__wrapper">
            <div className="mainNav__linksLeft">
              <NavLink
                to="/"
                className="mainNav__logo"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <h2>
                  {user?.isAdmin ? "Admin FITA Documents." : "FITA Documents."}
                </h2>
              </NavLink>
              <Link to="/" className="mainNav__linkAlt">
                Trang chủ
              </Link>
              <NavLink to="/intro" className="mainNav__linkAlt">
                Giới thiệu
              </NavLink>
              {user?.isAdmin && (
                <NavLink to="/createCategory" className="mainNav__linkAlt">
                  Thêm thể loại
                </NavLink>
              )}
              <NavLink to="/write" className="mainNav__linkAlt">
                Tạo tài liệu
              </NavLink>
              {/* {user && (
                <div className="mainNav__linkAlt" onClick={handleLogout}>
                  Đăng xuất
                </div>
              )} */}
            </div>
            <div className="mainNav__aside">
              <form onSubmit={handleSubmit}>
                <div className="mainNav__search">
                  <span className="mainNav__icon mainNav__icon--search">
                    <SvgSearch />
                  </span>
                  <input
                    type="search"
                    placeholder="Tìm kiếm tài liệu"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
              </form>
              {user ? (
                <>
                  <NavLink to="/settings" className="mainNav__profile">
                    <img
                      src={user.profilePic ? user.profilePic : ImgDefault}
                      alt=""
                    />
                  </NavLink>
                  <div className="mainNav__profileMenuWrapper">
                    <div className="mainNav__profileMenu">
                      <Link
                        to="/settings"
                        className="mainNav__profileLink account"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <g clipPath="url(#clip0)">
                            {" "}
                            <path
                              fill="#202842"
                              d="M28.509 31.186v-4.487c0-5.553-3.64-10.272-8.65-11.9a7.916 7.916 0 004.043-6.897C23.902 3.547 20.355 0 16 0S8.098 3.547 8.098 7.902A7.916 7.916 0 0012.14 14.8c-5.016 1.628-8.65 6.347-8.65 11.9v4.487c0 .45.364.814.814.814h23.403a.815.815 0 00.8-.814zM9.713 7.902a6.29 6.29 0 016.28-6.28 6.29 6.29 0 016.281 6.28 6.29 6.29 0 01-6.28 6.281 6.29 6.29 0 01-6.281-6.28zm17.174 22.47H5.1v-3.68c0-6.003 4.885-10.894 10.894-10.894 6.01 0 10.894 4.885 10.894 10.894v3.68z"
                            ></path>{" "}
                          </g>{" "}
                          <defs>
                            {" "}
                            <clipPath id="clip0">
                              {" "}
                              <path fill="#fff" d="M0 0H32V32H0z"></path>{" "}
                            </clipPath>{" "}
                          </defs>{" "}
                        </svg>
                        Hồ sơ của bạn
                      </Link>
                      <div
                        className="mainNav__profileLink"
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <g fill="#202842" clipPath="url(#clip0)">
                            {" "}
                            <path d="M20.177 2.881a.57.57 0 10-.32 1.097c5.804 1.697 9.857 7.11 9.857 13.165 0 7.561-6.152 13.714-13.714 13.714S2.286 24.705 2.286 17.143c0-6.062 4.06-11.477 9.873-13.17a.571.571 0 00-.318-1.097c-6.3 1.833-10.698 7.7-10.698 14.267C1.143 25.335 7.807 32 16 32s14.857-6.665 14.857-14.857c0-6.56-4.392-12.423-10.68-14.262z"></path>{" "}
                            <path d="M16 15.429a.57.57 0 00.571-.572V.571a.57.57 0 10-1.142 0v14.286a.57.57 0 00.571.572z"></path>{" "}
                          </g>{" "}
                          <defs>
                            {" "}
                            <clipPath id="clip0">
                              {" "}
                              <path fill="#fff" d="M0 0H32V32H0z"></path>{" "}
                            </clipPath>{" "}
                          </defs>{" "}
                        </svg>
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "white", marginLeft: "8px" }}>
                    {user.username}
                  </p>
                </>
              ) : (
                <div className="mainNav__linksRight">
                  <NavLink to="/login" className="mainNav__linkAlt">
                    Đăng nhập
                  </NavLink>
                  <span>/</span>
                  <NavLink to="/register" className="mainNav__linkAlt">
                    Đăng ký
                  </NavLink>
                </div>
              )}
              {/* <NavLink to="/language" className="mainNav__language">EN</NavLink> */}
              <div className="mainNav__icon mainNav__icon--menuMobile">
                <SvgMenu />
              </div>
            </div>
          </div>
          {/* Top BarMobile */}
          <div className="mainNav__topBarMobile">
            <div className="mainNav__wrapper">
              <div className="mainNav__linksCenter">
                <NavLink to="/" className="mainNav__linkAlt">
                  Trang chủ
                </NavLink>
                <NavLink to="/intro" className="mainNav__linkAlt">
                  Giới thiệu
                </NavLink>
                <NavLink to="/write" className="mainNav__linkAlt">
                  Viết bài
                </NavLink>
                {user && (
                  <div className="mainNav__linkAlt" onClick={handleLogout}>
                    Đăng xuất
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Menu Bar */}
        <section className="mainNav__menuBar">
          <ul className="mainNav__mainLinks">
            <li className="mainNav__menuItem">
              <NavLink to={`/settings`} className="mainNav__link">
                Hồ sơ của bạn
              </NavLink>
            </li>
            <li className="mainNav__menuItem">
              <NavLink to={`/users/`} className="mainNav__link">
                Người dùng thành viên
              </NavLink>
            </li>
            <li className="mainNav__menuItem">
              <NavLink to="/pendingPost" className="mainNav__link">
                Bài viết đang chờ
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default MainNav;
