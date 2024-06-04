import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import Ads from "../../components/ads/Ads";

import { SvgGift } from "../../components/svgs/SvgGift";
import CollapseList from "../../components/collapseList/CollapseList";
import MissionList from "../../components/missionList/MissionList";
import { act } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./SuggestToFriends.scss";

const data = [
  {
    id: 1,
    name: "Thảo Mộc",
    school: "Bảo Lộc",
    image: require("../../assets/images/cards-1.png"),
  },
  {
    id: 2,
    name: "Thảo Mộc",
    school: "Bảo Lộc",
    image: require("../../assets/images/cards-1.png"),
  },
  {
    id: 3,
    name: "Thảo Mộc",
    school: "Bảo Lộc",
    image: require("../../assets/images/cards-1.png"),
  },
  {
    id: 4,
    name: "Thảo Mộc",
    school: "Bảo Lộc",
    image: require("../../assets/images/cards-1.png"),
  },
  {
    id: 5,
    name: "Thảo Mộc",
    school: "Bảo Lộc",
    image: require("../../assets/images/cards-1.png"),
  },
  {
    id: 6,
    name: "Thảo Mộc",
    school: "Bảo Lộc",
    image: require("../../assets/images/cards-1.png"),
  },
];
const SuggestToFriends = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="suggestToFriends">
          <div className="suggestToFriends__wrapper">
            <h3 className="suggestToFriends__titleHeader">Gợi ý bạn bè </h3>
            <div className="suggestToFriends__items">
              {data.map((item) => (
                <div className="suggestToFriends__item">
                  <div className="suggestToFriends__info">
                    <figure className="suggestToFriends__image">
                      <img
                        src={item.image}
                        alt=""
                        style={{
                          objectFit: "cover",
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </figure>

                    <div className="suggestToFriends__content">
                      <div className="suggestToFriends__name">{item.name}</div>
                      <div className="suggestToFriends__school">
                        {item.school}
                      </div>
                    </div>
                  </div>

                  <div className="suggestToFriends__btns">
                    <button className="suggestToFriends__btn">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.348 0.521002C5.71613 0.173402 8.10649 -0.000728065 10.5 2.2879e-06C12.93 2.2879e-06 15.317 0.178002 17.652 0.520002C19.63 0.812002 21 2.544 21 4.49V10.51C21 12.456 19.63 14.188 17.652 14.48C16.4983 14.6491 15.3389 14.7768 14.176 14.863C14.1168 14.8669 14.0593 14.8842 14.0079 14.9137C13.9564 14.9431 13.9123 14.984 13.879 15.033L11.124 19.166C11.0555 19.2687 10.9627 19.3529 10.8539 19.4112C10.745 19.4694 10.6235 19.4999 10.5 19.4999C10.3765 19.4999 10.255 19.4694 10.1461 19.4112C10.0373 19.3529 9.94449 19.2687 9.876 19.166L7.121 15.033C7.08768 14.984 7.04361 14.9431 6.99214 14.9137C6.94068 14.8842 6.88317 14.8669 6.824 14.863C5.66113 14.7765 4.50172 14.6484 3.348 14.479C1.37 14.189 0 12.455 0 10.509V4.491C0 2.545 1.37 0.811002 3.348 0.521002ZM5.25 6C5.25 5.80109 5.32902 5.61032 5.46967 5.46967C5.61032 5.32902 5.80109 5.25 6 5.25H15C15.1989 5.25 15.3897 5.32902 15.5303 5.46967C15.671 5.61032 15.75 5.80109 15.75 6C15.75 6.19891 15.671 6.38968 15.5303 6.53033C15.3897 6.67098 15.1989 6.75 15 6.75H6C5.80109 6.75 5.61032 6.67098 5.46967 6.53033C5.32902 6.38968 5.25 6.19891 5.25 6ZM6 8.25C5.80109 8.25 5.61032 8.32902 5.46967 8.46967C5.32902 8.61032 5.25 8.80109 5.25 9C5.25 9.19891 5.32902 9.38968 5.46967 9.53033C5.61032 9.67098 5.80109 9.75 6 9.75H10.5C10.6989 9.75 10.8897 9.67098 11.0303 9.53033C11.171 9.38968 11.25 9.19891 11.25 9C11.25 8.80109 11.171 8.61032 11.0303 8.46967C10.8897 8.32902 10.6989 8.25 10.5 8.25H6Z"
                          fill="#3D92D1"
                        />
                      </svg>
                    </button>

                    <button className="suggestToFriends__btn">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 6.375C5.25 5.28098 5.6846 4.23177 6.45818 3.45818C7.23177 2.6846 8.28098 2.25 9.375 2.25C10.469 2.25 11.5182 2.6846 12.2918 3.45818C13.0654 4.23177 13.5 5.28098 13.5 6.375C13.5 7.46902 13.0654 8.51823 12.2918 9.29182C11.5182 10.0654 10.469 10.5 9.375 10.5C8.28098 10.5 7.23177 10.0654 6.45818 9.29182C5.6846 8.51823 5.25 7.46902 5.25 6.375ZM2.25 19.125C2.25 17.2353 3.00067 15.4231 4.33686 14.0869C5.67306 12.7507 7.48533 12 9.375 12C11.2647 12 13.0769 12.7507 14.4131 14.0869C15.7493 15.4231 16.5 17.2353 16.5 19.125V19.128L16.499 19.247C16.4969 19.3742 16.4624 19.4987 16.3989 19.6089C16.3354 19.7191 16.245 19.8114 16.136 19.877C14.0952 21.106 11.7573 21.7536 9.375 21.75C6.903 21.75 4.589 21.066 2.615 19.877C2.50585 19.8115 2.41517 19.7193 2.35149 19.6091C2.28781 19.4989 2.25323 19.3743 2.251 19.247L2.25 19.125ZM18.75 7.5C18.75 7.30109 18.671 7.11032 18.5303 6.96967C18.3897 6.82902 18.1989 6.75 18 6.75C17.8011 6.75 17.6103 6.82902 17.4697 6.96967C17.329 7.11032 17.25 7.30109 17.25 7.5V9.75H15C14.8011 9.75 14.6103 9.82902 14.4697 9.96967C14.329 10.1103 14.25 10.3011 14.25 10.5C14.25 10.6989 14.329 10.8897 14.4697 11.0303C14.6103 11.171 14.8011 11.25 15 11.25H17.25V13.5C17.25 13.6989 17.329 13.8897 17.4697 14.0303C17.6103 14.171 17.8011 14.25 18 14.25C18.1989 14.25 18.3897 14.171 18.5303 14.0303C18.671 13.8897 18.75 13.6989 18.75 13.5V11.25H21C21.1989 11.25 21.3897 11.171 21.5303 11.0303C21.671 10.8897 21.75 10.6989 21.75 10.5C21.75 10.3011 21.671 10.1103 21.5303 9.96967C21.3897 9.82902 21.1989 9.75 21 9.75H18.75V7.5Z"
                          fill="#0487D9"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Ads />
      </div>
    </>
  );
};

export default SuggestToFriends;
