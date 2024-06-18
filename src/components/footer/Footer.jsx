import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { SvgFaceBook } from '../svgs/SvgFaceBook';
import { SvgYoutube } from '../svgs/SvgYoutube';
import { SvgInstagram } from '../svgs/SvgInstagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div
          className="footer__links anime"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="footer__logo">
            <img
              src={require("../../assets/logos/logo-footer.png")}
              alt=""
              style={{ width: "250px" }}
            />
          </div>
        </div>

        <div className="footer__links anime">
          <h4 className="footer__title">Menu</h4>
          <Link
            to="https://bluepink.gitbook.io/weloveschool"
            className="footer__link anime"
          >
            Giới thiệu
          </Link>
          <Link to="/notFound" className="footer__link anime">
            Tìm bạn cũ
          </Link>
          <Link to="/topSchool" className="footer__link anime">
            Bảng xếp hạng
          </Link>
          <Link to="/events" className="footer__link anime">
            Sự kiện
          </Link>
          <Link to="/contacts" className="footer__link anime">
            Liên hệ
          </Link>
        </div>
        <div className="footer__links anime">
          <h4 className="footer__title"> </h4>
          <Link
            to="https://bluepink.gitbook.io/weloveschool/huong-dan-s-dung/quan-ly-tai-khoan"
            className="footer__link anime"
          >
            Hướng dẫn
          </Link>
          <Link
            to="https://bluepink.gitbook.io/weloveschool"
            className="footer__link anime"
          >
            Chính sách
          </Link>
          <Link to="https://www.youtube.com/" className="footer__link anime">
            Video
          </Link>
          <Link to="https://vnexpress.net/" className="footer__link anime">
            Tin tức
          </Link>
          {/* <Link to="/" className="footer__link anime">
            Event
          </Link> */}
        </div>
        <div className="footer__links anime">
          <h4 className="footer__title">Social</h4>
          <div className="footer__icons anime">
            <a href="https://www.facebook.com" className="footer__icon">
              <SvgFaceBook />
            </a>
            <a href="https://www.youtube.com" className="footer__icon">
              <SvgYoutube />
            </a>
            <a href="https://www.instagram.com" className="footer__icon">
              <SvgInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom anime">
        <p className="footer__text">
          Bản quyền © WeLoveSchool. Đã đăng ký Bản quyền
        </p>
      </div>
    </footer>
  );
}

export default Footer