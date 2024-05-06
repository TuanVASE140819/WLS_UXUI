// import { Link, useLocation } from "react-router-dom";
// import MainHeading from "../../components/MainHeading/MainHeading";
import SideBar from "../../components/sideBar/SideBar";
import RelatedPages from "../../components/relatedPages/RelatedPages";
import RelatedPagesAlt from "../../components/relatedPagesAlt/RelatedPagesAlt";
import RelatedArticles from "../../components/relatedArticles/RelatedArticles";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div>
          <RelatedPages />
          <RelatedArticles />
        </div>
      </div>
      <RelatedPagesAlt />
    </>
    
  );
};

export default Home;
