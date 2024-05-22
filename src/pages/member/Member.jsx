import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";
import Friends from "../../components/Friends/Friends";
import Members from "../../components/Member/Member";
const Member = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Members />
        <Ads />
      </div>
    </>
  );
};

export default Member;
