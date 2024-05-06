import React from "react";
import "./searchResults.scss";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";
import CardsAlt from "../../components/CardsAlt/CardsAlt";

const SearchResults = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <CardsAlt />
        <Ads />
      </div>
    </>
  );
};

export default SearchResults;
