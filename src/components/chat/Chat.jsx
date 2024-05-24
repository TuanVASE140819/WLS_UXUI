import React, { useContext, useState } from "react";
import "./Chat.scss";
import { Link } from "react-router-dom";

import SearchContext from "../../SearchContext";
import Policy from "../policy/policy";
const Chat = () => {
  const [open2, setOpen2] = useState(true);

  const { searchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue); // 'RMIT
  return (
    <>
      <div className="chats">
        <div className="chats__wrapper">
          <div className="chats__body">
            <div className="chats__header">
              <div className="chats__infor">
                <img
                  src={require("../../assets/images/article-2.png")}
                  alt=""
                />

                <div className="infor_chat__name">
                  <h4>Nguyễn Văn A</h4>
                  <div className="infor_chat__number">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1242 5C13.1242 5.8288 12.7949 6.62366 12.2089 7.20971C11.6228 7.79576 10.828 8.125 9.99917 8.125C9.17037 8.125 8.37551 7.79576 7.78946 7.20971C7.20341 6.62366 6.87417 5.8288 6.87417 5C6.87417 4.1712 7.20341 3.37634 7.78946 2.79029C8.37551 2.20424 9.17037 1.875 9.99917 1.875C10.828 1.875 11.6228 2.20424 12.2089 2.79029C12.7949 3.37634 13.1242 4.1712 13.1242 5ZM3.75 16.765C3.77678 15.1253 4.44695 13.5618 5.61598 12.4117C6.78501 11.2616 8.35924 10.6171 9.99917 10.6171C11.6391 10.6171 13.2133 11.2616 14.3824 12.4117C15.5514 13.5618 16.2216 15.1253 16.2483 16.765C14.2878 17.664 12.156 18.1279 9.99917 18.125C7.76917 18.125 5.6525 17.6383 3.75 16.765Z"
                        stroke="#AAAAAA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12</span>
                  </div>
                </div>
              </div>
              <div className="chats__dot">
                <div className="chat-dot-button__btnPopup">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.1875 24.5C9.1875 23.6878 9.51015 22.9088 10.0845 22.3345C10.6588 21.7602 11.4378 21.4375 12.25 21.4375C13.0622 21.4375 13.8412 21.7602 14.4155 22.3345C14.9898 22.9088 15.3125 23.6878 15.3125 24.5C15.3125 25.3122 14.9898 26.0912 14.4155 26.6655C13.8412 27.2398 13.0622 27.5625 12.25 27.5625C11.4378 27.5625 10.6588 27.2398 10.0845 26.6655C9.51015 26.0912 9.1875 25.3122 9.1875 24.5ZM21.4375 24.5C21.4375 23.6878 21.7602 22.9088 22.3345 22.3345C22.9088 21.7602 23.6878 21.4375 24.5 21.4375C25.3122 21.4375 26.0912 21.7602 26.6655 22.3345C27.2398 22.9088 27.5625 23.6878 27.5625 24.5C27.5625 25.3122 27.2398 26.0912 26.6655 26.6655C26.0912 27.2398 25.3122 27.5625 24.5 27.5625C23.6878 27.5625 22.9088 27.2398 22.3345 26.6655C21.7602 26.0912 21.4375 25.3122 21.4375 24.5ZM33.6875 24.5C33.6875 23.6878 34.0102 22.9088 34.5845 22.3345C35.1588 21.7602 35.9378 21.4375 36.75 21.4375C37.5622 21.4375 38.3412 21.7602 38.9155 22.3345C39.4898 22.9088 39.8125 23.6878 39.8125 24.5C39.8125 25.3122 39.4898 26.0912 38.9155 26.6655C38.3412 27.2398 37.5622 27.5625 36.75 27.5625C35.9378 27.5625 35.1588 27.2398 34.5845 26.6655C34.0102 26.0912 33.6875 25.3122 33.6875 24.5Z"
                      fill="#4C4C4C"
                    />
                  </svg>
                  <div className="chat-dot-button__popup">
                    <Link
                      to="/schoolDetail"
                      className="chat-dot-button__popup-item"
                    >
                      Rời khỏi
                    </Link>
                    <Link to="/schoolDetail">Đổi tên</Link>
                    <Link to="/schoolDetail">Thêm thành viên</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats__content">
              <div className="chat-container">
                <div className="chat-box">
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Alo???</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message sent">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Sender Avatar"
                      className="avatar avatar-sender"
                    />
                    <div className="message-content">
                      <p>Hỏi gì thế</p>
                    </div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Đang ngủ nha tụi pay</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Có chuyện gì vậy ?</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Alo???</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message sent">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Sender Avatar"
                      className="avatar avatar-sender"
                    />
                    <div className="message-content">
                      <p>Hỏi gì thế</p>
                    </div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Đang ngủ nha tụi pay</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Có chuyện gì vậy ?</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Alo???</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message sent">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Sender Avatar"
                      className="avatar avatar-sender"
                    />
                    <div className="message-content">
                      <p>Hỏi gì thế</p>
                    </div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Đang ngủ nha tụi pay</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Có chuyện gì vậy ?</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Alo???</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message sent">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Sender Avatar"
                      className="avatar avatar-sender"
                    />
                    <div className="message-content">
                      <p>Hỏi gì thế</p>
                    </div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Đang ngủ nha tụi pay</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Có chuyện gì vậy ?</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Alo???</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message sent">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Sender Avatar"
                      className="avatar avatar-sender"
                    />
                    <div className="message-content">
                      <p>Hỏi gì thế</p>
                    </div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Đang ngủ nha tụi pay</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                  <div className="message received">
                    <img
                      src={require("../../assets/images/article-2.png")}
                      alt="Receiver Avatar"
                      className="avatar2"
                    />
                    <div className="message-content">
                      <p>Có chuyện gì vậy ?</p>
                    </div>
                    <div className="message-time">3:00 PM</div>
                  </div>
                </div>
                <div class="input-container">
                  <form id="chat-form">
                    <svg
                      width="20"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.7139 4.57393C23.4528 4.31276 23.1427 4.10559 22.8015 3.96424C22.4603 3.8229 22.0945 3.75015 21.7252 3.75015C21.3558 3.75015 20.9901 3.8229 20.6489 3.96424C20.3076 4.10559 19.9976 4.31276 19.7364 4.57393L6.06143 18.2489C5.18241 19.1281 4.68864 20.3205 4.68876 21.5637C4.68887 22.807 5.18286 23.9993 6.06206 24.8783C6.94125 25.7573 8.13363 26.2511 9.37687 26.251C10.6201 26.2509 11.8124 25.7569 12.6914 24.8777L22.3077 15.2614C22.4854 15.0958 22.7205 15.0057 22.9633 15.01C23.2062 15.0142 23.4379 15.1126 23.6097 15.2844C23.7815 15.4562 23.8799 15.6879 23.8842 15.9308C23.8884 16.1736 23.7983 16.4087 23.6327 16.5864L14.0164 26.2027C13.41 26.825 12.686 27.3207 11.8865 27.661C11.0869 28.0013 10.2278 28.1794 9.35885 28.1851C8.48993 28.1907 7.62854 28.0237 6.82467 27.6938C6.0208 27.3638 5.29045 26.8775 4.67602 26.2631C4.06158 25.6487 3.57529 24.9183 3.24536 24.1144C2.91542 23.3106 2.74842 22.4492 2.75404 21.5803C2.75966 20.7113 2.93779 19.8522 3.2781 19.0526C3.6184 18.2531 4.1141 17.5291 4.73643 16.9227L18.4102 3.24768C19.2894 2.36865 20.4817 1.87488 21.725 1.875C22.9682 1.87512 24.1605 2.36911 25.0396 3.2483C25.9186 4.12749 26.4124 5.31987 26.4122 6.56312C26.4121 7.80637 25.9181 8.99865 25.0389 9.87768L11.3727 23.5439L11.3627 23.5539L11.3539 23.5627L11.3514 23.5652L11.3477 23.5677C10.8131 24.0666 10.1053 24.3377 9.37422 24.3236C8.64314 24.3094 7.94632 24.0111 7.43147 23.4919C6.91663 22.9727 6.62424 22.2733 6.6163 21.5422C6.60836 20.811 6.88549 20.1055 7.38893 19.5752L17.1514 9.81268C17.3282 9.64182 17.5649 9.54721 17.8107 9.54923C18.0566 9.55125 18.2917 9.64973 18.4656 9.82347C18.6395 9.99721 18.7383 10.2323 18.7405 10.4781C18.7428 10.7239 18.6484 10.9608 18.4777 11.1377L8.71518 20.9002C8.53815 21.0749 8.43777 21.3128 8.43613 21.5615C8.43449 21.8102 8.53172 22.0494 8.70643 22.2264C8.88114 22.4035 9.11902 22.5038 9.36774 22.5055C9.61647 22.5071 9.85565 22.4099 10.0327 22.2352L23.7139 8.55018C23.9751 8.28901 24.1823 7.97896 24.3236 7.63773C24.465 7.2965 24.5377 6.93077 24.5377 6.56143C24.5377 6.19208 24.465 5.82635 24.3236 5.48512C24.1823 5.14389 23.9751 4.83509 23.7139 4.57393Z"
                        fill="#8C8C8C"
                      />
                    </svg>
                    <input
                      type="text"
                      id="message"
                      placeholder="Type your message..."
                    />
                    <div className="chat-image">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.8125 19.6875L9.26125 13.2387C9.52242 12.9776 9.83246 12.7704 10.1737 12.6291C10.5149 12.4877 10.8807 12.415 11.25 12.415C11.6193 12.415 11.9851 12.4877 12.3263 12.6291C12.6675 12.7704 12.9776 12.9776 13.2387 13.2387L19.6875 19.6875M17.8125 17.8125L19.5738 16.0512C19.8349 15.7901 20.145 15.5829 20.4862 15.4416C20.8274 15.3002 21.1932 15.2275 21.5625 15.2275C21.9318 15.2275 22.2976 15.3002 22.6388 15.4416C22.98 15.5829 23.2901 15.7901 23.5512 16.0512L27.1875 19.6875M4.6875 24.375H25.3125C25.8098 24.375 26.2867 24.1775 26.6383 23.8258C26.99 23.4742 27.1875 22.9973 27.1875 22.5V7.5C27.1875 7.00272 26.99 6.52581 26.6383 6.17417C26.2867 5.82254 25.8098 5.625 25.3125 5.625H4.6875C4.19022 5.625 3.71331 5.82254 3.36167 6.17417C3.01004 6.52581 2.8125 7.00272 2.8125 7.5V22.5C2.8125 22.9973 3.01004 23.4742 3.36167 23.8258C3.71331 24.1775 4.19022 24.375 4.6875 24.375ZM17.8125 10.3125H17.8225V10.3225H17.8125V10.3125ZM18.2812 10.3125C18.2812 10.4368 18.2319 10.556 18.144 10.644C18.056 10.7319 17.9368 10.7812 17.8125 10.7812C17.6882 10.7812 17.569 10.7319 17.481 10.644C17.3931 10.556 17.3438 10.4368 17.3438 10.3125C17.3438 10.1882 17.3931 10.069 17.481 9.98104C17.569 9.89314 17.6882 9.84375 17.8125 9.84375C17.9368 9.84375 18.056 9.89314 18.144 9.98104C18.2319 10.069 18.2812 10.1882 18.2812 10.3125Z"
                          stroke="#8C8C8C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="chat-icon">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9775 18.9775C18.4552 19.4998 17.8351 19.9142 17.1526 20.1969C16.4701 20.4796 15.7387 20.625 15 20.625C14.2613 20.625 13.5299 20.4796 12.8474 20.1969C12.1649 19.9142 11.5448 19.4998 11.0225 18.9775M26.25 15C26.25 16.4774 25.959 17.9403 25.3936 19.3052C24.8283 20.6701 23.9996 21.9103 22.955 22.955C21.9103 23.9996 20.6701 24.8283 19.3052 25.3936C17.9403 25.959 16.4774 26.25 15 26.25C13.5226 26.25 12.0597 25.959 10.6948 25.3936C9.3299 24.8283 8.08971 23.9996 7.04505 22.955C6.00039 21.9103 5.17172 20.6701 4.60636 19.3052C4.04099 17.9403 3.75 16.4774 3.75 15C3.75 12.0163 4.93526 9.15483 7.04505 7.04505C9.15483 4.93526 12.0163 3.75 15 3.75C17.9837 3.75 20.8452 4.93526 22.955 7.04505C25.0647 9.15483 26.25 12.0163 26.25 15ZM12.1875 12.1875C12.1875 12.705 11.9775 13.125 11.7188 13.125C11.46 13.125 11.25 12.705 11.25 12.1875C11.25 11.67 11.46 11.25 11.7188 11.25C11.9775 11.25 12.1875 11.67 12.1875 12.1875ZM11.7188 12.1875H11.7288V12.2063H11.7188V12.1875ZM18.75 12.1875C18.75 12.705 18.54 13.125 18.2812 13.125C18.0225 13.125 17.8125 12.705 17.8125 12.1875C17.8125 11.67 18.0225 11.25 18.2812 11.25C18.54 11.25 18.75 11.67 18.75 12.1875ZM18.2812 12.1875H18.2913V12.2063H18.2812V12.1875Z"
                          stroke="#8C8C8C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <button type="submit">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_816_5068)">
                          <path
                            d="M3.47876 2.4038C3.3488 2.36604 3.21104 2.36416 3.08009 2.39834C2.94914 2.43253 2.82988 2.50151 2.73496 2.59797C2.64003 2.69443 2.57298 2.81479 2.5409 2.94627C2.50882 3.07775 2.51292 3.21546 2.55276 3.3448L4.98476 11.2498H13.5008C13.6997 11.2498 13.8904 11.3288 14.0311 11.4695C14.1717 11.6101 14.2508 11.8009 14.2508 11.9998C14.2508 12.1987 14.1717 12.3895 14.0311 12.5301C13.8904 12.6708 13.6997 12.7498 13.5008 12.7498H4.98476L2.55276 20.6548C2.51316 20.7841 2.50924 20.9217 2.54142 21.053C2.5736 21.1843 2.64069 21.3045 2.73557 21.4008C2.83046 21.4971 2.94962 21.566 3.08045 21.6002C3.21128 21.6343 3.3489 21.6325 3.47876 21.5948C10.0937 19.6711 16.3317 16.6321 21.9238 12.6088C22.0204 12.5393 22.0991 12.4479 22.1534 12.342C22.2077 12.2361 22.236 12.1188 22.236 11.9998C22.236 11.8808 22.2077 11.7635 22.1534 11.6576C22.0991 11.5517 22.0204 11.4603 21.9238 11.3908C16.3318 7.3671 10.0938 4.32776 3.47876 2.4038Z"
                            fill="#3D92D1"
                          />
                          <path
                            d="M3.47876 2.4038C3.3488 2.36604 3.21104 2.36416 3.08009 2.39834C2.94914 2.43253 2.82988 2.50151 2.73496 2.59797C2.64003 2.69443 2.57298 2.81479 2.5409 2.94627C2.50882 3.07775 2.51292 3.21546 2.55276 3.3448L4.98476 11.2498H13.5008C13.6997 11.2498 13.8904 11.3288 14.0311 11.4695C14.1717 11.6101 14.2508 11.8009 14.2508 11.9998C14.2508 12.1987 14.1717 12.3895 14.0311 12.5301C13.8904 12.6708 13.6997 12.7498 13.5008 12.7498H4.98476L2.55276 20.6548C2.51316 20.7841 2.50924 20.9217 2.54142 21.053C2.5736 21.1843 2.64069 21.3045 2.73557 21.4008C2.83046 21.4971 2.94962 21.566 3.08045 21.6002C3.21128 21.6343 3.3489 21.6325 3.47876 21.5948C10.0937 19.6711 16.3317 16.6321 21.9238 12.6088C22.0204 12.5393 22.0991 12.4479 22.1534 12.342C22.2077 12.2361 22.236 12.1188 22.236 11.9998C22.236 11.8808 22.2077 11.7635 22.1534 11.6576C22.0991 11.5517 22.0204 11.4603 21.9238 11.3908C16.3318 7.3671 10.0938 4.32776 3.47876 2.4038Z"
                            fill="#3D92D1"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_816_5068">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chats__right">
        <div className="chats__right__wrapper">
          <div className="chats__right__header">
            <input
              type="text"
              placeholder="Tìm kiếm trò chuyện"
              className="chats__right__search"
            />
            <div className="chats__right__setting">
              <Link to="/create" className="chats__right__create">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.75 0C4.365 0 0 4.365 0 9.75C0 15.135 4.365 19.5 9.75 19.5C15.135 19.5 19.5 15.135 19.5 9.75C19.5 4.365 15.135 0 9.75 0ZM10.5 6.75C10.5 6.55109 10.421 6.36032 10.2803 6.21967C10.1397 6.07902 9.94891 6 9.75 6C9.55109 6 9.36032 6.07902 9.21967 6.21967C9.07902 6.36032 9 6.55109 9 6.75V9H6.75C6.55109 9 6.36032 9.07902 6.21967 9.21967C6.07902 9.36032 6 9.55109 6 9.75C6 9.94891 6.07902 10.1397 6.21967 10.2803C6.36032 10.421 6.55109 10.5 6.75 10.5H9V12.75C9 12.9489 9.07902 13.1397 9.21967 13.2803C9.36032 13.421 9.55109 13.5 9.75 13.5C9.94891 13.5 10.1397 13.421 10.2803 13.2803C10.421 13.1397 10.5 12.9489 10.5 12.75V10.5H12.75C12.9489 10.5 13.1397 10.421 13.2803 10.2803C13.421 10.1397 13.5 9.94891 13.5 9.75C13.5 9.55109 13.421 9.36032 13.2803 9.21967C13.1397 9.07902 12.9489 9 12.75 9H10.5V6.75Z"
                    fill="#4C4C4C"
                  />
                </svg>
              </Link>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.23321 5.89742e-08C7.31621 5.89742e-08 6.53421 0.663 6.38321 1.567L6.20521 2.639C6.18521 2.759 6.09021 2.899 5.90821 2.987C5.56556 3.15171 5.23594 3.34226 4.92221 3.557C4.75621 3.672 4.58821 3.683 4.47221 3.64L3.45521 3.258C3.03945 3.10224 2.58191 3.09906 2.16402 3.24904C1.74614 3.39901 1.39504 3.69241 1.17321 4.077L0.251208 5.674C0.0292973 6.05836 -0.0490775 6.50897 0.0300254 6.94569C0.109128 7.3824 0.34058 7.7769 0.683208 8.059L1.52321 8.751C1.61821 8.829 1.69321 8.98 1.67721 9.181C1.64871 9.56013 1.64871 9.94087 1.67721 10.32C1.69221 10.52 1.61821 10.672 1.52421 10.75L0.683208 11.442C0.34058 11.7241 0.109128 12.1186 0.0300254 12.5553C-0.0490775 12.992 0.0292973 13.4426 0.251208 13.827L1.17321 15.424C1.39519 15.8084 1.74637 16.1016 2.16423 16.2514C2.5821 16.4012 3.03956 16.3978 3.45521 16.242L4.47421 15.86C4.58921 15.817 4.75721 15.829 4.92421 15.942C5.23621 16.156 5.56521 16.347 5.90921 16.512C6.09121 16.6 6.18621 16.74 6.20621 16.862L6.38421 17.933C6.53521 18.837 7.31721 19.5 8.23421 19.5H10.0782C10.9942 19.5 11.7772 18.837 11.9282 17.933L12.1062 16.861C12.1262 16.741 12.2202 16.601 12.4032 16.512C12.7472 16.347 13.0762 16.156 13.3882 15.942C13.5552 15.828 13.7232 15.817 13.8382 15.86L14.8582 16.242C15.2737 16.3972 15.7308 16.4001 16.1482 16.2502C16.5657 16.1002 16.9164 15.8071 17.1382 15.423L18.0612 13.826C18.2831 13.4416 18.3615 12.991 18.2824 12.5543C18.2033 12.1176 17.9718 11.7231 17.6292 11.441L16.7892 10.749C16.6942 10.671 16.6192 10.52 16.6352 10.319C16.6636 9.93987 16.6636 9.55913 16.6352 9.18C16.6192 8.98 16.6942 8.828 16.7882 8.75L17.6282 8.058C18.3362 7.476 18.5192 6.468 18.0612 5.673L17.1392 4.076C16.9172 3.69159 16.566 3.3984 16.1482 3.24861C15.7303 3.09883 15.2729 3.10215 14.8572 3.258L13.8372 3.64C13.7232 3.683 13.5552 3.671 13.3882 3.557C13.0748 3.3423 12.7455 3.15175 12.4032 2.987C12.2202 2.9 12.1262 2.76 12.1062 2.639L11.9272 1.567C11.8543 1.12906 11.6283 0.731216 11.2895 0.444267C10.9508 0.157318 10.5212 -0.00011124 10.0772 5.89742e-08H8.23421H8.23321ZM9.15521 13.5C10.1498 13.5 11.1036 13.1049 11.8069 12.4017C12.5101 11.6984 12.9052 10.7446 12.9052 9.75C12.9052 8.75544 12.5101 7.80161 11.8069 7.09835C11.1036 6.39509 10.1498 6 9.15521 6C8.16065 6 7.20682 6.39509 6.50356 7.09835C5.8003 7.80161 5.40521 8.75544 5.40521 9.75C5.40521 10.7446 5.8003 11.6984 6.50356 12.4017C7.20682 13.1049 8.16065 13.5 9.15521 13.5Z"
                  fill="#4C4C4C"
                />
              </svg>

              {/* create */}
            </div>
          </div>
          <div className="chats__right__body">
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
            <div className="chats__right__item">
              <img src={require("../../assets/images/article-2.png")} alt="" />

              <div className="chats__right__name">
                <div className="chats__right__name__wrapper">
                  Anti những đứa tên Hòa
                </div>
                <p>Tao gọi chơi</p>
              </div>
              <div className="chats__right__time">
                <div className="chats__right__time__wrapper">
                  <p>3 giờ</p>
                </div>
                <div className="chats__right__time__wrapper">
                  <div className="chats__right__time__wrapper__dot">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
