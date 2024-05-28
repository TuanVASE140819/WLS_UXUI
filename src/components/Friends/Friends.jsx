import React, { useContext } from "react";
import "./friends.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../SearchContext";
const Friends = () => {
  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <div className="friends">
      <div className="friends__wrapper">
        <h3 className="friends__titleHeader">Bạn bè </h3>
        <div className="friends__items">
          <div className="friends__item">
            <figure className="friends__image">
              <img
                src={require("../../assets/images/cards-1.png")}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
            </figure>

            <div className="friends__name">Thảo Mộc</div>

            <div className="friends__btns">
              <button className="friends__btn">
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

              <button className="friends__btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 2.25C9.28103 2.25 8.23182 2.6846 7.45823 3.45818C6.68464 4.23177 6.25004 5.28098 6.25004 6.375C6.25004 7.46902 6.68464 8.51823 7.45823 9.29182C8.23182 10.0654 9.28103 10.5 10.375 10.5C11.4691 10.5 12.5183 10.0654 13.2919 9.29182C14.0654 8.51823 14.5 7.46902 14.5 6.375C14.5 5.28098 14.0654 4.23177 13.2919 3.45818C12.5183 2.6846 11.4691 2.25 10.375 2.25ZM10.375 12C9.42911 12 8.49263 12.1883 7.62026 12.5541C6.74788 12.9198 5.95706 13.4556 5.29393 14.1302C4.6308 14.8047 4.10863 15.6046 3.75789 16.4831C3.40715 17.3616 3.23485 18.3012 3.25104 19.247C3.25317 19.3742 3.28759 19.4987 3.3511 19.6089C3.4146 19.7191 3.50508 19.8114 3.61404 19.877C5.65484 21.106 7.99278 21.7536 10.375 21.75C12.847 21.75 15.161 21.066 17.135 19.877C17.2442 19.8115 17.3349 19.7193 17.3986 19.6091C17.4622 19.4989 17.4968 19.3743 17.499 19.247L17.5 19.127V19.125C17.5 17.2353 16.7494 15.4231 15.4132 14.0869C14.077 12.7507 12.2647 12 10.375 12ZM16 9.75C15.8011 9.75 15.6104 9.82902 15.4697 9.96967C15.3291 10.1103 15.25 10.3011 15.25 10.5C15.25 10.6989 15.3291 10.8897 15.4697 11.0303C15.6104 11.171 15.8011 11.25 16 11.25H22C22.199 11.25 22.3897 11.171 22.5304 11.0303C22.671 10.8897 22.75 10.6989 22.75 10.5C22.75 10.3011 22.671 10.1103 22.5304 9.96967C22.3897 9.82902 22.199 9.75 22 9.75H16Z"
                    fill="#D13D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="friends__item">
            <figure className="friends__image">
              <img
                src={require("../../assets/images/cards-1.png")}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
            </figure>

            <div className="friends__name">Thảo Mộc</div>

            <div className="friends__btns">
              <button className="friends__btn">
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

              <button className="friends__btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 2.25C9.28103 2.25 8.23182 2.6846 7.45823 3.45818C6.68464 4.23177 6.25004 5.28098 6.25004 6.375C6.25004 7.46902 6.68464 8.51823 7.45823 9.29182C8.23182 10.0654 9.28103 10.5 10.375 10.5C11.4691 10.5 12.5183 10.0654 13.2919 9.29182C14.0654 8.51823 14.5 7.46902 14.5 6.375C14.5 5.28098 14.0654 4.23177 13.2919 3.45818C12.5183 2.6846 11.4691 2.25 10.375 2.25ZM10.375 12C9.42911 12 8.49263 12.1883 7.62026 12.5541C6.74788 12.9198 5.95706 13.4556 5.29393 14.1302C4.6308 14.8047 4.10863 15.6046 3.75789 16.4831C3.40715 17.3616 3.23485 18.3012 3.25104 19.247C3.25317 19.3742 3.28759 19.4987 3.3511 19.6089C3.4146 19.7191 3.50508 19.8114 3.61404 19.877C5.65484 21.106 7.99278 21.7536 10.375 21.75C12.847 21.75 15.161 21.066 17.135 19.877C17.2442 19.8115 17.3349 19.7193 17.3986 19.6091C17.4622 19.4989 17.4968 19.3743 17.499 19.247L17.5 19.127V19.125C17.5 17.2353 16.7494 15.4231 15.4132 14.0869C14.077 12.7507 12.2647 12 10.375 12ZM16 9.75C15.8011 9.75 15.6104 9.82902 15.4697 9.96967C15.3291 10.1103 15.25 10.3011 15.25 10.5C15.25 10.6989 15.3291 10.8897 15.4697 11.0303C15.6104 11.171 15.8011 11.25 16 11.25H22C22.199 11.25 22.3897 11.171 22.5304 11.0303C22.671 10.8897 22.75 10.6989 22.75 10.5C22.75 10.3011 22.671 10.1103 22.5304 9.96967C22.3897 9.82902 22.199 9.75 22 9.75H16Z"
                    fill="#D13D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="friends__item">
            <figure className="friends__image">
              <img
                src={require("../../assets/images/cards-1.png")}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
            </figure>

            <div className="friends__name">Thảo Mộc</div>

            <div className="friends__btns">
              <button className="friends__btn">
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

              <button className="friends__btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 2.25C9.28103 2.25 8.23182 2.6846 7.45823 3.45818C6.68464 4.23177 6.25004 5.28098 6.25004 6.375C6.25004 7.46902 6.68464 8.51823 7.45823 9.29182C8.23182 10.0654 9.28103 10.5 10.375 10.5C11.4691 10.5 12.5183 10.0654 13.2919 9.29182C14.0654 8.51823 14.5 7.46902 14.5 6.375C14.5 5.28098 14.0654 4.23177 13.2919 3.45818C12.5183 2.6846 11.4691 2.25 10.375 2.25ZM10.375 12C9.42911 12 8.49263 12.1883 7.62026 12.5541C6.74788 12.9198 5.95706 13.4556 5.29393 14.1302C4.6308 14.8047 4.10863 15.6046 3.75789 16.4831C3.40715 17.3616 3.23485 18.3012 3.25104 19.247C3.25317 19.3742 3.28759 19.4987 3.3511 19.6089C3.4146 19.7191 3.50508 19.8114 3.61404 19.877C5.65484 21.106 7.99278 21.7536 10.375 21.75C12.847 21.75 15.161 21.066 17.135 19.877C17.2442 19.8115 17.3349 19.7193 17.3986 19.6091C17.4622 19.4989 17.4968 19.3743 17.499 19.247L17.5 19.127V19.125C17.5 17.2353 16.7494 15.4231 15.4132 14.0869C14.077 12.7507 12.2647 12 10.375 12ZM16 9.75C15.8011 9.75 15.6104 9.82902 15.4697 9.96967C15.3291 10.1103 15.25 10.3011 15.25 10.5C15.25 10.6989 15.3291 10.8897 15.4697 11.0303C15.6104 11.171 15.8011 11.25 16 11.25H22C22.199 11.25 22.3897 11.171 22.5304 11.0303C22.671 10.8897 22.75 10.6989 22.75 10.5C22.75 10.3011 22.671 10.1103 22.5304 9.96967C22.3897 9.82902 22.199 9.75 22 9.75H16Z"
                    fill="#D13D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="friends__item">
            <figure className="friends__image">
              <img
                src={require("../../assets/images/cards-1.png")}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
            </figure>

            <div className="friends__name">Thảo Mộc</div>

            <div className="friends__btns">
              <button className="friends__btn">
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

              <button className="friends__btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 2.25C9.28103 2.25 8.23182 2.6846 7.45823 3.45818C6.68464 4.23177 6.25004 5.28098 6.25004 6.375C6.25004 7.46902 6.68464 8.51823 7.45823 9.29182C8.23182 10.0654 9.28103 10.5 10.375 10.5C11.4691 10.5 12.5183 10.0654 13.2919 9.29182C14.0654 8.51823 14.5 7.46902 14.5 6.375C14.5 5.28098 14.0654 4.23177 13.2919 3.45818C12.5183 2.6846 11.4691 2.25 10.375 2.25ZM10.375 12C9.42911 12 8.49263 12.1883 7.62026 12.5541C6.74788 12.9198 5.95706 13.4556 5.29393 14.1302C4.6308 14.8047 4.10863 15.6046 3.75789 16.4831C3.40715 17.3616 3.23485 18.3012 3.25104 19.247C3.25317 19.3742 3.28759 19.4987 3.3511 19.6089C3.4146 19.7191 3.50508 19.8114 3.61404 19.877C5.65484 21.106 7.99278 21.7536 10.375 21.75C12.847 21.75 15.161 21.066 17.135 19.877C17.2442 19.8115 17.3349 19.7193 17.3986 19.6091C17.4622 19.4989 17.4968 19.3743 17.499 19.247L17.5 19.127V19.125C17.5 17.2353 16.7494 15.4231 15.4132 14.0869C14.077 12.7507 12.2647 12 10.375 12ZM16 9.75C15.8011 9.75 15.6104 9.82902 15.4697 9.96967C15.3291 10.1103 15.25 10.3011 15.25 10.5C15.25 10.6989 15.3291 10.8897 15.4697 11.0303C15.6104 11.171 15.8011 11.25 16 11.25H22C22.199 11.25 22.3897 11.171 22.5304 11.0303C22.671 10.8897 22.75 10.6989 22.75 10.5C22.75 10.3011 22.671 10.1103 22.5304 9.96967C22.3897 9.82902 22.199 9.75 22 9.75H16Z"
                    fill="#D13D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="friends__item">
            <figure className="friends__image">
              <img
                src={require("../../assets/images/cards-1.png")}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
            </figure>

            <div className="friends__name">Thảo Mộc</div>

            <div className="friends__btns">
              <button className="friends__btn">
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

              <button className="friends__btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 2.25C9.28103 2.25 8.23182 2.6846 7.45823 3.45818C6.68464 4.23177 6.25004 5.28098 6.25004 6.375C6.25004 7.46902 6.68464 8.51823 7.45823 9.29182C8.23182 10.0654 9.28103 10.5 10.375 10.5C11.4691 10.5 12.5183 10.0654 13.2919 9.29182C14.0654 8.51823 14.5 7.46902 14.5 6.375C14.5 5.28098 14.0654 4.23177 13.2919 3.45818C12.5183 2.6846 11.4691 2.25 10.375 2.25ZM10.375 12C9.42911 12 8.49263 12.1883 7.62026 12.5541C6.74788 12.9198 5.95706 13.4556 5.29393 14.1302C4.6308 14.8047 4.10863 15.6046 3.75789 16.4831C3.40715 17.3616 3.23485 18.3012 3.25104 19.247C3.25317 19.3742 3.28759 19.4987 3.3511 19.6089C3.4146 19.7191 3.50508 19.8114 3.61404 19.877C5.65484 21.106 7.99278 21.7536 10.375 21.75C12.847 21.75 15.161 21.066 17.135 19.877C17.2442 19.8115 17.3349 19.7193 17.3986 19.6091C17.4622 19.4989 17.4968 19.3743 17.499 19.247L17.5 19.127V19.125C17.5 17.2353 16.7494 15.4231 15.4132 14.0869C14.077 12.7507 12.2647 12 10.375 12ZM16 9.75C15.8011 9.75 15.6104 9.82902 15.4697 9.96967C15.3291 10.1103 15.25 10.3011 15.25 10.5C15.25 10.6989 15.3291 10.8897 15.4697 11.0303C15.6104 11.171 15.8011 11.25 16 11.25H22C22.199 11.25 22.3897 11.171 22.5304 11.0303C22.671 10.8897 22.75 10.6989 22.75 10.5C22.75 10.3011 22.671 10.1103 22.5304 9.96967C22.3897 9.82902 22.199 9.75 22 9.75H16Z"
                    fill="#D13D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="friends__item">
            <figure className="friends__image">
              <img
                src={require("../../assets/images/cards-1.png")}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              />
            </figure>

            <div className="friends__name">Thảo Mộc</div>

            <div className="friends__btns">
              <button className="friends__btn">
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

              <button className="friends__btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 2.25C9.28103 2.25 8.23182 2.6846 7.45823 3.45818C6.68464 4.23177 6.25004 5.28098 6.25004 6.375C6.25004 7.46902 6.68464 8.51823 7.45823 9.29182C8.23182 10.0654 9.28103 10.5 10.375 10.5C11.4691 10.5 12.5183 10.0654 13.2919 9.29182C14.0654 8.51823 14.5 7.46902 14.5 6.375C14.5 5.28098 14.0654 4.23177 13.2919 3.45818C12.5183 2.6846 11.4691 2.25 10.375 2.25ZM10.375 12C9.42911 12 8.49263 12.1883 7.62026 12.5541C6.74788 12.9198 5.95706 13.4556 5.29393 14.1302C4.6308 14.8047 4.10863 15.6046 3.75789 16.4831C3.40715 17.3616 3.23485 18.3012 3.25104 19.247C3.25317 19.3742 3.28759 19.4987 3.3511 19.6089C3.4146 19.7191 3.50508 19.8114 3.61404 19.877C5.65484 21.106 7.99278 21.7536 10.375 21.75C12.847 21.75 15.161 21.066 17.135 19.877C17.2442 19.8115 17.3349 19.7193 17.3986 19.6091C17.4622 19.4989 17.4968 19.3743 17.499 19.247L17.5 19.127V19.125C17.5 17.2353 16.7494 15.4231 15.4132 14.0869C14.077 12.7507 12.2647 12 10.375 12ZM16 9.75C15.8011 9.75 15.6104 9.82902 15.4697 9.96967C15.3291 10.1103 15.25 10.3011 15.25 10.5C15.25 10.6989 15.3291 10.8897 15.4697 11.0303C15.6104 11.171 15.8011 11.25 16 11.25H22C22.199 11.25 22.3897 11.171 22.5304 11.0303C22.671 10.8897 22.75 10.6989 22.75 10.5C22.75 10.3011 22.671 10.1103 22.5304 9.96967C22.3897 9.82902 22.199 9.75 22 9.75H16Z"
                    fill="#D13D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
