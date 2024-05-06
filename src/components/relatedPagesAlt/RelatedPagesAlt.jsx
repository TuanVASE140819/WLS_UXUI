import React from "react";
import "./relatedPagesAlt.scss";
import { Link } from "react-router-dom";
const RelatedPagesAlt = () => {
  return (
    <div className="relatedPagesAlt">
      <div className="relatedPagesAlt__wrapper">
        <h4 style={{ paddingLeft: "20px"}}>Bài viết khác</h4>
        <div className="relatedPagesAlt__cards">
          <Link to="/post/1" className="relatedPagesAlt__item">
            <figure className="relatedPagesAlt__image">
              <img src={require("../../assets/images/relatedPages-1.png")} alt="" />
            </figure>
            <h4 className="relatedPagesAlt__title">Khám phá Điểm đến Slow Travel- Kỳ nghỉ để tận hưởng cuộc sống chậm rãi và bền vững"</h4>
          </Link>
          <Link to="/post/1"  className="relatedPagesAlt__item">
            <figure className="relatedPagesAlt__image">
              <img src={require("../../assets/images/relatedPages-2.png")} alt="" />
            </figure>
            <h4 className="relatedPagesAlt__title">"Du lịch Xanh: Hành trình tìm kiếm cân bằng giữa trải nghiệm du lịch và bảo vệ môi trường"</h4>
          </Link>
          <Link to="/post/1" className="relatedPagesAlt__item">
            <figure className="relatedPagesAlt__image">
              <img src={require("../../assets/images/relatedPages-3.png")} alt="" />
            </figure>
            <h4 className="relatedPagesAlt__title">"Du lịch Sinh thái và Sống Xanh: Góc nhìn mới về việc khám phá thế giới và tạo ra ảnh hưởng tích cực"</h4>
          </Link>
          <Link to="/post/1" className="relatedPagesAlt__item">
            <figure className="relatedPagesAlt__image">
              <img src={require("../../assets/images/relatedPages-4.png")} alt="" />
            </figure>
            <h4 className="relatedPagesAlt__title">Khám phá bản thân thông qua những trải nghiệm du lịch và gặp gỡ văn hóa mới tại....</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedPagesAlt;
