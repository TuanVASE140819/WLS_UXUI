import React from "react";

import "./hero.scss";
import CollapseList from "../../components/collapseList/CollapseList";

const SlideSchool = () => {
  const items = [
    {
      header: "Câu hỏi 1",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month! 1",
    },
    {
      header: "Câu hỏi 2",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics 2",
    },
    {
      header: "Câu hỏi 3",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the SemanticsFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month! 3",
    },
    {
      header: "Câu hỏi 4",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the SemanticsFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month! 3",
    },
    {
      header: "Câu hỏi 5",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the SemanticsFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month! 3",
    },
    {
      header: "Câu hỏi 6",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the SemanticsFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month! 3",
    },
    {
      header: "Câu hỏi 7",
      content:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the SemanticsFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month! 3",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="hero__wrapper">
          <form className="hero__form">
            <div className="hero__header">
              Tìm bạn học cũ chưa bao giờ dễ dàng hơn với{" "}
              <span className="hero__header--highlight"> WeLoveSchool</span>
            </div>
            <div className="hero__search">
              <select
                name="tinh"
                id="tinh"
                className=" hero__search--location hero__select"
              >
                <option value="0">Tỉnh/Thành phố</option>
                <option value="1">Hà Nội</option>
                <option value="2">Hồ Chí Minh</option>
                <option value="3">Đà Nẵng</option>
                <option value="4">Hải Phòng</option>
              </select>
              <select name="huyen" id="huyen" className="hero__select">
                <option value="0">Quận/Huyện</option>
                <option value="1">Ba Đình</option>
                <option value="2">Cầu Giấy</option>
                <option value="3">Hai Bà Trưng</option>
                <option value="4">Hoàn Kiếm</option>
              </select>
              <select name="xa" id="xa" className="hero__select">
                <option value="0">Xã/Phường</option>
                <option value="1">Cống Vị</option>
                <option value="2">Điện Biên</option>
                <option value="3">Đội Cấn</option>
              </select>
              <select name="capHoc" id="capHoc" className="hero__level">
                <option value="0">Cấp học</option>
                <option value="1">Mầm non</option>
                <option value="2">Tiểu học</option>
                <option value="3">Trung học cơ sở</option>
                <option value="4">Trung học phổ thông</option>
              </select>
              <div className="hero__search--input">
                <input
                  type="text"
                  placeholder="Nhập tên trường"
                  className="hero__input"
                />
              </div>
              <div className="hero__search--button">
                <button className="hero__btn">Tìm kiếm</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SlideSchool;
