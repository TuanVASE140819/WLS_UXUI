import React from "react";

import SideBarUser from "../../components/sideBarUser/SideBarUser";
import RelatedPages from "../../components/relatedPages/RelatedPages";
import RelatedArticles from "../../components/relatedArticles/RelatedArticles";

const InforUser = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBarUser />
        <div>
          <RelatedPages />
          <RelatedArticles />
        </div>
      </div>
    </>
  );
};

export default InforUser;
