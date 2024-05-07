import React from "react";

import SideBarUser from "../../components/sideBarUser/SideBarUser";
import Friends from "../../components/Friends/Friends";
import Ads from "../../components/ads/Ads";
import SchoolFllow from "../../components/schoolFollow/SchoolFollow";

const InforUser = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBarUser />
        <div>
          <Friends />

          <SchoolFllow />
        </div>
        <Ads />
      </div>
    </>
  );
};

export default InforUser;
