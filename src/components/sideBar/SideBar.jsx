import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sideBar.scss";

import SearchContext from "../../SearchContext";
import { getSchool } from '../../requestMethods';
import LogoFpt from "../../assets/logos/logo-fpt.png";
import LogoNK from "../../assets/logos/logo-nk.png";
import LogoHCM from "../../assets/logos/logo-hcm.png";
import LogoTDT from "../../assets/logos/logo-tonducthang.png";
import LogoIGC from "../../assets/logos/logo-igc.png";

const SideBar = () => {
 
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

  const { setSearchValue } = useContext(SearchContext);

  const [file, setFile] = useState(null);

  const [address, setAddress] = useState({
    province: "",
    district: "",
    ward: "",
  });

  const months = [
    { value: 1, label: "Tháng 1" },
    { value: 2, label: "Tháng 2" },
    { value: 3, label: "Tháng 3" },
    { value: 4, label: "Tháng 4" },
    { value: 5, label: "Tháng 5" },
    { value: 6, label: "Tháng 6" },
    { value: 7, label: "Tháng 7" },
    { value: 8, label: "Tháng 8" },
    { value: 9, label: "Tháng 9" },
    { value: 10, label: "Tháng 10" },
    { value: 11, label: "Tháng 11" },
    { value: 12, label: "Tháng 12" },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  



  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await axios.get(
        "https://vapi.vnappmob.com/api/province"
      );
      setProvinces(response.data.results); 
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${selectedProvince}`
      );
      setDistricts(response.data.results); 
    };

    if (selectedProvince) {
      fetchDistricts();
    }
  }, [selectedProvince, selectedDistrict]);

  useEffect(() => {
    const fetchWards = async () => {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`
      );
      setWards(response.data.results);
    };

    if (selectedDistrict) {
      fetchWards();
    }
  }, [selectedDistrict, selectedWard]);





  // const handleAddressChange = (type, value) => {
  //   let newAddress = { ...address };
  //   if (type === "province") {
  //     setSelectedProvince(value);
  //     setSelectedProvinceName(
  //       provinces
  //         .find((province) => province.province_id === value)
  //         .province_name.replace("Tỉnh ", "")
  //         .replace("Thành phố ", "")
  //     );
  //     newAddress.province = provinces.find(
  //       (province) => province.province_id === value
  //     ).province_name;
  //   } else if (type === "district") {
  //     setSelectedDistrict(value);
  //     setSelectedDistrictName(
  //       districts
  //         .find((district) => district.district_id === value)
  //         .district_name.replace("Quận ", "")
  //         .replace("Huyện ", "")
  //     );
  //     newAddress.district = districts.find(
  //       (district) => district.district_id === value
  //     ).district_name;
  //   } else if (type === "ward") {
  //     setSelectedWard(value);
  //     setSelectedWardName(
  //       wards
  //         .find((ward) => ward.ward_id === value)
  //         .ward_name.replace("Phường ", "")
  //     );
  //     const ward = wards.find((ward) => ward.ward_id === value);
  //     if (ward) {
  //       newAddress.ward = ward.ward_name;
  //     }
  //   } else if (type === "level") {
  //     setSelectLevel(value);
  //   }
  //   setAddress(newAddress);
  // };


  // useEffect(() => {
  //   const fetchSchools = async () => {
  //     try {
  //       const response = await getSchool(
  //         selectedProvinceName,
  //         selectedDistrictName,
  //         selectedWardName,
  //         selectLevel,
  //         "",
  //         1,
  //         10
  //       );
       
  //     } catch (error) {
  //       console.error("Failed to fetch schools: ", error);
  //     }
  //   };

  //   fetchSchools();
  // }, [selectedProvince, selectedDistrict, selectedWard]);

  // nhận giá trị ProvinceName từ selectedProvince
  useEffect(() => {
    if (selectedProvince) {
      const province = provinces.find(
        (province) => province.province_id === selectedProvince
      );
      if (province) {
        setSelectedProvinceName(province.province_name
          .replace("Tỉnh ", "")
          .replace("Thành phố ", "")
        );
      }
    }
  }, [selectedProvince]);
  // nhận giá trị DistrictName từ selectedDistrict
  useEffect(() => {
    if (selectedDistrict) { 
      const district = districts.find(
        (district) => district.district_id === selectedDistrict
      );
      if (district) {
        setSelectedDistrictName(district.district_name
          .replace("Quận ", "")
          .replace("Huyện ", "")
        );
      }
    }
  }, [selectedDistrict]);

  // nhận giá trị WardName từ selectedWard
  useEffect(() => {
    if (selectedWard) {
      const ward = wards.find((ward) => ward.ward_id === selectedWard);
      if (ward) {
        setSelectedWardName(ward.ward_name
          .replace("Phường ", "")
          .replace("Xã ", "")
        );
      }
    }
  }, [selectedWard]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    const response = await getSchool(
      selectedProvinceName || "",
      selectedDistrictName || "",
      selectedWardName || "",
      "Cao đẳng",
      "",
      1,
      10
    );
    
   console.log("response", response);
  };

  console.log("Wards: ", wards);
  return (
    <div className="sideBar">
      <div className="sideBar__wrapper">
        <form className="sideBar__form" onSubmit={handleSubmit}>
          <div className="sideBar__inputWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#6B7280"
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041c.391-.232.773-.48 1.144-.742a19.581 19.581 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 10-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282c.372.263.754.51 1.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
            <select className="sideBar__input"
             onChange={(e) => setSelectedProvince(e.target.value)}
              >
              <option style={{ display: "none" }}>Chọn Tỉnh</option>
              {provinces.map((province) => (
                <option key={province.province_id} value={province.province_id}>
                  {province.province_name}
                </option>
              ))}
            </select>
          </div>
          <div className="sideBar__inputWrapper">
            <select className="sideBar__input"
                disabled={!selectedProvince}
                 onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option style={{ display: "none" }}>Chọn quận / huyện</option>
              {districts.map((district) => (
                <option key={district.district_id} value={district.district_id}>
                  {district.district_name}
                </option>
              ))}
            </select>
          </div>
          <div className="sideBar__inputWrapper">
            <select className="sideBar__input"
              disabled={!selectedDistrict}
                  onChange={(e) => setSelectedWard(e.target.value)}
            >
              <option style={{ display: "none" }}>Chọn phường / xã</option>
              {wards.map((ward) => (
                <option key={ward.ward_id} value={ward.ward_id}>
                  {ward.ward_name}
                </option>
              ))}
            </select>
          </div>
          <div className="sideBar__inputWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#6B7280"
                d="M11.7 2.805a.75.75 0 01.6 0A60.646 60.646 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.953 49.953 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.749.749 0 01-.707 0A50.903 50.903 0 007.5 12.173v-.224a.36.36 0 01.172-.311 54.638 54.638 0 014.653-2.52.75.75 0 00-.65-1.352 56.137 56.137 0 00-4.78 2.589 1.86 1.86 0 00-.86 1.228 49.808 49.808 0 00-4.633-1.527.75.75 0 01-.231-1.337A60.654 60.654 0 0111.7 2.805z"
              ></path>
              <path
                fill="#6B7280"
                d="M13.06 15.473a48.46 48.46 0 017.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 01-.46.71 47.877 47.877 0 00-8.105 4.343.75.75 0 01-.832 0 47.88 47.88 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.12-2.87.255-4.286.92.304 1.83.634 2.726.99v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.9.434 1.346.66.25-.51.436-1.05.55-1.607a1.5 1.5 0 00.14-2.67v-.645a48.567 48.567 0 013.44 1.667 2.25 2.25 0 002.12 0z"
              ></path>
              <path
                fill="#6B7280"
                d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 01-1.286 1.794.75.75 0 01-1.06-1.06l-.001-.001z"
              ></path>
            </svg>
            <select className="sideBar__input" style={{ border: "none" }}
            disabled
            >
              <option style={{ display: "none" }}>Chọn trường</option>
              <option value="fpt">Đại Học FPT</option>
              <option value="fpt">Đại Học Tôn Đức Thắng</option>
              <option value="fpt">Đại Học Cần Thơ</option>
            </select>
          </div>
          <div type="submit" className="sideBar__btnSearch" onClick={() => setSearchValue(
            {
              province: selectedProvinceName,
              district: selectedDistrictName,
              ward: selectedWardName,
              level: selectLevel,
            }
          )}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="none"
              viewBox="0 0 17 17"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M7.438 2.656a4.781 4.781 0 100 9.563 4.781 4.781 0 000-9.563zM1.593 7.437a5.844 5.844 0 1110.334 3.74L15.25 14.5a.531.531 0 11-.75.751l-3.322-3.322a5.844 5.844 0 01-9.584-4.49z"
                clipRule="evenodd"
              ></path>
            </svg>
            Tìm kiếm
          </div>
        </form>

        <section className="sideBar__ratings">
          <h4 className="sideBar__ratingsHeader">
            Bảng xếp hạng trường học <span>truyền cảm hứng</span>
          </h4>
          <form className="sideBar__ratingsSelect">
            <select>
              {months.map((month, index) => (
                <option key={index} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </form>
          <div className="sideBar__ratingsLists">
            <div className="sideBar__ratingsListItem">
              <div className="sideBar__ratingsListItemLeft">
                <i className="sideBar__ratingsIcon star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="36"
                    fill="none"
                    viewBox="0 0 29 36"
                  >
                    <g clipPath="url(#clip0_4_364)">
                      <path
                        fill="#B42D00"
                        d="M7.16 12.12v22.56c0 .59.68.91 1.14.55l5.55-4.45c.36-.29.87-.29 1.22 0l5.55 4.45c.46.37 1.14.04 1.14-.55V12.12H7.16z"
                      ></path>
                      <path
                        fill="#FA3400"
                        d="M7.52 34.95V12.6h14.45v22.34c0 .09-.02.17-.04.24-.16.42-.7.6-1.08.3l-1.74-1.4-2.58-2.07-1.17-.94a.976.976 0 00-1.21 0l-1.17.94-2.58 2.07-1.74 1.4c-.47.37-1.14.05-1.14-.53z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M16.52 12.31v19.71l2.58 2.07V12.31h-2.58zM10.38 12.31v21.78l2.58-2.07V12.31h-2.58z"
                      ></path>
                      <path
                        fill="#000"
                        d="M7.52 14.07v-1.69h14.45v1.63l-.61.09-.62.09c-.45.07-.84.35-1.05.76l-.79 1.6-3.11 6.3c-.51 1.03-1.98 1.03-2.49 0l-.23-.47-.74-1.49-1.24-2.52-1.69-3.42c-.2-.41-.59-.69-1.05-.76l-.83-.12z"
                        opacity="0.2"
                      ></path>
                      <path
                        fill="#F0A50A"
                        d="M13.32 1.4l-3.5 7.08c-.18.37-.53.62-.94.68L1.07 10.3c-1.02.15-1.43 1.4-.69 2.12l5.66 5.51c.29.29.43.7.36 1.1l-1.34 7.79c-.17 1.02.89 1.79 1.81 1.31l6.99-3.68c.36-.19.8-.19 1.16 0l6.99 3.68c.91.48 1.98-.3 1.81-1.31l-1.34-7.79c-.07-.4.06-.82.36-1.1l5.66-5.51c.74-.72.33-1.98-.69-2.12l-7.82-1.14c-.41-.06-.76-.31-.94-.68l-3.5-7.08c-.46-.93-1.78-.93-2.23 0z"
                      ></path>
                      <path
                        fill="#FFE961"
                        d="M22.98 17.23c-.29.29-.43.7-.36 1.1l.12.72.65 3.79.56 3.28c.17 1.02-.89 1.79-1.81 1.31l-2.19-1.15-2.91-1.53-1.89-.99c-.36-.19-.8-.19-1.16 0L7 27.43a1.24 1.24 0 01-1.8-1.31l1.34-7.79c.07-.4-.06-.82-.36-1.1l-.52-.5-1.71-1.67-1.01-.99-2.42-2.36c-.74-.71-.33-1.97.69-2.11l7.27-1.06.55-.08c.4-.06.76-.31.94-.68l.71-1.43L13.47.7c.46-.93 1.78-.93 2.23 0l.21.42.66 1.34 1.12 2.26 1.51 3.06c.18.37.53.62.94.68l4.98.72 2.84.41c1.02.15 1.43 1.4.69 2.12l-5.67 5.52z"
                      ></path>
                      <path
                        fill="#F0901E"
                        d="M13.57 20.38v-7.45l-2.09.96v-2.53l2.39-1.21h2.28v10.22h-2.58v.01z"
                      ></path>
                      <path
                        fill="#FFFEC8"
                        d="M13.3 20.11v-7.45l-2.09.96V11.1l2.39-1.21h2.28v10.22H13.3z"
                      ></path>
                      <g fill="#fff" opacity="0.3">
                        <path d="M16.4 3.25L4.58 15.02l-.95-.92 5.19-5.16.52-.08c.38-.06.71-.29.88-.64l.66-1.34L15.78 2l.62 1.25zM22.81 22.27l-3.22 3.21-2.74-1.43 5.35-5.32.61 3.54zM24.41 9.53L7.2 26.65c-.79.22-1.61-.46-1.46-1.32L7 18.07c.07-.38-.06-.76-.34-1.03l-.48-.47L17.45 5.36l1.42 2.86c.17.34.5.58.88.64l4.66.67z"></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_364">
                        <path fill="#fff" d="M0 0H29.01V35.64H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <div className="sideBar__ratingsListItemText">
                  <Link to="/">Đại học FPT</Link>
                  <div className="sideBar__ratingsListViews">
                    <div className="sideBar__ratingsListUsers">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                        ></path>
                      </svg>
                      <span>8815</span>
                    </div>
                    <div className="sideBar__ratingsListStars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                        ></path>
                      </svg>
                      <span>1244</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar__ratingsListItemRight">
                <img src={LogoFpt} alt="" />
              </div>
            </div>
            <div className="sideBar__ratingsListItem">
              <div className="sideBar__ratingsListItemLeft">
                <i className="sideBar__ratingsIcon star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="36"
                    fill="none"
                    viewBox="0 0 29 36"
                  >
                    <g clipPath="url(#clip0_4_313)">
                      <path
                        fill="#B43200"
                        d="M6.84 11.98v22.3c0 .58.67.9 1.13.54l5.48-4.4c.35-.28.86-.28 1.21 0l5.48 4.4c.45.36 1.13.04 1.13-.54v-22.3H6.84z"
                      ></path>
                      <path
                        fill="#FA3C00"
                        d="M7.19 34.54V12.46h14.28v22.08c0 .09-.02.17-.04.24-.15.41-.69.6-1.07.29l-1.72-1.38-2.55-2.05-1.16-.93a.948.948 0 00-1.19 0l-1.16.93-2.55 2.05-1.72 1.38a.684.684 0 01-1.12-.53z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M16.09 12.16v19.49l2.55 2.05V12.16h-2.55zM10.03 12.16V33.7l2.55-2.05V12.16h-2.55z"
                      ></path>
                      <path
                        fill="#000"
                        d="M7.19 13.9v-1.67h14.28v1.61l-.6.09-.61.09c-.45.07-.83.35-1.03.75l-.78 1.58-3.07 6.23c-.5 1.02-1.96 1.02-2.46 0l-.23-.46-.73-1.48-1.23-2.49-1.67-3.38c-.2-.41-.59-.69-1.03-.75l-.84-.12z"
                        opacity="0.2"
                      ></path>
                      <path
                        fill="gray"
                        d="M13.16 1.38l-3.46 7c-.17.36-.52.61-.92.67l-7.73 1.12c-1.01.15-1.41 1.39-.68 2.1l5.59 5.45c.29.28.42.69.35 1.09L5 26.51c-.17 1.01.88 1.77 1.79 1.3l6.91-3.63c.36-.19.79-.19 1.15 0l6.91 3.63c.9.47 1.96-.29 1.79-1.3l-1.32-7.69c-.07-.4.06-.81.35-1.09l5.59-5.45c.73-.71.33-1.95-.68-2.1l-7.73-1.12c-.4-.06-.75-.31-.93-.67l-3.46-7c-.45-.93-1.76-.93-2.21-.01z"
                      ></path>
                      <path
                        fill="#CCC"
                        d="M22.71 17.03c-.29.28-.42.69-.35 1.09l.09.53.64 3.75.59 3.42c.17 1.01-.88 1.77-1.79 1.3l-2.3-1.21-2.88-1.51-1.73-.91c-.36-.19-.79-.19-1.15 0l-6.91 3.63c-.16.09-.34.13-.5.14-.75.04-1.42-.62-1.28-1.44l1.32-7.7c.07-.4-.06-.81-.35-1.09l-.62-.6-1.69-1.65-1-.98-2.28-2.23c-.73-.71-.33-1.95.68-2.1l6.94-1.01.79-.12c.4-.06.75-.31.93-.67l.9-1.83L13.31.67c.45-.91 1.76-.91 2.21 0l.14.28.65 1.32 1.1 2.23 1.56 3.17c.18.36.53.62.93.67l4.74.69 2.99.44c1.01.15 1.41 1.39.68 2.1l-5.6 5.46z"
                      ></path>
                      <path
                        fill="gray"
                        d="M10.91 19.98v-1.8l2.62-2.33c1.22-1.1 1.62-1.68 1.62-2.39 0-.67-.55-1.1-1.37-1.1-.87 0-1.72.35-2.54 1.03v-2.5c.78-.54 1.71-.82 2.8-.82.96 0 1.8.28 2.53.85.72.55 1.08 1.3 1.08 2.23 0 .68-.15 1.29-.46 1.83-.29.53-.83 1.14-1.6 1.82l-1.18 1.05h3.54v2.12h-7.04v.01z"
                      ></path>
                      <path
                        fill="#F0F0F0"
                        d="M10.67 19.67v-1.8l2.62-2.33c1.22-1.1 1.62-1.68 1.62-2.39 0-.67-.55-1.1-1.37-1.1-.87 0-1.72.35-2.54 1.03v-2.5c.78-.54 1.71-.82 2.8-.82.96 0 1.8.28 2.53.85.72.55 1.08 1.3 1.08 2.23 0 .68-.15 1.29-.46 1.83-.29.53-.83 1.14-1.6 1.82l-1.18 1.05h3.54v2.12h-7.04v.01z"
                      ></path>
                      <g fill="#fff" opacity="0.3">
                        <path d="M16.17 2.82L4.28 14.75l-.95-.93L8.4 8.73l.75-.11c.38-.06.71-.3.88-.64l.86-1.75 4.66-4.67.62 1.26zM22.64 22.02l-3.34 3.35-2.74-1.45 5.46-5.48.62 3.58zM24.1 9.28L6.77 26.66c-.71.04-1.35-.59-1.22-1.37l1.26-7.35c.07-.38-.06-.77-.34-1.04l-.59-.57L17.22 4.95l1.49 3.03c.17.35.5.59.88.64l4.51.66z"></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_313">
                        <path fill="#fff" d="M0 0H28.67V35.23H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <div className="sideBar__ratingsListItemText">
                  <Link to="/">THCS-THPT Nguyễn Khu...</Link>
                  <div className="sideBar__ratingsListViews">
                    <div className="sideBar__ratingsListUsers">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                        ></path>
                      </svg>
                      <span>8815</span>
                    </div>
                    <div className="sideBar__ratingsListStars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                        ></path>
                      </svg>
                      <span>1244</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar__ratingsListItemRight">
                <img src={LogoNK} alt="" />
              </div>
            </div>
            <div className="sideBar__ratingsListItem">
              <div className="sideBar__ratingsListItemLeft">
                <i className="sideBar__ratingsIcon star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="37"
                    fill="none"
                    viewBox="0 0 29 37"
                  >
                    <g clipPath="url(#clip0_4_337)">
                      <path
                        fill="#B43200"
                        d="M7.5 12.58V36c0 .61.68.95 1.14.57l5.54-4.62c.36-.3.86-.3 1.22 0l5.54 4.62c.46.38 1.14.04 1.14-.57V12.58H7.5z"
                      ></path>
                      <path
                        fill="#FA3C00"
                        d="M7.86 36.28v-23.2h14.41v23.2c0 .09-.02.18-.04.25-.15.43-.7.63-1.08.31l-1.73-1.45-2.57-2.15-1.17-.98a.95.95 0 00-1.21 0l-1.17.98-2.57 2.15L9 36.84c-.47.38-1.14.04-1.14-.56z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M16.84 12.78v20.46l2.58 2.15V12.78h-2.58zM10.72 12.78v22.61l2.57-2.15V12.78h-2.57z"
                      ></path>
                      <path
                        fill="#000"
                        d="M7.86 14.6v-1.75h14.41v1.69l-.61.09-.61.09c-.45.07-.84.36-1.04.79l-.79 1.66-3.1 6.54a1.367 1.367 0 01-2.49 0l-.23-.49-.74-1.55-1.24-2.62-1.68-3.55c-.2-.43-.59-.72-1.04-.79l-.84-.11z"
                        opacity="0.2"
                      ></path>
                      <path
                        fill="#DF7135"
                        d="M13.29 1.45L9.8 8.8c-.18.38-.53.65-.93.71l-7.8 1.18c-1.02.15-1.43 1.46-.69 2.21l5.64 5.72c.29.3.43.72.36 1.14l-1.33 8.08c-.17 1.06.89 1.86 1.8 1.36l6.98-3.82c.36-.2.79-.2 1.16 0l6.98 3.82c.91.5 1.98-.31 1.8-1.36l-1.33-8.08c-.07-.42.06-.85.36-1.14l5.64-5.72c.74-.75.33-2.05-.69-2.21l-7.8-1.18c-.4-.06-.75-.33-.94-.71l-3.49-7.35c-.46-.96-1.77-.96-2.23 0z"
                      ></path>
                      <path
                        fill="#EDA748"
                        d="M22.93 17.89c-.29.3-.43.73-.36 1.14l.09.55.65 3.94.59 3.59c.17 1.06-.89 1.86-1.8 1.36l-2.33-1.27-2.91-1.59-1.74-.95c-.36-.2-.79-.2-1.16 0l-6.98 3.82c-.17.09-.34.14-.51.15-.75.05-1.44-.65-1.3-1.51l1.33-8.08c.07-.42-.06-.85-.36-1.14l-.62-.63-1.71-1.73-.99-1.04-2.31-2.34c-.74-.75-.33-2.05.69-2.2l7-1.06.8-.12c.41-.06.75-.33.94-.71l.91-1.92L13.43.72c.46-.96 1.77-.96 2.23 0l.14.29.66 1.39 1.11 2.35 1.58 3.33c.18.38.53.65.94.71l4.78.72 3.02.46c1.02.15 1.43 1.46.69 2.2l-5.65 5.72z"
                      ></path>
                      <path
                        fill="#DF7135"
                        d="M11.1 18.19c.97.66 1.95.98 2.93.98.95 0 1.67-.51 1.67-1.37 0-.76-.6-1.31-1.57-1.31-.57 0-1.09.12-1.54.35v-1.71l2.07-1.87h-3.29v-2.2h6.4v1.97l-1.9 1.75c.5.13.98.39 1.5.86s.87 1.24.87 2.16c0 1.12-.39 2.03-1.18 2.68-.77.66-1.74.99-2.9.99s-2.17-.28-3.05-.85v-2.43h-.01z"
                      ></path>
                      <path
                        fill="#FFE6AA"
                        d="M10.86 17.86c.97.66 1.95.98 2.93.98.95 0 1.67-.51 1.67-1.37 0-.76-.6-1.31-1.57-1.31-.57 0-1.09.12-1.54.35V14.8l2.07-1.87h-3.29v-2.2h6.4v1.97l-1.9 1.75c.5.13.98.39 1.5.86s.87 1.24.87 2.16c0 1.12-.39 2.03-1.18 2.68-.77.66-1.74.99-2.9.99s-2.17-.28-3.05-.85v-2.43h-.01z"
                      ></path>
                      <g fill="#fff" opacity="0.3">
                        <path d="M16.33 3.14L4.3 15.49l-.96-.96 5.13-5.27.76-.11c.39-.06.72-.31.89-.67l.87-1.81 4.71-4.83.63 1.3zM22.87 23.01l-3.37 3.46-2.78-1.5 5.53-5.67.62 3.71zM24.35 9.82L6.83 27.8c-.72.04-1.37-.61-1.24-1.42l1.27-7.6c.07-.39-.06-.8-.34-1.08l-.59-.59L17.39 5.35l1.51 3.13c.17.36.51.61.89.67l4.56.67z"></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_337">
                        <path fill="#fff" d="M0 0H28.95V37H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <div className="sideBar__ratingsListItemText">
                  <Link to="/">THPT Chuyên Lê Hồng P..</Link>
                  <div className="sideBar__ratingsListViews">
                    <div className="sideBar__ratingsListUsers">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                        ></path>
                      </svg>
                      <span>8815</span>
                    </div>
                    <div className="sideBar__ratingsListStars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                        ></path>
                      </svg>
                      <span>1244</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar__ratingsListItemRight">
                <img src={LogoHCM} alt="" />
              </div>
            </div>
            <div className="sideBar__ratingsListItem">
              <div className="sideBar__ratingsListItemLeft">
                <i className="sideBar__ratingsIcon">
                  <span>4</span>
                </i>
                <div className="sideBar__ratingsListItemText">
                  <Link to="/">THPT Chuyên Lê Hồng P...</Link>
                  <div className="sideBar__ratingsListViews">
                    <div className="sideBar__ratingsListUsers">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                        ></path>
                      </svg>
                      <span>8815</span>
                    </div>
                    <div className="sideBar__ratingsListStars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                        ></path>
                      </svg>
                      <span>1244</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar__ratingsListItemRight">
                <img src={LogoTDT} alt="" />
              </div>
            </div>
            <div className="sideBar__ratingsListItem">
              <div className="sideBar__ratingsListItemLeft">
                <i className="sideBar__ratingsIcon">
                  <span>5</span>
                </i>
                <div className="sideBar__ratingsListItemText">
                  <Link to="/">THPT Chuyên Lê Hồng P...</Link>
                  <div className="sideBar__ratingsListViews">
                    <div className="sideBar__ratingsListUsers">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13.75 17.534a8.6 8.6 0 002.406.341 8.56 8.56 0 003.778-.873 3.782 3.782 0 00-6.906-2.285m.722 2.817v-.003c0-1.02-.262-1.98-.722-2.814m.722 2.817v.097a11.291 11.291 0 01-5.845 1.619c-2.136 0-4.136-.591-5.843-1.619v-.1a5.844 5.844 0 0110.966-2.814M11 5.844a3.094 3.094 0 11-6.187 0 3.094 3.094 0 016.187 0zm7.562 2.062a2.406 2.406 0 11-4.812 0 2.406 2.406 0 014.812 0z"
                        ></path>
                      </svg>
                      <span>8815</span>
                    </div>
                    <div className="sideBar__ratingsListStars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#9E9E9E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.523 3.207a.515.515 0 01.954 0l1.947 4.685a.516.516 0 00.436.317l5.058.405a.516.516 0 01.294.906L15.36 12.82a.516.516 0 00-.167.511l1.178 4.936a.516.516 0 01-.77.56l-4.332-2.645a.515.515 0 00-.537 0L6.4 18.828a.515.515 0 01-.77-.559l1.178-4.937a.515.515 0 00-.167-.51L2.787 9.52a.515.515 0 01.295-.906l5.058-.405a.516.516 0 00.435-.317l1.948-4.685z"
                        ></path>
                      </svg>
                      <span>1244</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar__ratingsListItemRight">
                <img src={LogoIGC} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sideBar__relatedPosts">
          <h4 className="sideBar__relatedPostsHeader">Góc kết nối bạn cũ</h4>
          <div className="sideBar__relatedPostsLists">
            <div className="sideBar__relatedPostsListItem">
              <div className="sideBar__relatedPostsListItemHeader">
                <div className="sideBar__relatedPostsListItemUser">
                  <img src={require("../../assets/images/user.png")} alt="" />
                  <div className="sideBar__relatedPostsListItemUserText">
                    <Link to="/"><h4>Hồ Lê Bảo Hân</h4></Link>
                    <p>1 phút trước</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="none"
                  viewBox="0 0 34 34"
                >
                  <path
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.219 17a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0h-.531m5.843 0a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0H17m5.844 0a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0h-.532m7.438 0c0 6.454-5.71 11.688-12.75 11.688-1.222.001-2.44-.16-3.62-.478a8.46 8.46 0 01-5.716 1.497 8.432 8.432 0 01-.671-.092 6.347 6.347 0 001.385-2.868c.128-.648-.188-1.277-.661-1.737C5.567 22.919 4.25 20.1 4.25 17 4.25 10.546 9.96 5.312 17 5.312S29.75 10.546 29.75 17z"
                  ></path>
                </svg>
              </div>
              <div className="sideBar__relatedPostsText">
                <Link to="/"><h4>"Hành Trình Tìm Bạn Cũ Tại Trường FPT"</h4></Link>
                <p>
                  Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin hãy
                  chia sẻ để chúng tôi có thể tìm lại nhau. Một lời nhắn...
                </p>
              </div>
            </div>
            <div className="sideBar__relatedPostsListItem">
              <div className="sideBar__relatedPostsListItemHeader">
                <div className="sideBar__relatedPostsListItemUser">
                  <img src={require("../../assets/images/user.png")} alt="" />
                  <div className="sideBar__relatedPostsListItemUserText">
                    <Link to="/"><h4>Hồ Lê Bảo Hân</h4></Link>
                    <p>1 phút trước</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="none"
                  viewBox="0 0 34 34"
                >
                  <path
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.219 17a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0h-.531m5.843 0a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0H17m5.844 0a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0h-.532m7.438 0c0 6.454-5.71 11.688-12.75 11.688-1.222.001-2.44-.16-3.62-.478a8.46 8.46 0 01-5.716 1.497 8.432 8.432 0 01-.671-.092 6.347 6.347 0 001.385-2.868c.128-.648-.188-1.277-.661-1.737C5.567 22.919 4.25 20.1 4.25 17 4.25 10.546 9.96 5.312 17 5.312S29.75 10.546 29.75 17z"
                  ></path>
                </svg>
              </div>
              <div className="sideBar__relatedPostsText">
              <Link to="/"><h4>"Hành Trình Tìm Bạn Cũ Tại Trường FPT"</h4></Link>
                <p>
                  Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin hãy
                  chia sẻ để chúng tôi có thể tìm lại nhau. Một lời nhắn...
                </p>
              </div>
            </div>
            <div className="sideBar__relatedPostsListItem">
              <div className="sideBar__relatedPostsListItemHeader">
                <div className="sideBar__relatedPostsListItemUser">
                  <img src={require("../../assets/images/user.png")} alt="" />
                  <div className="sideBar__relatedPostsListItemUserText">
                    <Link to="/"><h4>Hồ Lê Bảo Hân</h4></Link>
                    <p>1 phút trước</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="none"
                  viewBox="0 0 34 34"
                >
                  <path
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.219 17a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0h-.531m5.843 0a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0H17m5.844 0a.532.532 0 11-1.063 0 .532.532 0 011.063 0zm0 0h-.532m7.438 0c0 6.454-5.71 11.688-12.75 11.688-1.222.001-2.44-.16-3.62-.478a8.46 8.46 0 01-5.716 1.497 8.432 8.432 0 01-.671-.092 6.347 6.347 0 001.385-2.868c.128-.648-.188-1.277-.661-1.737C5.567 22.919 4.25 20.1 4.25 17 4.25 10.546 9.96 5.312 17 5.312S29.75 10.546 29.75 17z"
                  ></path>
                </svg>
              </div>
              <div className="sideBar__relatedPostsText">
              <Link to="/"><h4>"Hành Trình Tìm Bạn Cũ Tại Trường FPT"</h4></Link>
                <p>
                  Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin hãy
                  chia sẻ để chúng tôi có thể tìm lại nhau. Một lời nhắn...
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SideBar;
