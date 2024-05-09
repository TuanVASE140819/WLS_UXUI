import React from "react";

import "./bannerHome2.scss";

const BannerHome2 = () => {
  return (
    <>
      <div className="banner2">
        <div className="banner2__wrapper">
          <div className="banner2__bg">
            <img src={require("../../assets/images/bg-destop.png")} alt="" />
          </div>
          <div className="banner2__content">
            <h1>
              HỘI NGỘ BẠN BÈM ÔN LẠI KỶ NIỆM
              <br />
              Cùng Weloveschool
              <ul>
                <li>
                  <h3>Tìm trường cũ của bạn thật đơn giản</h3>
                  <p>
                    WeloveSchool giúp bạn Khám phá mái trường xưa nơi bạn từng
                    gắn bó
                  </p>
                </li>
                <li>
                  <h3>Đăng tin hội ngộ bạn cũ</h3>
                  <p>
                    Gửi lời nhắn đến bạn cũ, WeLoveSchool giúp bạn tìm thấy họ
                    Vun đắp tình bạn, cùng nhau viết tiếp những câu chuyện dang
                    dỡ
                  </p>
                </li>
                <li>
                  <h3>sẽ kỉ niệm tại page trường - blog cá nhân</h3>
                  <p>
                    Lưu giữ khoảnh khắc đẹp, chia sẻ kỷ niệm tuổi học trò Khoe
                    ảnh, viết bài, cùng WeloveSchool lưu giữ ký ức tuổi thơ Kết
                    nối công đồng, chia sẻ niềm vui và nổi buồn tuổi học trò
                    chia sẻ khoản khắc cuộc sống, công việc viện tại
                  </p>
                </li>
                <li>
                  <h3>Chia sẽ kỉ niệm tại page trường - blog cá nhân</h3>
                  <p>
                    Lưu giữ khoảnh khắc đẹp, chia sẻ kỷ niệm tuổi học trò Khoe
                    ảnh, viết bài, cùng WeloveSchool lưu giữ ký ức tuổi thơ Kết
                    nối công đồng, chia sẻ niềm vui và nổi buồn tuổi học trò
                    chia sẻ khoản khắc cuộc sống, công việc viện tại
                  </p>
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome2;
