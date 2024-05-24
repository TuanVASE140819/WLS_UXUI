import React from "react";
import "./sideBarProfile.scss";

const SideBarProfile = () => {
  return (
    <div className="sideBarProfile">
      <figure className="sideBarProfile__bg">
        <img src={require("../../assets/images/bg-profile.png")} alt="" />
      </figure>
      <div className="sideBarProfile__wrapper">
        <div className="sideBarProfile__header">
          <figure className="sideBarProfile__userImg">
            <img src={require("../../assets/images/user-profile.png")} alt="" />
          </figure>
          <h4 className="sideBarProfile__name">FPT và những con bot</h4>
          <div className="sideBarProfile__infos">
            <div>
              <span>120</span> bài viết
            </div>
            <div>
              <span>11k</span> follow
            </div>
            <div>
              <span>11k</span> like
            </div>
          </div>
          <div className="sideBarProfile__action">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0487D9"
                  fillRule="evenodd"
                  d="M4.848 1.771a49.319 49.319 0 0114.304-.001c1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.154.17-2.313.297-3.476.383a.389.389 0 00-.297.17l-2.755 4.133a.751.751 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.895 48.895 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V5.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 7.25a.75.75 0 01.75-.75h9a.75.75 0 110 1.5h-9a.75.75 0 01-.75-.75zM7.5 9.5a.75.75 0 000 1.5H12a.75.75 0 100-1.5H7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            <span>Follow</span>
            <div>Mời bạn bè</div>
          </div>
          <p className="sideBarProfile__desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        {/* <div className="sideBarProfile__awards">
          <div className="sideBarProfile__lists">
            <div className="sideBarProfile__list">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  fill="none"
                  viewBox="0 0 26 25"
                >
                  <path
                    fill="#0487D9"
                    fillRule="evenodd"
                    d="M11.41 1.064c.588-1.419 2.592-1.419 3.18 0l2.732 6.596 7.09.572c1.528.123 2.147 2.036.983 3.037l-5.401 4.647 1.649 6.948c.355 1.497-1.265 2.678-2.572 1.877L13 21.018 6.929 24.74c-1.307.802-2.927-.382-2.572-1.877l1.65-6.948L.604 11.27C-.56 10.268.06 8.355 1.587 8.232l7.09-.572 2.733-6.596z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </i>
              <div className="sideBarProfile__text">
                <h4>Tặng sao</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              </div>
            </div>
            <div className="sideBarProfile__list">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="#F189F4"
                    d="M11.719 3.75a2.344 2.344 0 100 4.687h2.344v5.625H4.219a2.344 2.344 0 01-2.344-2.343v-.938a2.344 2.344 0 012.344-2.344H8.21A4.219 4.219 0 0115 3.441a4.219 4.219 0 016.79 4.996h4.929a2.345 2.345 0 012.343 2.344v.938a2.344 2.344 0 01-2.343 2.343H15.937V8.437h2.344a2.344 2.344 0 10-2.343-2.343v2.343h-1.876V6.094A2.344 2.344 0 0011.72 3.75zm2.344 12.187H3.75v8.438a2.813 2.813 0 002.813 2.812h7.5v-11.25zm1.874 0v11.25h8.438a2.813 2.813 0 002.813-2.812v-8.438h-11.25z"
                  ></path>
                </svg>
              </i>
              <div className="sideBarProfile__text">
                <h4>Tặng quà</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              </div>
            </div>
            <div className="sideBarProfile__list">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 28 28"
                >
                  <path
                    fill="#F97821"
                    fillRule="evenodd"
                    d="M10.867 8.848c3.36-4.318 8.61-7.098 14.508-7.098a.875.875 0 01.875.875c0 5.899-2.78 11.148-7.098 14.509a7.875 7.875 0 01-7.777 9.116.875.875 0 01-.875-.875v-4.82A18.48 18.48 0 017.446 17.5H2.625a.875.875 0 01-.875-.875 7.875 7.875 0 019.117-7.777zm6.633-.973a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#F97821"
                    d="M6.138 20.116a.875.875 0 10-1.047-1.404 6.117 6.117 0 00-2.392 5.86.875.875 0 00.73.73 6.116 6.116 0 005.859-2.392.875.875 0 10-1.403-1.047 4.368 4.368 0 01-3.51 1.762c0-1.435.692-2.71 1.763-3.51z"
                  ></path>
                </svg>
              </i>
              <div className="sideBarProfile__text">
                <h4>Nhiệm vụ</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideBarProfile;
