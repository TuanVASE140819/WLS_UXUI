import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import Ads from "../../components/ads/Ads";
import "./event.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import EventsRight from "../../components/Events/Events";

const Events = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Helmet
          title="Events"
          meta={[
            {
              name: "description",
              content: "Tin tức mới nhất về các sự kiện âm nhạc, âm nhạc", // Description
            },
            {
              name: "keywords",
              content:
                "Tin tức, sự kiện âm nhạc, âm nhạc, blackpink, lời mời đặc biệt, chọn 1 trong 3 nước để biểu diễn, Hàn Quốc, Việt Nam, Trung Quốc, Campuchia, Thái Lan, Lào, Philipin", // Keywords
            },
          ]}
        />

        <SideBarEvents />
        <div className="events">
          <div className="events__wrapper">
            <div className="events__items">
              <Link to="/event-vote" className="events__item">
                <div className="events__bg-image">
                  <figure className="">
                    <img
                      src={require("../../assets/images/events-1.png")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="events__content">
                  <p>Cảm xúc vào tận cùng: </p>
                  <p>Sự kiện âm nhạc đang phát sóng</p>
                </div>
              </Link>
              <Link to="/event-vote" className="events__item">
                <div className="events__bg-image">
                  <figure className="">
                    <img
                      src={require("../../assets/images/events-1.png")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="events__content">
                  <p>Cảm xúc vào tận cùng: </p>
                  <p>Sự kiện âm nhạc đang phát sóng</p>
                </div>
              </Link>
              <Link to="/event-vote" className="events__item">
                <div className="events__bg-image">
                  <figure className="">
                    <img
                      src={require("../../assets/images/events-1.png")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="events__content">
                  <p>Cảm xúc vào tận cùng: </p>
                  <p>Sự kiện âm nhạc đang phát sóng</p>
                </div>
              </Link>
              <Link to="/event-vote" className="events__item">
                <div className="events__bg-image">
                  <figure className="">
                    <img
                      src={require("../../assets/images/events-1.png")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="events__content">
                  <p>Cảm xúc vào tận cùng: </p>
                  <p>Sự kiện âm nhạc đang phát sóng</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <EventsRight />
      </div>
    </>
  );
};

export default Events;
