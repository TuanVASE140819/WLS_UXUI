import React, { useState } from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./invitefriends.scss";
import { Link } from "react-router-dom";
import topSchoolImage1 from "../../assets/images/topSchool-1.png";
import topSchoolImage2 from "../../assets/images/topSchool-2.png";
import topSchoolImage3 from "../../assets/images/topSchool-3.png";
import { useTranslation } from "react-i18next";
import SideBar from "../../components/sideBar/SideBar";
import MultiSelect from "../MutiSelect/MutiSelect";
const InviteFriends = () => {
  const { t, i18n } = useTranslation("common");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="invitefriends">
          <div className="invitefriends__content">
            <div className="invitefriends__header">
              <h2>Mời bạn bè</h2>
              <p value={selectedOptions.join(", ")} readOnly />
              <button>{t("invite")}</button>
            </div>

            <MultiSelect data={options} onChange={handleChange} />
            <p>Selected Options: {selectedOptions.join(", ")}</p>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default InviteFriends;
