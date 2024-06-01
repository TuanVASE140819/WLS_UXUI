import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./voting-category.scss";
import { Link } from "react-router-dom";
import topSchoolImage1 from "../../assets/images/topSchool-1.png";
import topSchoolImage2 from "../../assets/images/topSchool-2.png";
import topSchoolImage3 from "../../assets/images/topSchool-3.png";
import { useTranslation } from "react-i18next";
import SideBar from "../../components/sideBar/SideBar";
const VotingCategory = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="voteCategory">
          <Link
            to="/topSchool"
            className="contentTopSchool__card"
            style={{ backgroundImage: `url(${topSchoolImage1})` }}
          >
            <div className="contentTopSchool__text">
              <div className="contentTopSchool__number">
                Top <p>10</p>
              </div>
              <div className="contentTopSchool__contentText">
                <h4>{t("school")}</h4>
                <h2>{t("inspiration")}</h2>
              </div>
            </div>
          </Link>
          <Link
            to="/topSchool"
            className="contentTopSchool__card"
            style={{ backgroundImage: `url(${topSchoolImage2})` }}
          >
            <div className="contentTopSchool__text">
              <div className="contentTopSchool__number">
                Top <p>10</p>
              </div>
              <div className="contentTopSchool__contentText">
                <h4>{t("school")}</h4>
                <h2>{t("inspiration")}</h2>
              </div>
            </div>
          </Link>
          <Link
            to="/topSchool"
            className="contentTopSchool__card"
            style={{ backgroundImage: `url(${topSchoolImage3})` }}
          >
            <div className="contentTopSchool__text">
              <div className="contentTopSchool__number">
                Top <p>10</p>
              </div>
              <div className="contentTopSchool__contentText">
                <h4>{t("school")}</h4>
                <h2>{t("inspiration")}</h2>
              </div>
            </div>
          </Link>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default VotingCategory;
