import React from "react";
import "./relatedArticles.scss";
import { Link } from "react-router-dom";
import SideBarVideo from "../sideBarVideo/SideBarVideo";

const RelatedArticles = () => {
  return (
    <div className="relatedArticlesWrapper">
      <div className="relatedArticles">
        <div className="relatedArticles__wrapper">
          <div className="relatedArticles__filters">
            <Link to="/?filter=all" className="relatedArticles__filterItem active">
              All
            </Link>
            <Link to="/?filter=congviec" className="relatedArticles__filterItem">
              Công việc
            </Link>
            <Link to="/?filter=review" className="relatedArticles__filterItem">
              Review
            </Link>
            <Link to="/?filter=hoctap" className="relatedArticles__filterItem">
              Học tập
            </Link>
            <Link to="/?filter=ketnoi" className="relatedArticles__filterItem">
              Kết nối
            </Link>
            <Link to="/?filter=anuong" className="relatedArticles__filterItem">
              Ăn uống
            </Link>
            <Link to="/?filter=dulich" className="relatedArticles__filterItem">
              Du lịch
            </Link>
          </div>
          <div className="relatedArticles__cardsWrapper">
            <div className="relatedArticles__cards">
              <div className="relatedArticles__item">
                <Link to="/post/1" className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-1.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                  <Link to="/post/1"><h4 className="relatedArticles__title">"Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-2.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-3.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-4.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-5.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-6.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-7.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-8.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-9.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relatedArticles__item">
                <Link to="/post/1"  className="relatedArticles__itemLeft">
                  <img src={require("../../assets/images/post-10.png")} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                  </p>
                </Link>
                <div className="relatedArticles__itemRight">
                <Link to="/post/1"><h4 className="relatedArticles__title">"Dấu ấn Trường Xưa vào năm 1995</h4></Link>
                  <div className="relatedArticles__user">
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <div className="relatedArticles__userText">
                      <h4>Hòa 9x</h4>
                      <p>08/04/2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relatedArticles__btnContainer">
              <div className="relatedArticles__btn">
                Xem thêm bảng tin
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBarVideo />
    </div>
  );
};

export default RelatedArticles;
