import React from "react";
import "./relatedPages.scss";
import { Link } from "react-router-dom";
const RelatedPages = ({header, grid}) => {
  return (
    <div className="relatedPages">
      <div className="relatedPages__wrapper">
        {header && <h4>Bài viết khác</h4>}
        <div className="relatedPages__cards" data-grid={grid}>
          <Link to="/post/1" className="relatedPages__item">
            <figure className="relatedPages__image">
              <img src={require("../../assets/images/article-1.png")} alt="" />
            </figure>
            <h4 className="relatedPages__title">Học hiệu quả với AI</h4>
          </Link>
          <Link to="/post/1"  className="relatedPages__item">
            <figure className="relatedPages__image">
              <img src={require("../../assets/images/article-2.png")} alt="" />
            </figure>
            <h4 className="relatedPages__title">Nhộn nhịp Ngày hội hướng nghiệp của Trường đại học Sư phạm TP.HCM</h4>
          </Link>
          <Link to="/post/1" className="relatedPages__item">
            <figure className="relatedPages__image">
              <img src={require("../../assets/images/article-3.png")} alt="" />
            </figure>
            <h4 className="relatedPages__title">Trào lưu flex điểm hài hước của các chiến thần gen Z</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedPages;
