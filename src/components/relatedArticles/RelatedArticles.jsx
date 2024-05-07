import React, { useState } from "react";
import "./relatedArticles.scss";
import { Link } from "react-router-dom";
import SideBarVideo from "../sideBarVideo/SideBarVideo";

const RelatedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      category: "",
      imageUrl: require("../../assets/images/post-1.png"),
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      category: "congviec",
      imageUrl: require("../../assets/images/post-1.png"),
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      category: "congviec",
      imageUrl: require("../../assets/images/post-1.png"),
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      category: "congviec",
      imageUrl: require("../../assets/images/post-1.png"),
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredArticles = articles.filter((article) => {
    if (selectedFilter === "all") {
      return true; // Show all articles
    }
    return article.category === selectedFilter;
  });
  return (
    <div className="relatedArticlesWrapper">
      <div className="relatedArticles">
        <div className="relatedArticles__wrapper">
          <div className="relatedArticles__filters">
            <Link
              to="/?filter=all"
              className={`relatedArticles__filterItem ${
                selectedFilter === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("all")}
            >
              All
            </Link>
            <Link
              to="/?filter=congviec"
              className={`relatedArticles__filterItem ${
                selectedFilter === "congviec" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("congviec")}
            >
              Công việc
            </Link>
            {/*  Review */}
            <Link
              to="/?filter=review"
              className={`relatedArticles__filterItem ${
                selectedFilter === "review" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("review")}
            >
              Review
            </Link>
            {/* Học tập */}
            <Link
              to="/?filter=hoctap"
              className={`relatedArticles__filterItem ${
                selectedFilter === "hoctap" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("hoctap")}
            >
              Học tập
            </Link>
            {/* Kết nối */}
            <Link
              to="/?filter=ketnoi"
              className={`relatedArticles__filterItem ${
                selectedFilter === "ketnoi" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("ketnoi")}
            >
              Kết nối
            </Link>
            {/* Ăn uống */}
            <Link
              to="/?filter=anuong"
              className={`relatedArticles__filterItem ${
                selectedFilter === "anuong" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("anuong")}
            >
              Ăn uống
            </Link>
            {/* Du lịch */}
            <Link
              to="/?filter=dulich"
              className={`relatedArticles__filterItem ${
                selectedFilter === "dulich" ? "active" : ""
              }`}
              onClick={() => setSelectedFilter("dulich")}
            >
              Du lịch
            </Link>
          </div>
          <div className="relatedArticles__cardsWrapper">
            <div className="relatedArticles__cards">
              {filteredArticles.length === 0 ? (
                <div className="relatedArticles__noArticles"></div>
              ) : (
                filteredArticles.map((article) => (
                  <div className="relatedArticles__item">
                    <Link to="/post/1" className="relatedArticles__itemLeft">
                      <img
                        src={require("../../assets/images/post-1.png")}
                        alt=""
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </Link>
                    <div className="relatedArticles__itemRight">
                      <Link to="/post/1">
                        <h4 className="relatedArticles__title">
                          "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay
                          Trở Lại"
                        </h4>
                      </Link>
                      <div className="relatedArticles__user">
                        <img
                          src={require("../../assets/images/user.png")}
                          alt=""
                        />
                        <div className="relatedArticles__userText">
                          <h4>Hòa 9x</h4>
                          <p>08/04/2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="relatedArticles__btnContainer">
              <div className="relatedArticles__btn">Xem thêm bảng tin</div>
            </div>
          </div>
        </div>
      </div>
      <SideBarVideo />
    </div>
  );
};

export default RelatedArticles;
