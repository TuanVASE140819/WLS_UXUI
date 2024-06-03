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
    {
      image:
        "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1",
      label: "Phan Thu Hà",
      value: "Phan Thu Hà1",
    },
    {
      image:
        "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1",
      label: "Phan Thu Hà",
      value: "Phan Thu Hà2",
    },
    {
      image:
        "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1",
      label: "Phan Thu Hà",
      value: "Phan Thu Hà3",
    },

    {
      image:
        "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1",
      label: "Phan Thu Hà",
      value: "Phan Thu Hà4",
    },
    {
      image:
        "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1",
      label: "Phan Thu Hà",
      value: "Phan Thu Hà5",
    },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="invitefriends">
          <div className="invitefriends__content">
            <div className="invitefriends__inputWrapper">
              <h2
                className="invitefriends__title"
                style={{ marginBottom: "20px" }}
              >
                Mời bạn bè
              </h2>
              <div className="invitefriends__input">
                {/* <p>Selected Options: {selectedOptions.join(", ")}</p> */}
                <input
                  type="text"
                  placeholder="Tìm kiếm trong danh sách bạn bè"
                  value={selectedOptions.join(", ")}
                />
                <button className="invitefriends__button">Mời</button>
              </div>
            </div>
            <MultiSelect data={options} onChange={handleChange} />
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default InviteFriends;
