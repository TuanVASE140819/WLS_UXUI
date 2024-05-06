import Ads from "../../components/ads/Ads";
import RelatedPagesAlt from "../../components/relatedPagesAlt/RelatedPagesAlt";
import SideBar from "../../components/sideBar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./post.scss";

const Post = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <SinglePost />
        <Ads />
      </div>
      <RelatedPagesAlt />
    </>
  );
};

export default Post;
