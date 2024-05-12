import React, { useEffect, useState } from "react";
import "./searchResults.scss";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";
import CardsAlt from "../../components/CardsAlt/CardsAlt";
import { useLocation } from "react-router-dom";
import { getListSchool } from "../../api/apiServices";

const SearchResults = () => {
  const location = useLocation();
  const { state } = location;
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 20; // Số lượng sản phẩm trên mỗi trang
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const { province, district, ward, level, name } = state;
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải mới

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getListSchool(
          province,
          district,
          ward,
          level,
          name,
          currentPage + 1,
          productsPerPage
        );
        const responseData = response.data;
        const responsePaging = response.paging.totalItems;
        setData(responseData);
        const calculatedPageCount = Math.ceil(responsePaging / productsPerPage);
        setPageCount(calculatedPageCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage, province, district, ward]);

  return (

    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <CardsAlt  data={data} />
        <Ads />
      </div>
    </>
  );
};

export default SearchResults;
