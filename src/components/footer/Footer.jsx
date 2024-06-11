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
        <div className="footer__links anime">
          <div className="footer__logo">
            <img src={require("../../assets/logos/logo-footer.png")} alt="" />
          </div>
        </div>

        <div className="footer__links anime">
          <h4 className="footer__title">About Us</h4>
          <Link to="/contacts" className="footer__link anime">
            Contact us
          </Link>
          <Link to="/notFound" className="footer__link anime">
            Not Found
          </Link>
          <Link to="/topSchool" className="footer__link anime">
            Top trường học
          </Link>
          <Link to="/searchResults" className="footer__link anime">
            Search Results
          </Link>
          <Link to="/userInfo" className="footer__link anime">
            Thông tin ban
          </Link>
        </div>
        <div className="footer__links anime">
          <h4 className="footer__title">Chính sách</h4>
          <Link to="/forum" className="footer__link anime">
            Diễn đàng
          </Link>
          <Link to="/mission" className="footer__link anime">
            Nhiệm vụ
          </Link>
          <Link to="/" className="footer__link anime">
            How its work
          </Link>
          <Link to="/" className="footer__link anime">
            Goal & Missions
          </Link>
          <Link to="/" className="footer__link anime">
            Event
          </Link>
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