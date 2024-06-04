import React, { useEffect, useState } from "react";
import axios from "axios";

import "./hero.scss";

import { getListSchool } from "../../api/apiServices";
import CollapseList from "../../components/collapseList/CollapseList";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const SlideSchool = () => {
  const { t, i18n } = useTranslation("common");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedWardName, setSelectedWardName] = useState("");
  const [selectLevel, setSelectLevel] = useState("");
  const [searchName, setSearchName] = useState("");
  const [address, setAddress] = useState({
    province: "",
    district: "",
    ward: "",
    level: "",
  });

  const navigate = useNavigate();

  const [schools, setSchools] = useState([]);

  // useEffect(() => {
  //   const fetchProvinces = async () => {
  //     const response = await axios.get(
  //       "https://vapi.vnappmob.com/api/province"
  //     );
  //     setProvinces(response.data.results);
  //   };
  //   fetchProvinces();
  // }, []);

  // useEffect(() => {
  //   const fetchDistricts = async () => {
  //     const response = await axios.get(
  //       `https://vapi.vnappmob.com/api/province/district/${selectedProvince}`
  //     );
  //     setDistricts(response.data.results);
  //   };
  //   if (selectedProvince) {
  //     fetchDistricts();
  //   }
  // }, [selectedProvince]);

  // useEffect(() => {
  //   const fetchWards = async () => {
  //     const response = await axios.get(
  //       `https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`
  //     );
  //     setWards(response.data.results);
  //   };
  //   if (selectedDistrict) {
  //     fetchWards();
  //   }
  // }, [selectedDistrict]);

  // useEffect(() => {
  //   const fetchSchools = async () => {
  //     try {
  //       const response = await getListSchool(
  //         selectedProvinceName,
  //         selectedDistrictName,
  //         selectedWardName,
  //         selectLevel,
  //         searchName,
  //         1,
  //         10
  //       );
  //       setSchools(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch schools: ", error);
  //     }
  //   };

  //   fetchSchools();
  // }, [
  //   selectedProvince,
  //   selectedDistrict,
  //   selectedWard,
  //   selectLevel,
  //   searchName,
  // ]);

  const handleAddressChange = (type, value) => {
    let newAddress = { ...address };
    if (type === "province") {
      setSelectedProvince(value);
      setSelectedProvinceName(
        provinces
          .find((province) => province.province_id === value)
          .province_name.replace("Tỉnh ", "")
          .replace("Thành phố ", "")
      );
      newAddress.province = provinces.find(
        (province) => province.province_id === value
      ).province_name;
    } else if (type === "district") {
      setSelectedDistrict(value);
      setSelectedDistrictName(
        districts
          .find((district) => district.district_id === value)
          .district_name.replace("Quận ", "")
          .replace("Huyện ", "")
      );
      newAddress.district = districts.find(
        (district) => district.district_id === value
      ).district_name;
    } else if (type === "ward") {
      setSelectedWard(value);
      setSelectedWardName(
        wards
          .find((ward) => ward.ward_id === value)
          .ward_name.replace("Phường ", "")
      );
      const ward = wards.find((ward) => ward.ward_id === value);
      if (ward) {
        newAddress.ward = ward.ward_name;
      }
    } else if (type === "level") {
      setSelectLevel(value);
    } else if (type === "name") {
      setSearchName(value);
    }
    setAddress(newAddress);
  };

  console.log("provinces", selectedProvinceName);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/searchResults",
      state: {
        province: selectedProvinceName,
        district: selectedDistrictName,
        ward: selectedWardName,
        level: selectLevel,
        name: document.getElementById("name")
          ? document.getElementById("name").value
          : "",
      },
    });
  };
  return (
    <>
      <div className="hero">
        <div className="hero__wrapper">
          <form className="hero__form" onSubmit={handleSubmit}>
            <div className="hero__header">
              {t("find_old_classmates")}
              <span className="hero__header--highlight"> WeLoveSchool</span>
            </div>
            <div className="hero__search">
              <select
                name="tinh"
                id="tinh"
                className=" hero__search--location hero__select"
                value={selectedProvince}
                onChange={(e) =>
                  handleAddressChange("province", e.target.value)
                }
              >
                <option value="" disabled className="text-[1rem]">
                  {t("province")}
                </option>
                {provinces.map((province) => (
                  <option
                    key={province.province_id}
                    value={province.province_id}
                  >
                    {province.province_name}
                  </option>
                ))}
              </select>
              <select
                name="huyen"
                id="huyen"
                className="hero__select"
                value={selectedDistrict}
                onChange={(e) =>
                  handleAddressChange("district", e.target.value)
                }
              >
                <option value="" disabled className="text-[1rem]">
                  {t("district")}
                </option>
                {districts.map((district) => (
                  <option
                    key={district.district_id}
                    value={district.district_id}
                  >
                    {district.district_name}
                  </option>
                ))}
              </select>
              <select
                name="xa"
                id="xa"
                className="hero__select"
                value={selectedWard}
                onChange={(e) => handleAddressChange("ward", e.target.value)}
              >
                <option value="" disabled className="text-[1rem]">
                  {t("ward")}
                </option>
                {wards.map((ward) => (
                  <option key={ward.ward_id} value={ward.ward_id}>
                    {ward.ward_name}
                  </option>
                ))}
              </select>
              <select name="capHoc" id="capHoc" className="hero__level">
                <option value="0">{t("level")} </option>
                <option value="1">Mầm non</option>
                <option value="2">Tiểu học</option>
                <option value="3">Trung học cơ sở</option>
                <option value="4">Trung học phổ thông</option>
              </select>
              <div className="hero__search--input">
                <input
                  type="text"
                  placeholder={t("input_school")}
                  className="hero__input"
                  onChange={(e) => handleAddressChange("name", e.target.value)}
                />
              </div>
              <div className="hero__search--button">
                <button className="hero__btn">{t("search")}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SlideSchool;
