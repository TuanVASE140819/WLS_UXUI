// import { Link, useLocation } from "react-router-dom";
// import MainHeading from "../../components/MainHeading/MainHeading";
import SideBar from "../../components/sideBar/SideBar";
import RelatedPages from "../../components/relatedPages/RelatedPages";
import RelatedPagesAlt from "../../components/relatedPagesAlt/RelatedPagesAlt";
import RelatedArticles from "../../components/relatedArticles/RelatedArticles";
import Hero from "../../components/Hero/Hero";
import SlideSchool from "../../components/SlideSchool/SlideSchool";
import BannerHome from "../../components/BannerHome/BannerHome";
import BannerHome2 from "../../components/BannerHome2/BannerHome2";
const Home = () => {
  return (
    <>
      <Hero />
      <SlideSchool />
      <BannerHome2 />
      <BannerHome />
    </>
  );
};

export default Home;
