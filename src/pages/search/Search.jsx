import SideBar from "../../components/sideBar/SideBar";
import Cards from "../../components/cards/Cards";
import Ads from "../../components/ads/Ads";

const Search = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Cards />
        <Ads />
      </div>
    </>
    
  );
};


export default Search