import React from "react";
import "./contacts.scss";
import CollapseList from "../../components/collapseList/CollapseList";

const Contacts = () => {
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
      <div className="contacts">
        <div className="contacts__wrapper">
          <form className="contacts__form">
            <div className="contacts__header">
              <h4>Contact</h4>
            </div>
            <div className="contacts__content">
              <div className="contacts__left">
                <div className="contacts__inputWrapper">
                  <label htmlFor="name">Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    defaultValue="Nguyễn Văn A"
                  />
                </div>
                <div className="contacts__inputWrapper">
                  <label htmlFor="sdt">Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    defaultValue="03485181515"
                  />
                </div>
              </div>
              <div className="contacts__right">
                <div className="contacts__inputWrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    defaultValue="nguyenvana@gmail.com"
                  />
                </div>
                <div className="contacts__inputWrapper">
                  <label htmlFor="chude">Chủ đề</label>
                  <input type="text" placeholder="Chủ đề" defaultValue="Hihi" />
                </div>
              </div>
            </div>
            <div className="contacts__inputWrapper">
              <label htmlFor="chude">Ghi chú</label>
              <textarea
                cols="30"
                rows="3"
                defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore"
              ></textarea>
            </div>
            <div className="contacts__btnContainer">
              <div className="contacts__btn">Gửi</div>
            </div>
          </form>
          <div className="contacts__info">
            <div className="contacts__text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="none"
                viewBox="0 0 29 29"
              >
                <g clipPath="url(#clip0_36_943)">
                  <path
                    fill="#515151"
                    d="M5.88 0c.57.12 1.11.3 1.56.68.06.05.13.1.19.16 1.28 1.28 2.57 2.56 3.85 3.85.95.96 1.11 2.28.44 3.37-.3.49-.72.84-1.27 1.04-.79.28-1.4.76-1.73 1.55-.23.52-.26 1.05-.11 1.61.38 1.44 1.17 2.64 2.13 3.75 1.15 1.32 2.47 2.45 4.06 3.23.66.32 1.34.61 2.11.5 1.01-.14 1.78-.63 2.18-1.6.26-.63.58-1.2 1.19-1.56 1-.59 2.26-.51 3.12.27.78.71 1.52 1.48 2.27 2.23.68.68 1.39 1.35 2.03 2.07.8.92.83 2.35.12 3.34-.15.2-.31.4-.48.57-.75.76-1.53 1.5-2.26 2.28-.78.83-1.75 1.19-2.86 1.24-1.19.05-2.33-.21-3.44-.59-2.19-.74-4.18-1.9-6.05-3.24a39.13 39.13 0 01-8.18-7.87C3.02 14.66 1.54 12.29.63 9.61.23 8.44-.04 7.25.03 6c.03-1.08.39-2.03 1.2-2.8.68-.65 1.35-1.31 1.99-1.99C3.8.61 4.42.11 5.27 0h.61z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_36_943">
                    <path fill="#fff" d="M0 0H28.52V28.59H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              03941140015
            </div>
            <div className="contacts__text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="36"
                fill="none"
                viewBox="0 0 37 36"
              >
                <g fill="#515151" clipPath="url(#clip0_36_957)">
                  <path d="M11.36 22.82c-.44-3.07-.45-6.38 0-9.76H25.4c.44 3.24.44 6.48 0 9.76H11.36zM11.78 10.55c.67-2.85 1.54-5.59 3.4-7.9.51-.63 1.1-1.17 1.83-1.55.96-.5 1.91-.47 2.85.05.95.53 1.65 1.31 2.26 2.2 1.35 1.98 2.13 4.2 2.7 6.5.05.22.1.45.16.69-4.4.01-8.77.01-13.2.01zM11.79 25.32h13.19c-.49 2.21-1.14 4.34-2.29 6.27-.47.78-1.01 1.54-1.64 2.2-1.73 1.79-3.59 1.79-5.32-.01-.66-.68-1.22-1.48-1.7-2.3-1.13-1.89-1.76-3.98-2.24-6.16zM27.88 22.82c.4-3.27.4-6.51 0-9.8h.39c2.49 0 4.97 0 7.46-.01.27 0 .39.07.46.35.77 3.06.77 6.11-.02 9.17-.05.19-.09.31-.34.31-2.59-.01-5.18-.01-7.77-.01-.05.02-.1 0-.18-.01zM8.88 13.05c-.4 3.26-.4 6.51 0 9.8h-.4c-2.47 0-4.95 0-7.42.01-.29 0-.42-.06-.49-.36-.76-3.06-.77-6.12.02-9.17.05-.2.11-.3.35-.3 2.58.01 5.15.01 7.73.01.06-.01.12 0 .21.01zM22.51.05c4.54.44 11.65 6.35 12.64 10.51H27.5c-.86-3.87-2.06-7.6-4.99-10.51zM14.3 0c-2.98 2.96-4.17 6.67-5.04 10.55H1.57c1.19-2.7 2.91-4.96 5.16-6.82C8.93 1.91 11.42.68 14.3 0zM22.52 35.82c2.92-2.91 4.12-6.62 4.99-10.5h7.65c-1 4.15-8.21 10.15-12.64 10.5zM14.28 35.82C9.82 35.48 2.97 29.79 1.6 25.33h7.67c.39 1.92.92 3.81 1.72 5.62.79 1.81 1.8 3.48 3.29 4.87z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_36_957">
                    <path fill="#fff" d="M0 0H36.76V35.82H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              weloveschool.com
            </div>
            <div className="contacts__text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="27"
                fill="none"
                viewBox="0 0 36 27"
              >
                <g fill="#515151" clipPath="url(#clip0_36_969)">
                  <path d="M35.26 7.43v16.19c-.01.02-.03.04-.04.06-.47 1.87-1.6 2.76-3.53 2.76H3.22C1.37 26.35.01 24.96 0 23.11V7.69c0-.08.02-.16.03-.26.06.03.09.05.12.07 4.76 3.18 9.52 6.35 14.29 9.53 2.14 1.42 4.25 1.43 6.39 0L33.6 8.52c.55-.38 1.11-.73 1.66-1.09z"></path>
                  <path d="M35.26 3.71c-.13.35-.2.74-.41 1.04-.28.41-.61.82-1.02 1.09-4.79 3.22-9.59 6.42-14.4 9.61-1.19.79-2.44.78-3.62 0C11 12.25 6.19 9.04 1.39 5.83.23 5.06-.24 3.72.12 2.39.5 1.03 1.66.1 3.12.01c.1-.01.2-.01.31-.01h28.41c1.57 0 2.79.84 3.26 2.22.06.19.11.39.17.59-.01.3-.01.6-.01.9z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_36_969">
                    <path fill="#fff" d="M0 0H35.26V26.42H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              weloveschool@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="relatedFaqs">
        <div className="relatedFaqs__wrapper">
          <div className="relatedFaqs__header">
            <div className="relatedFaqs__headerItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="46"
                fill="none"
                viewBox="0 0 48 46"
              >
                <path
                  fill="#0487D9"
                  d="M31.68 13.46v.7c0 2.91-.01 5.83.01 8.74 0 .48-.16.77-.53 1.05-1.35 1-2.66 2.05-4.02 3.04-.27.2-.65.33-.98.33-5.18.02-10.36.01-15.55.02-.2 0-.46-.06-.59.03-.24.17-.55.43-.56.66-.01.24.28.53.51.71.13.1.39.05.59.05H24.71c-.18.17-.27.28-.39.37-.95.73-1.98 1.37-2.82 2.2-.58.58-1.17.62-1.87.61-2.69-.02-5.38-.01-8.08-.01-.18 0-.37-.02-.55.01-.41.08-.72.35-.6.75.07.26.38.51.64.66.19.1.47.03.72.03h8.45c-.25.51-.45.94-.66 1.37-.42.85-.85 1.7-1.25 2.56-.33.7.05 1.22.82 1.14 1.07-.11 2.13-.26 3.19-.4.7-.09 1.4-.24 2.11-.26.96-.03 1.72-.42 2.45-1.02 1.38-1.12 2.82-2.17 4.24-3.25.16-.12.32-.23.54-.39v12.59H7.58V13.42c8.03.04 16.04.04 24.1.04zm-12.77 10.9h8.55c.64 0 .99-.27.98-.73-.01-.46-.36-.71-1-.73H10.58c-.22 0-.49-.04-.65.07-.22.16-.5.46-.47.66.03.25.31.5.55.67.14.1.39.04.59.04 2.77.02 5.54.02 8.31.02zm-1.14 17.58h5.22c.2 0 .48.03.58-.08.19-.21.41-.52.4-.79-.02-.46-.41-.59-.84-.59H16.7c-1.44 0-2.87-.01-4.31 0-.62 0-.98.4-.85.9.12.45.46.56.89.56h5.34zm-2.4-23.55h4.97c.67 0 .98-.24.98-.72s-.32-.74-.97-.74h-9.94c-.64 0-.99.26-.99.73s.33.72.98.73c1.66.01 3.31 0 4.97 0zm10.58 0h1.7c.46 0 .75-.24.76-.69.02-.48-.29-.75-.77-.76a96.34 96.34 0 00-3.4 0c-.46.01-.78.25-.76.76.02.47.32.68.76.69.58.01 1.14 0 1.71 0z"
                ></path>
                <path
                  fill="#0487D9"
                  d="M0 42.25V3.41h3.55c0 .26.01.5 0 .73-.05.81.34 1.37 1.03 1.7 1.28.62 2.59.6 3.86-.03.67-.33 1.04-.89.98-1.67-.02-.22 0-.44 0-.71h5.52c.05.78-.11 1.64.68 2.2.72.5 1.51.66 2.36.65.8-.02 1.56-.19 2.22-.69.75-.56.61-1.39.64-2.18h5.51c0 .27.01.5 0 .74-.04.8.34 1.37 1.04 1.7 1.28.61 2.59.59 3.86-.03.67-.33 1.03-.89.99-1.67-.01-.22 0-.44 0-.71h3.56v.62c0 5.26-.01 10.53.01 15.79 0 .43-.13.71-.48.95-.71.5-1.38 1.04-2.19 1.65v-.77V9.84c0-1-.17-1.17-1.16-1.17H3.8c-1 0-1.18.19-1.18 1.22V42.27c-.91-.02-1.75-.02-2.62-.02zM20.18 36.83c.71-1.44 1.38-2.81 2.07-4.18.09-.17.28-.29.43-.41 6.88-5.25 13.77-10.51 20.66-15.76 1.07-.81 2.06-.67 2.89.4.12.16.25.32.37.48.79 1.05.66 2.05-.38 2.85-2.41 1.85-4.82 3.69-7.24 5.53-4.44 3.39-8.87 6.78-13.33 10.15-.36.27-.87.4-1.33.47-1.2.19-2.4.32-3.61.47-.14.01-.3 0-.53 0z"
                ></path>
                <path
                  fill="#0487D9"
                  d="M4.14 13.49h1.92v32.3H4.14v-32.3zM31.66 10.15v1.79H7.58v-1.79h24.08zM35.75 42.26h-2.61v-.67c0-2.99.01-5.98-.01-8.97 0-.43.13-.71.48-.95.7-.5 1.38-1.03 2.14-1.61v12.2zM5.02 2.39c0-.48.04-.97-.01-1.45-.05-.51.19-.75.65-.83.33-.06.67-.11 1.01-.1 1.11.02 1.31.25 1.31 1.35 0 .87-.02 1.74.01 2.6.01.4-.14.62-.51.69-.33.07-.67.15-1.01.15-1.23.01-1.45-.21-1.45-1.44v-.97zM16.42 2.39c0-.52.02-1.05-.01-1.57-.02-.38.15-.59.48-.65.41-.08.83-.16 1.25-.15 1.05.02 1.24.25 1.24 1.28 0 .87-.03 1.74.01 2.6.02.46-.16.69-.57.77-.31.06-.64.13-.95.13-1.24 0-1.45-.22-1.45-1.44v-.97zM30.8 2.44c0 .5-.03 1.01.01 1.51.03.4-.14.62-.5.69-.33.07-.67.15-1.01.15-1.24.01-1.45-.22-1.45-1.44 0-.85.02-1.7-.01-2.54-.01-.37.14-.59.47-.66.41-.08.84-.16 1.25-.15 1.05.02 1.24.25 1.24 1.28v1.16zM4.1 11.95v-1.78h1.93v1.78H4.1z"
                ></path>
              </svg>
              Chính sách chung
            </div>
            <div className="relatedFaqs__headerItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="none"
                viewBox="0 0 46 46"
              >
                <path
                  fill="#0487D9"
                  d="M21.01 23.67c-1.27 1.1-1.68 2.37-1.7 3.87-.05 2.94.29 5.8 1.46 8.52 1.47 3.41 3.75 6.14 6.84 8.18.39.26.78.52 1.17.79.02.01.03.05.07.14H5.66C2.29 45.17 0 42.88 0 39.5V5.68C0 2.3 2.28 0 5.64 0H22.54v8.37c0 3.3 2.3 5.61 5.6 5.62 2.57.01 5.13 0 7.7 0h.6v5.63c-.22-.13-.45-.25-.67-.38-1.69-1.07-3.35-1.02-5.06.02-1.2.73-2.45 1.38-3.7 2.03-.28.15-.63.22-.96.22-6.04.01-12.07.01-18.11.01-.23 0-.47.01-.7.06-.49.11-.81.53-.81 1.02s.31.91.8 1.03c.23.05.46.06.7.06h12.38c.19-.02.37-.02.7-.02zm-5.94-8.62c-2.46 0-4.93-.01-7.39 0-.76 0-1.24.45-1.23 1.1.01.63.48 1.04 1.22 1.06h13.58c.42 0 .84.01 1.26-.01.61-.03 1-.38 1.09-.92.12-.71-.42-1.24-1.28-1.24-2.42.01-4.83.01-7.25.01zm-2.19 21.53h4.92c.15 0 .3.01.45-.01.63-.06 1.06-.48 1.07-1.06.01-.6-.43-1.04-1.08-1.09-.12-.01-.23-.01-.35-.01h-10c-.13 0-.27-.01-.4.01-.62.07-1.04.51-1.04 1.08.01.58.43 1.01 1.06 1.07.15.01.3.01.45.01h4.92zM11.77 8.6H7.95c-.13 0-.27-.01-.4 0-.66.05-1.1.48-1.11 1.07 0 .6.44 1.05 1.09 1.08.5.03 1.01.01 1.51.01h6.89c.75-.02 1.25-.46 1.24-1.1-.01-.62-.49-1.05-1.23-1.06-1.38-.01-2.77 0-4.17 0zm.07 19.36c-1.41 0-2.82-.01-4.22 0-.7.01-1.16.44-1.17 1.05-.01.63.46 1.08 1.18 1.1.45.01.91 0 1.36 0h6.89c.52 0 .97-.14 1.2-.65.34-.75-.2-1.5-1.11-1.52-1.38 0-2.75.02-4.13.02z"
                ></path>
                <path
                  fill="#0487D9"
                  d="M21.46 28.78c0-.52-.01-1.04 0-1.56.02-1.13.6-1.91 1.69-2.22 3.1-.88 6.02-2.15 8.72-3.91.96-.62 1.86-.61 2.81 0 2.36 1.5 4.83 2.75 7.51 3.56.45.14.91.24 1.35.39.89.3 1.47.93 1.52 1.87.17 3.05-.15 6.03-1.48 8.84-1.28 2.68-3.12 4.88-5.58 6.55-1.11.75-2.23 1.49-3.34 2.24-.95.64-1.86.62-2.8-.03-1.05-.72-2.13-1.4-3.18-2.13-4.74-3.28-7.08-7.86-7.22-13.6zm10.71 4.11c-.42-.43-.82-.85-1.23-1.26-.55-.55-1.18-.59-1.64-.13-.46.46-.42 1.1.11 1.65.59.6 1.18 1.19 1.78 1.78.75.75 1.26.76 2.01.02 1.29-1.29 2.58-2.59 3.88-3.88.11-.11.22-.21.3-.34.3-.43.23-1.02-.13-1.38a1.04 1.04 0 00-1.38-.09c-.25.2-.46.44-.69.66-.99.98-1.98 1.95-3.01 2.97zM35.63 11.79c-.3.01-.46.03-.62.03h-6.84c-2.15 0-3.49-1.34-3.49-3.48V.81c.15.08.28.11.37.18.29.23.58.46.84.72 2.99 3.06 5.98 6.12 8.97 9.19.24.25.45.52.77.89z"
                ></path>
              </svg>
              Chính sách bảo mật
            </div>
          </div>
          <CollapseList items={items} />
        </div>
      </div>
    </>
  );
};

export default Contacts;
