import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./invitefriends.scss";
import { Link } from "react-router-dom";
import topSchoolImage1 from "../../assets/images/topSchool-1.png";
import topSchoolImage2 from "../../assets/images/topSchool-2.png";
import topSchoolImage3 from "../../assets/images/topSchool-3.png";
import { useTranslation } from "react-i18next";
import SideBar from "../../components/sideBar/SideBar";
const InviteFriends = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="invitefriends">
          <div className="invite-friends">
            <div>Mời bạn bè</div>
            {/* input search */}
            <div className="invitefriends__inputWrapper">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>

            <button className="invite-button">Mời</button>
          </div>
          <div className="freinds-list">
            <div>Danh sách bạn bè</div>
            <div className="freinds-list__item">
              <div className="freinds-list__item__info">
                <h3>Nguyễn Văn A</h3>
                <p>Đã mời</p>
              </div>
              <div className="freinds-list__item__action">
                <button className="invite-button">Mời</button>
              </div>
            </div>
            <div className="freinds-list__item">
              <div className="freinds-list__item__info">
                <h3>Nguyễn Văn A</h3>
                <p>Đã mời</p>
              </div>
              <div className="freinds-list__item__action">
                <button className="invite-button">Mời</button>
              </div>
            </div>
            <div className="freinds-list__item">
              <div className="freinds-list__item__info">
                <h3>Nguyễn Văn A</h3>
                <p>Đã mời</p>
              </div>
              <div className="freinds-list__item__action">
                <button className="invite-button">Mời</button>
              </div>
            </div>
            <div className="freinds-list__item">
              <div className="freinds-list__item__info">
                <h3>Nguyễn Văn A</h3>
                <p>Đã mời</p>
              </div>
            </div>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default InviteFriends;
