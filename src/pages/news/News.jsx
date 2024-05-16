// import { Link, useLocation } from "react-router-dom";
// import MainHeading from "../../components/MainHeading/MainHeading";
import SideBar from "../../components/sideBar/SideBar";
import RelatedPages from "../../components/relatedPages/RelatedPages";
import RelatedPagesAlt from "../../components/relatedPagesAlt/RelatedPagesAlt";
import RelatedArticles from "../../components/relatedArticles/RelatedArticles";
import { Helmet } from "react-helmet";

const News = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Helmet>
          <title>News</title>
          <meta
            name="description"
            content="Tin tức mới nhất về các trường đại học, cao đẳng, trung học, tiểu học trên cả nước"
          />
          <meta
            name="keywords"
            content="Tin tức, trường đại học, trường cao đẳng, trường trung học, trường tiểu học"
          />
        </Helmet>
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

export default News;
