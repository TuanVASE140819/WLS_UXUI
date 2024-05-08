import React from "react";

import SideBarUser from "../../components/sideBarUser/SideBarUser";
import Friends from "../../components/Friends/Friends";
import Ads from "../../components/ads/Ads";
import SchoolFllow from "../../components/schoolFollow/SchoolFollow";
import PersonalPosts from "../../components/Posts/PersonalPosts";

const InforUser = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBarUser />
        <div>
          <Friends />

          <SchoolFllow />
          <PersonalPosts />
        </div>
        <Ads />
      </div>
    </>
  );
};

export default InforUser;
